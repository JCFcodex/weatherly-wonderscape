import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (event === 'SIGNED_IN' && session) {
        navigate("/");
      }
      if (event === 'USER_UPDATED') {
        toast.success('Password updated successfully!');
      }
      if (event === 'SIGNED_UP') {
        // Check if user already exists
        const { error } = await supabase.auth.signUp({
          email: session?.user?.email || '',
          password: '', // This will fail since we don't have the password
        });
        if (error?.message?.includes('User already registered')) {
          toast.error('This email is already registered. Please sign in instead.');
        }
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  return (
    <div className="min-h-screen bg-[#1C1C1E] flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md space-y-8"
      >
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white">Welcome to ForeCastify</h2>
          <p className="mt-2 text-gray-400">Sign in to access your weather dashboard</p>
        </div>
        <div className="bg-white/5 p-6 rounded-lg backdrop-blur-md border border-white/10">
          <Auth
            supabaseClient={supabase}
            appearance={{
              theme: ThemeSupa,
              variables: {
                default: {
                  colors: {
                    brand: '#3b82f6',
                    brandAccent: '#2563eb',
                    inputBackground: 'transparent',
                    inputText: 'white',
                    inputPlaceholder: 'gray',
                  },
                },
              },
              className: {
                container: 'auth-container',
                button: 'auth-button',
                input: 'auth-input',
                label: 'auth-label',
              },
            }}
            theme="dark"
            providers={[]}
            redirectTo={window.location.origin}
            localization={{
              variables: {
                sign_up: {
                  email_input_placeholder: 'Your email',
                  password_input_placeholder: 'Your password',
                  button_label: 'Sign up',
                  loading_button_label: 'Signing up ...',
                  social_provider_text: 'Sign in with {{provider}}',
                  link_text: "Don't have an account? Sign up",
                  confirmation_text: 'Account already exists. Please sign in instead.',
                },
              },
            }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Login;