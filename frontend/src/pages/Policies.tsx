
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { 
  Shield, 
  Plus, 
  MoreHorizontal, 
  Pencil, 
  Trash, 
  Copy, 
  Filter, 
  Search,
  Cloud,
  AlertTriangle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle 
} from "@/components/ui/dialog";
import { toast } from "@/components/ui/sonner";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { mockPolicies, IAMPolicy } from "@/data/mock-data";
import { Separator } from "@/components/ui/separator";

const Policies = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCloud, setSelectedCloud] = useState<string | null>(null);
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
  const [policyToDelete, setPolicyToDelete] = useState<IAMPolicy | null>(null);
  
  // Filter policies based on search and selected cloud
  const filteredPolicies = mockPolicies.filter(policy => {
    const matchesSearch = 
      policy.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      policy.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCloud = selectedCloud ? policy.cloud === selectedCloud : true;
    
    return matchesSearch && matchesCloud;
  });

  const cloudFilters = ["AWS", "Azure", "GCP"];

  const handleCreatePolicy = () => {
    navigate("/policies/new");
  };

  const handleEditPolicy = (policyId: string) => {
    navigate(`/policies/edit/${policyId}`);
  };

  const handleDeleteClick = (policy: IAMPolicy) => {
    setPolicyToDelete(policy);
    setDeleteConfirmOpen(true);
  };

  const confirmDelete = () => {
    if (policyToDelete) {
      // In a real app, this would be an API call
      toast.success("Policy deleted", { 
        description: `"${policyToDelete.name}" has been deleted successfully.` 
      });
      setDeleteConfirmOpen(false);
      setPolicyToDelete(null);
    }
  };

  const handleCloudFilterClick = (cloud: string) => {
    setSelectedCloud(current => current === cloud ? null : cloud);
  };

  const handleClonePolicy = (policy: IAMPolicy) => {
    toast.success("Policy cloned", {
      description: `A copy of "${policy.name}" has been created.`
    });
  };

  // Group policies by cloud provider
  const awsPolicies = filteredPolicies.filter(p => p.cloud === "AWS");
  const azurePolicies = filteredPolicies.filter(p => p.cloud === "Azure");
  const gcpPolicies = filteredPolicies.filter(p => p.cloud === "GCP");

  const renderPolicyCard = (policy: IAMPolicy) => (
    <Card key={policy.id} className="hover-card">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg">{policy.name}</CardTitle>
            <CardDescription className="line-clamp-2 mt-1">
              {policy.description}
            </CardDescription>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => handleEditPolicy(policy.id)}>
                <Pencil className="mr-2 h-4 w-4" />
                Edit
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleClonePolicy(policy)}>
                <Copy className="mr-2 h-4 w-4" />
                Clone
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleDeleteClick(policy)} className="text-destructive">
                <Trash className="mr-2 h-4 w-4" />
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 mb-4">
          <Badge 
            variant={policy.effect === "Allow" ? "default" : "destructive"}
            className="font-medium"
          >
            {policy.effect}
          </Badge>
          <Badge variant="outline" className="font-medium">
            {policy.cloud}
          </Badge>
          <Badge variant="secondary" className="font-medium">
            {policy.service}
          </Badge>
        </div>
        
        <div className="text-sm">
          <div className="mb-2">
            <p className="text-muted-foreground font-medium mb-1">Actions:</p>
            <div className="flex flex-wrap gap-1">
              {policy.actions.map((action, i) => (
                <code key={i} className="px-1 py-0.5 bg-muted text-xs rounded">
                  {action}
                </code>
              ))}
            </div>
          </div>
          
          <p className="text-muted-foreground text-xs mt-3">
            Created: {new Date(policy.createdAt).toLocaleDateString()}
          </p>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="animate-fade-in">
      <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Policies</h1>
          <p className="text-muted-foreground mt-1">
            Manage your IAM policies across cloud providers
          </p>
        </div>
        <Button onClick={handleCreatePolicy} className="self-start sm:self-auto">
          <Plus className="mr-2 h-4 w-4" />
          Create Policy
        </Button>
      </header>

      {/* Search and filters */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search policies..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="flex items-center">
          <div className="mr-2 text-sm text-muted-foreground flex items-center">
            <Filter className="mr-2 h-4 w-4" />
            Cloud:
          </div>
          <div className="flex gap-2">
            {cloudFilters.map(cloud => (
              <Button 
                key={cloud}
                variant={selectedCloud === cloud ? "default" : "outline"}
                size="sm"
                onClick={() => handleCloudFilterClick(cloud)}
                className="h-8"
              >
                {cloud}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* No results message */}
      {filteredPolicies.length === 0 && (
        <Card className="p-8 flex flex-col items-center justify-center text-center">
          <AlertTriangle className="h-8 w-8 text-muted-foreground mb-4" />
          <h3 className="text-lg font-medium">No policies found</h3>
          <p className="text-muted-foreground mb-4">
            No policies match your current search and filter criteria.
          </p>
          <div className="flex gap-4">
            <Button variant="outline" onClick={() => setSearchQuery("")}>
              Clear Search
            </Button>
            <Button variant="outline" onClick={() => setSelectedCloud(null)}>
              Clear Filters
            </Button>
          </div>
        </Card>
      )}

      {/* Policies Tabs by Cloud Provider */}
      {filteredPolicies.length > 0 && (
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="mb-4 w-full sm:w-auto">
            <TabsTrigger value="all" className="flex-1">All Policies ({filteredPolicies.length})</TabsTrigger>
            <TabsTrigger value="aws" className="flex-1">AWS ({awsPolicies.length})</TabsTrigger>
            <TabsTrigger value="azure" className="flex-1">Azure ({azurePolicies.length})</TabsTrigger>
            <TabsTrigger value="gcp" className="flex-1">GCP ({gcpPolicies.length})</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPolicies.map(renderPolicyCard)}
            </div>
          </TabsContent>
          
          <TabsContent value="aws">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {awsPolicies.map(renderPolicyCard)}
            </div>
          </TabsContent>
          
          <TabsContent value="azure">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {azurePolicies.map(renderPolicyCard)}
            </div>
          </TabsContent>
          
          <TabsContent value="gcp">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {gcpPolicies.map(renderPolicyCard)}
            </div>
          </TabsContent>
        </Tabs>
      )}

      {/* Delete confirmation dialog */}
      <Dialog open={deleteConfirmOpen} onOpenChange={setDeleteConfirmOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete Policy</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete the policy "{policyToDelete?.name}"? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDeleteConfirmOpen(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={confirmDelete}>
              Delete Policy
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Policies;
