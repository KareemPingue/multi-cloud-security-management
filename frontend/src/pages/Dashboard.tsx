
import React from "react";
import { useAuth } from "@/contexts/AuthContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Users, ClipboardList, AlertTriangle, CheckCircle, Cloud } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { mockPolicies, mockUsers, mockRoles, mockAuditLogs } from "@/data/mock-data";
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";

// Cloud breakdown data
const cloudData = [
  { name: "AWS", value: mockPolicies.filter(p => p.cloud === "AWS").length, color: "#FF9900" },
  { name: "Azure", value: mockPolicies.filter(p => p.cloud === "Azure").length, color: "#0078D4" },
  { name: "GCP", value: mockPolicies.filter(p => p.cloud === "GCP").length, color: "#4285F4" },
];

// Policy effect data
const effectData = [
  { name: "Allow", value: mockPolicies.filter(p => p.effect === "Allow").length, color: "#10B981" },
  { name: "Deny", value: mockPolicies.filter(p => p.effect === "Deny").length, color: "#EF4444" },
];

// Recent activity data
const recentActivityData = mockAuditLogs.slice(0, 4);

// Status counts
const successCount = mockAuditLogs.filter(log => log.status === "Success").length;
const failedCount = mockAuditLogs.filter(log => log.status === "Failed").length;

// User status data
const userStatusData = [
  { name: "Active", count: mockUsers.filter(u => u.status === "Active").length },
  { name: "Inactive", count: mockUsers.filter(u => u.status === "Inactive").length },
  { name: "Locked", count: mockUsers.filter(u => u.status === "Locked").length },
];

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="animate-fade-in">
      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground mt-1">
          Welcome back, {user?.username}! Here's an overview of your IAM system.
        </p>
      </header>

      {/* Stats overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="hover-card">
          <CardContent className="p-6 flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Total Policies</p>
              <p className="text-3xl font-bold">{mockPolicies.length}</p>
            </div>
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Shield className="h-6 w-6 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card className="hover-card">
          <CardContent className="p-6 flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Total Users</p>
              <p className="text-3xl font-bold">{mockUsers.length}</p>
            </div>
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Users className="h-6 w-6 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card className="hover-card">
          <CardContent className="p-6 flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Total Roles</p>
              <p className="text-3xl font-bold">{mockRoles.length}</p>
            </div>
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Users className="h-6 w-6 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card className="hover-card">
          <CardContent className="p-6 flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Audit Logs</p>
              <p className="text-3xl font-bold">{mockAuditLogs.length}</p>
            </div>
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
              <ClipboardList className="h-6 w-6 text-primary" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts and detailed stats */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Cloud Distribution */}
        <Card className="hover-card">
          <CardHeader>
            <CardTitle className="text-lg flex items-center">
              <Cloud className="h-5 w-5 mr-2" />
              Cloud Distribution
            </CardTitle>
            <CardDescription>IAM policies by cloud provider</CardDescription>
          </CardHeader>
          <CardContent className="h-[220px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={cloudData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {cloudData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Policy Types */}
        <Card className="hover-card">
          <CardHeader>
            <CardTitle className="text-lg flex items-center">
              <Shield className="h-5 w-5 mr-2" />
              Policy Effect Types
            </CardTitle>
            <CardDescription>Distribution of allow vs deny policies</CardDescription>
          </CardHeader>
          <CardContent className="h-[220px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={effectData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {effectData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* User Status */}
        <Card className="hover-card">
          <CardHeader>
            <CardTitle className="text-lg flex items-center">
              <Users className="h-5 w-5 mr-2" />
              User Status
            </CardTitle>
            <CardDescription>Status distribution of system users</CardDescription>
          </CardHeader>
          <CardContent className="h-[220px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={userStatusData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" fill="#3b82f6" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Recent activity and actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <Card className="hover-card">
          <CardHeader>
            <CardTitle className="text-lg">Recent Activity</CardTitle>
            <CardDescription>Latest actions in the system</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivityData.map((log) => (
                <div key={log.id} className="flex items-start">
                  <div className="mr-4 mt-0.5">
                    {log.status === "Success" ? (
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    ) : (
                      <AlertTriangle className="h-5 w-5 text-amber-500" />
                    )}
                  </div>
                  <div>
                    <p className="font-medium text-sm">{log.action}</p>
                    <p className="text-sm text-muted-foreground">
                      User: {log.user} | Resource: {log.resource}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {new Date(log.timestamp).toLocaleString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 flex justify-center">
              <Button variant="outline" size="sm" className="w-full" asChild>
                <a href="/audit">View All Activity</a>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="hover-card">
          <CardHeader>
            <CardTitle className="text-lg">Quick Actions</CardTitle>
            <CardDescription>Common IAM management tasks</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Button asChild className="flex items-center justify-start">
                <a href="/policies/new">
                  <Shield className="mr-2 h-4 w-4" />
                  Create New Policy
                </a>
              </Button>
              <Button asChild className="flex items-center justify-start" variant="outline">
                <a href="/users/new">
                  <Users className="mr-2 h-4 w-4" />
                  Add New User
                </a>
              </Button>
              <Button asChild className="flex items-center justify-start" variant="outline">
                <a href="/policies">
                  <Shield className="mr-2 h-4 w-4" />
                  View All Policies
                </a>
              </Button>
              <Button asChild className="flex items-center justify-start" variant="outline">
                <a href="/audit">
                  <ClipboardList className="mr-2 h-4 w-4" />
                  View Audit Log
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
