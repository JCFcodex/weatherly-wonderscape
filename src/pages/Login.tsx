import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { toast } from "@/components/ui/use-toast";

const Login = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    // Handle email confirmation
    const handleEmailConfirmation = async () => {
      const token_hash = searchParams.get('token_hash');
      const type = searchParams.get('type');
      
      if (token_hash && type === 'email_confirmation') {
        const { error } = await supabase.auth.verifyOtp({
          token_hash,
          type: 'email_confirmation',
        });
        
        if (error) {
          toast({
            title: "Error confirming email",
            description: error.message,
            variant: "destructive",
          });
        } else {
          toast({
            title: "Email confirmed",
            description: "You can now sign in with your email",
          });
        }
      }
    };

    handleEmailConfirmation();
  }, [searchParams]);

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN' && session) {
        navigate("/");
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
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Login;