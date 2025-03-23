
import React from "react";
import { Link } from "react-router-dom";
import { FileQuestion, Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const NotFound = () => {
  return (
    <div className="h-screen flex items-center justify-center p-4 bg-background">
      <Card className="w-full max-w-md glass-effect animate-scale-in">
        <CardContent className="pt-10 pb-8 flex flex-col items-center text-center space-y-6">
          <div className="h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center">
            <FileQuestion className="h-12 w-12 text-primary" />
          </div>
          
          <div className="space-y-2">
            <h1 className="text-4xl font-bold">404</h1>
            <h2 className="text-xl font-semibold">Page Not Found</h2>
            <p className="text-muted-foreground max-w-xs mx-auto">
              The page you are looking for doesn't exist or has been moved.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full">
            <Button variant="outline" asChild className="flex-1">
              <Link to="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Go Back
              </Link>
            </Button>
            <Button asChild className="flex-1">
              <Link to="/dashboard">
                <Home className="mr-2 h-4 w-4" />
                Dashboard
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NotFound;
