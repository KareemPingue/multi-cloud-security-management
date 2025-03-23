
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Shield } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to dashboard or login page after a brief pause to show splash screen
    const timer = setTimeout(() => {
      navigate("/dashboard");
    }, 1000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background animate-fade-in">
      <div className="text-center">
        <div className="flex justify-center mb-6">
          <div className="h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center animate-pulse">
            <Shield className="h-12 w-12 text-primary" />
          </div>
        </div>
        <h1 className="text-4xl font-bold mb-2">CloudGuard IAM</h1>
        <p className="text-xl text-muted-foreground">
          Identity and Access Management System
        </p>
      </div>
    </div>
  );
};

export default Index;
