
import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { 
  Home, 
  Shield, 
  Users, 
  ClipboardList, 
  Settings, 
  LogOut, 
  ChevronLeft, 
  ChevronRight, 
  Menu, 
  X,
  Moon,
  Sun
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useIsMobile } from "@/hooks/use-mobile";
import { toast } from "@/components/ui/sonner";

interface NavigationItem {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

const navigation: NavigationItem[] = [
  { name: "Dashboard", href: "/dashboard", icon: Home },
  { name: "Policies", href: "/policies", icon: Shield },
  { name: "Users & Roles", href: "/users", icon: Users },
  { name: "Audit Logs", href: "/audit", icon: ClipboardList },
  { name: "Settings", href: "/settings", icon: Settings },
];

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated, user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const [sidebarOpen, setSidebarOpen] = useState(!isMobile);
  const { theme, setTheme } = useTheme();

  const handleLogout = () => {
    logout();
    navigate("/login");
    toast("You have been logged out");
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    toast(`Theme changed to ${theme === "dark" ? "light" : "dark"} mode`);
  };

  // Redirect to login if not authenticated
  React.useEffect(() => {
    if (!isAuthenticated && location.pathname !== "/login") {
      navigate("/login");
    }
  }, [isAuthenticated, location.pathname, navigate]);

  if (!isAuthenticated && location.pathname !== "/login") {
    return null;
  }

  if (location.pathname === "/login") {
    return <>{children}</>;
  }

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-background">
      {/* Mobile menu button */}
      <div className="md:hidden p-4 fixed top-0 left-0 z-50">
        <Button variant="outline" size="icon" onClick={toggleSidebar} className="glass-effect">
          {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Sidebar */}
      <div 
        className={cn(
          "fixed md:relative h-full z-40 transition-all duration-300 ease-in-out",
          sidebarOpen 
            ? "w-64 translate-x-0" 
            : "w-0 md:w-16 -translate-x-full md:translate-x-0",
          "bg-sidebar border-r border-sidebar-border shadow-lg"
        )}
      >
        <div className="h-full flex flex-col">
          <div className="p-4 flex items-center justify-between h-16">
            <div className={cn("flex items-center space-x-2", !sidebarOpen && "md:hidden")}>
              <Shield className="h-8 w-8 text-primary" />
              <span className="font-bold text-lg">CloudGuard</span>
            </div>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleSidebar} 
              className="hidden md:flex"
            >
              {sidebarOpen ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
            </Button>
          </div>
          
          <div className="mt-8 flex-1 overflow-y-auto">
            <nav className="space-y-1 px-2">
              {navigation.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={cn(
                      "flex items-center px-3 py-3 text-sm font-medium rounded-md transition-all duration-200",
                      isActive
                        ? "bg-sidebar-primary text-sidebar-primary-foreground"
                        : "text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-foreground"
                    )}
                  >
                    <item.icon className={cn("mr-3 h-5 w-5", !sidebarOpen && "md:mr-0")} />
                    <span className={cn("truncate", !sidebarOpen && "md:hidden")}>{item.name}</span>
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="p-4 border-t border-sidebar-border">
            {/* Theme toggle button */}
            <Button
              variant="outline"
              size="sm"
              className={cn(
                "w-full justify-start mb-3",
                !sidebarOpen && "md:justify-center md:px-2"
              )}
              onClick={toggleTheme}
            >
              {theme === "dark" ? (
                <>
                  <Sun className="h-4 w-4 mr-2" />
                  <span className={cn(!sidebarOpen && "md:hidden")}>Light Mode</span>
                </>
              ) : (
                <>
                  <Moon className="h-4 w-4 mr-2" />
                  <span className={cn(!sidebarOpen && "md:hidden")}>Dark Mode</span>
                </>
              )}
            </Button>

            {user && (
              <div className={cn("flex items-center", !sidebarOpen && "md:hidden")}>
                <div className="flex-shrink-0">
                  <div className="h-8 w-8 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                    {user.username.charAt(0).toUpperCase()}
                  </div>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium">{user.username}</p>
                  <p className="text-xs text-sidebar-foreground/60">{user.role}</p>
                </div>
              </div>
            )}
            <div className="mt-3">
              <Button
                variant="outline"
                size="sm"
                className={cn(
                  "w-full justify-start",
                  !sidebarOpen && "md:justify-center md:px-2"
                )}
                onClick={handleLogout}
              >
                <LogOut className="h-4 w-4 mr-2" />
                <span className={cn(!sidebarOpen && "md:hidden")}>Logout</span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div 
        className={cn(
          "flex-1 p-4 md:p-8 transition-all duration-300",
          sidebarOpen && "md:ml-64",
          !sidebarOpen && "md:ml-16"
        )}
      >
        <div className="max-w-7xl mx-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
