import { createContext, useContext, useEffect, useState } from 'react';
import { Session } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';

const BASE_URL = 'http://localhost:5000/api';

const AuthContext = createContext<{ session: Session | null }>({
  session: null,
});

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    });

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      setSession(session);
      setLoading(false);

      if (event === 'SIGNED_IN' && session) {
        // Update cookie on sign in
        try {
          await fetch(`${BASE_URL}/auth/set`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify({ event, session }),
          });
        } catch (error) {
          console.error('Error setting auth cookie:', error);
        }
      } else if (event === 'SIGNED_OUT') {
        // Remove cookie on sign out
        try {
          await fetch(`${BASE_URL}/auth/remove`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify({ event, session }),
          });
        } catch (error) {
          console.error('Error removing auth cookie:', error);
        }
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  if (loading) {
    return null; // or a loading spinner
  }

  return (
    <AuthContext.Provider value={{ session }}>{children}</AuthContext.Provider>
  );
};