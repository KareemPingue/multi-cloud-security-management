
import React from "react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { toast } from "@/components/ui/sonner";
import { Badge } from "@/components/ui/badge";
import { 
  Settings as SettingsIcon, 
  Bell, 
  Lock, 
  RefreshCw, 
  Shield, 
  Cloud, 
  Save, 
  UserCog, 
  Globe, 
  Unplug 
} from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Settings = () => {
  const handleSaveGeneral = () => {
    toast.success("Settings saved", {
      description: "Your general settings have been updated successfully."
    });
  };

  const handleSaveSecurity = () => {
    toast.success("Security settings saved", {
      description: "Your security settings have been updated successfully."
    });
  };

  const handleTestConnection = () => {
    toast.success("Connection successful", {
      description: "All cloud providers are connected and working properly."
    });
  };

  return (
    <div className="animate-fade-in">
      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground mt-1">
          Manage your IAM system preferences and configuration
        </p>
      </header>

      <Tabs defaultValue="general" className="w-full">
        <TabsList className="mb-8 w-full sm:w-auto">
          <TabsTrigger value="general" className="flex-1">
            <SettingsIcon className="h-4 w-4 mr-2" />
            General
          </TabsTrigger>
          <TabsTrigger value="security" className="flex-1">
            <Lock className="h-4 w-4 mr-2" />
            Security
          </TabsTrigger>
          <TabsTrigger value="integration" className="flex-1">
            <Cloud className="h-4 w-4 mr-2" />
            Cloud Integration
          </TabsTrigger>
          <TabsTrigger value="notifications" className="flex-1">
            <Bell className="h-4 w-4 mr-2" />
            Notifications
          </TabsTrigger>
        </TabsList>

        {/* General Settings */}
        <TabsContent value="general">
          <Card>
            <CardHeader>
              <CardTitle>General Settings</CardTitle>
              <CardDescription>
                Manage general system preferences and information
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">System Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Instance Name</label>
                    <Input defaultValue="CloudGuard Production" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Region</label>
                    <Input defaultValue="us-west-1" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">System Version</label>
                    <Input defaultValue="1.0.0" disabled />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Last Updated</label>
                    <Input defaultValue="2023-05-01 10:30:00" disabled />
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Display Settings</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <label className="text-sm font-medium">Dark Mode</label>
                      <p className="text-sm text-muted-foreground">
                        Enable dark mode for the interface
                      </p>
                    </div>
                    <Switch />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <label className="text-sm font-medium">Compact View</label>
                      <p className="text-sm text-muted-foreground">
                        Use more compact UI elements
                      </p>
                    </div>
                    <Switch />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <label className="text-sm font-medium">Auto-refresh</label>
                      <p className="text-sm text-muted-foreground">
                        Automatically refresh data
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <label className="text-sm font-medium">Show Help Tips</label>
                      <p className="text-sm text-muted-foreground">
                        Display helpful tooltips
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
              </div>

              <Separator />

              <div className="flex justify-end">
                <Button onClick={handleSaveGeneral}>
                  <Save className="mr-2 h-4 w-4" />
                  Save Changes
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Security Settings */}
        <TabsContent value="security">
          <Card>
            <CardHeader>
              <CardTitle>Security Settings</CardTitle>
              <CardDescription>
                Manage authentication and security preferences
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Authentication</h3>
                <div className="grid grid-cols-1 gap-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <label className="text-sm font-medium">Two-Factor Authentication</label>
                      <p className="text-sm text-muted-foreground">
                        Require two-factor authentication for all users
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <label className="text-sm font-medium">Single Sign-On (SSO)</label>
                      <p className="text-sm text-muted-foreground">
                        Enable single sign-on with corporate identity providers
                      </p>
                    </div>
                    <Switch />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Session Timeout (minutes)</label>
                    <Input type="number" defaultValue="30" />
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Password Policy</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Minimum Password Length</label>
                    <Input type="number" defaultValue="12" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Password Expiry (days)</label>
                    <Input type="number" defaultValue="90" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <label className="text-sm font-medium">Require Special Characters</label>
                      <p className="text-sm text-muted-foreground">
                        Passwords must contain special characters
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <label className="text-sm font-medium">Enforce Password History</label>
                      <p className="text-sm text-muted-foreground">
                        Prevent reuse of previous passwords
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
              </div>

              <Separator />

              <div className="flex justify-end">
                <Button onClick={handleSaveSecurity}>
                  <Save className="mr-2 h-4 w-4" />
                  Save Security Settings
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Cloud Integration */}
        <TabsContent value="integration">
          <Card>
            <CardHeader>
              <CardTitle>Cloud Provider Integration</CardTitle>
              <CardDescription>
                Configure connections to cloud service providers
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* AWS Integration */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium flex items-center">
                    <Shield className="mr-2 h-5 w-5 text-[#FF9900]" />
                    AWS Integration
                  </h3>
                  <Badge variant="outline" className="bg-green-50 text-green-700 hover:bg-green-50">
                    Connected
                  </Badge>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">AWS Account ID</label>
                    <Input defaultValue="123456789012" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Region</label>
                    <Input defaultValue="us-west-2" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">API Key</label>
                    <Input type="password" defaultValue="••••••••••••••••" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Secret Key</label>
                    <Input type="password" defaultValue="••••••••••••••••" />
                  </div>
                </div>
                <div className="flex justify-end space-x-2">
                  <Button variant="outline">
                    <RefreshCw className="mr-2 h-4 w-4" />
                    Refresh Credentials
                  </Button>
                  <Button variant="outline" className="text-destructive">
                    <Unplug className="mr-2 h-4 w-4" />
                    Disconnect
                  </Button>
                </div>
              </div>

              <Separator />

              {/* Azure Integration */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium flex items-center">
                    <Shield className="mr-2 h-5 w-5 text-[#0078D4]" />
                    Azure Integration
                  </h3>
                  <Badge variant="outline" className="bg-green-50 text-green-700 hover:bg-green-50">
                    Connected
                  </Badge>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Tenant ID</label>
                    <Input defaultValue="a1b2c3d4-e5f6-g7h8-i9j0-k1l2m3n4o5p6" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Subscription ID</label>
                    <Input defaultValue="b2c3d4e5-f6g7-h8i9-j0k1-l2m3n4o5p6q7" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Client ID</label>
                    <Input defaultValue="c3d4e5f6-g7h8-i9j0-k1l2-m3n4o5p6q7r8" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Client Secret</label>
                    <Input type="password" defaultValue="••••••••••••••••" />
                  </div>
                </div>
                <div className="flex justify-end space-x-2">
                  <Button variant="outline">
                    <RefreshCw className="mr-2 h-4 w-4" />
                    Refresh Credentials
                  </Button>
                  <Button variant="outline" className="text-destructive">
                    <Unplug className="mr-2 h-4 w-4" />
                    Disconnect
                  </Button>
                </div>
              </div>

              <Separator />

              {/* GCP Integration */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium flex items-center">
                    <Shield className="mr-2 h-5 w-5 text-[#4285F4]" />
                    Google Cloud Integration
                  </h3>
                  <Badge variant="outline" className="bg-yellow-50 text-yellow-700 hover:bg-yellow-50">
                    Partial
                  </Badge>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Project ID</label>
                    <Input defaultValue="my-gcp-project-123456" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Service Account</label>
                    <Input defaultValue="iam-service@my-gcp-project-123456.iam.gserviceaccount.com" />
                  </div>
                  <div className="col-span-1 md:col-span-2 space-y-2">
                    <label className="text-sm font-medium">Service Account Key (JSON)</label>
                    <Input type="file" />
                  </div>
                </div>
                <div className="flex justify-end space-x-2">
                  <Button variant="outline">
                    <RefreshCw className="mr-2 h-4 w-4" />
                    Refresh Credentials
                  </Button>
                  <Button variant="outline" className="text-destructive">
                    <Unplug className="mr-2 h-4 w-4" />
                    Disconnect
                  </Button>
                </div>
              </div>

              <Separator />

              <div className="flex justify-end space-x-2">
                <Button variant="outline" onClick={handleTestConnection}>
                  <Globe className="mr-2 h-4 w-4" />
                  Test All Connections
                </Button>
                <Button>
                  <Save className="mr-2 h-4 w-4" />
                  Save All Changes
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Notifications */}
        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
              <CardDescription>
                Configure alert and notification preferences
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Email Notifications</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <label className="text-sm font-medium">Policy Changes</label>
                      <p className="text-sm text-muted-foreground">
                        Notify when IAM policies are created, modified, or deleted
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <label className="text-sm font-medium">User Access Changes</label>
                      <p className="text-sm text-muted-foreground">
                        Notify when user roles or permissions change
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <label className="text-sm font-medium">Failed Authentication Attempts</label>
                      <p className="text-sm text-muted-foreground">
                        Notify on multiple failed login attempts
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <label className="text-sm font-medium">System Updates</label>
                      <p className="text-sm text-muted-foreground">
                        Notify about system updates and maintenance
                      </p>
                    </div>
                    <Switch />
                  </div>
                </div>

                <div className="pt-2">
                  <label className="text-sm font-medium">Email Recipients</label>
                  <p className="text-sm text-muted-foreground mb-2">
                    Enter email addresses to receive notifications (separate with commas)
                  </p>
                  <Input defaultValue="admin@example.com, security@example.com" />
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-medium">In-System Notifications</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <label className="text-sm font-medium">Dashboard Alerts</label>
                      <p className="text-sm text-muted-foreground">
                        Show alerts on the dashboard for important events
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <label className="text-sm font-medium">Real-time Notifications</label>
                      <p className="text-sm text-muted-foreground">
                        Show real-time pop-up notifications
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Integration Notifications</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <label className="text-sm font-medium">Slack Integration</label>
                      <p className="text-sm text-muted-foreground">
                        Send notifications to Slack channels
                      </p>
                    </div>
                    <Switch />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <label className="text-sm font-medium">MS Teams Integration</label>
                      <p className="text-sm text-muted-foreground">
                        Send notifications to Microsoft Teams
                      </p>
                    </div>
                    <Switch />
                  </div>
                </div>
              </div>

              <Separator />

              <div className="flex justify-end">
                <Button>
                  <Save className="mr-2 h-4 w-4" />
                  Save Notification Settings
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Settings;
