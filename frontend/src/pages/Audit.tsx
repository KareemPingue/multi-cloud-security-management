
import React, { useState } from "react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, 
  ClipboardList, 
  Search, 
  Filter, 
  Clock, 
  CheckCircle, 
  AlertTriangle,
  UserCheck,
  RefreshCw,
  Download 
} from "lucide-react";
import { mockAuditLogs, AuditLog } from "@/data/mock-data";
import { Separator } from "@/components/ui/separator";

const Audit = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string | null>(null);
  const [actionFilter, setActionFilter] = useState<string | null>(null);

  // Get unique action types for filtering
  const actionTypes = Array.from(new Set(mockAuditLogs.map(log => log.action)));

  // Filter logs based on search and filters
  const filteredLogs = mockAuditLogs.filter(log => {
    const matchesSearch = 
      log.action.toLowerCase().includes(searchQuery.toLowerCase()) ||
      log.user.toLowerCase().includes(searchQuery.toLowerCase()) ||
      log.resource.toLowerCase().includes(searchQuery.toLowerCase()) ||
      log.details.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesStatus = statusFilter ? log.status === statusFilter : true;
    const matchesAction = actionFilter ? log.action === actionFilter : true;
    
    return matchesSearch && matchesStatus && matchesAction;
  });

  const clearFilters = () => {
    setStatusFilter(null);
    setActionFilter(null);
    setSearchQuery("");
  };

  return (
    <div className="animate-fade-in">
      <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Audit Logs</h1>
          <p className="text-muted-foreground mt-1">
            Track and review all actions performed in the IAM system
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2">
          <Button variant="outline" className="flex items-center">
            <RefreshCw className="mr-2 h-4 w-4" />
            Refresh
          </Button>
          <Button variant="outline" className="flex items-center">
            <Download className="mr-2 h-4 w-4" />
            Export Logs
          </Button>
        </div>
      </header>

      {/* Filters */}
      <Card className="mb-8">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center">
            <Filter className="mr-2 h-5 w-5" />
            Filters & Search
          </CardTitle>
          <CardDescription>Narrow down audit logs by specific criteria</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search logs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <div className="w-full sm:w-56">
              <Select value={statusFilter || undefined} onValueChange={(value) => setStatusFilter(value || null)}>
                <SelectTrigger>
                  <SelectValue placeholder="Status: All" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="Success">Success</SelectItem>
                  <SelectItem value="Failed">Failed</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="w-full sm:w-56">
              <Select value={actionFilter || undefined} onValueChange={(value) => setActionFilter(value || null)}>
                <SelectTrigger>
                  <SelectValue placeholder="Action: All" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Actions</SelectItem>
                  {actionTypes.map(action => (
                    <SelectItem key={action} value={action}>{action}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <Button variant="ghost" onClick={clearFilters} className="shrink-0">
              Clear Filters
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Audit Log Table */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center">
            <ClipboardList className="mr-2 h-5 w-5" />
            Audit Log Entries
          </CardTitle>
          <CardDescription>
            Showing {filteredLogs.length} of {mockAuditLogs.length} total entries
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Action</TableHead>
                <TableHead>User</TableHead>
                <TableHead>Resource</TableHead>
                <TableHead>Timestamp</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>IP Address</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredLogs.map((log) => (
                <TableRow key={log.id} className="hover-card">
                  <TableCell>
                    <div className="font-medium">{log.action}</div>
                    <div className="text-sm text-muted-foreground truncate max-w-xs">{log.details}</div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <UserCheck className="h-4 w-4 mr-2 text-muted-foreground" />
                      {log.user}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm truncate max-w-xs">{log.resource}</div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                      <time dateTime={log.timestamp}>
                        {new Date(log.timestamp).toLocaleString()}
                      </time>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant={log.status === "Success" ? "default" : "destructive"}>
                      {log.status === "Success" ? (
                        <CheckCircle className="h-3 w-3 mr-1" />
                      ) : (
                        <AlertTriangle className="h-3 w-3 mr-1" />
                      )}
                      {log.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <code className="text-xs bg-muted py-0.5 px-1 rounded">
                      {log.ipAddress}
                    </code>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Audit;
