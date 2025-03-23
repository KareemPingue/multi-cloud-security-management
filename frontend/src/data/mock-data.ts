
// Mock data for IAM system

export interface IAMPolicy {
  id: string;
  name: string;
  description: string;
  cloud: "AWS" | "Azure" | "GCP";
  service: string;
  effect: "Allow" | "Deny";
  actions: string[];
  resources: string[];
  conditions?: Record<string, any>;
  createdAt: string;
  updatedAt: string;
}

export interface IAMUser {
  id: string;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  role: string;
  createdAt: string;
  status: "Active" | "Inactive" | "Locked";
  lastLogin?: string;
}

export interface IAMRole {
  id: string;
  name: string;
  description: string;
  permissions: string[];
  userCount: number;
  createdAt: string;
}

export interface AuditLog {
  id: string;
  action: string;
  user: string;
  resource: string;
  timestamp: string;
  status: "Success" | "Failed";
  details: string;
  ipAddress: string;
}

// Mock IAM Policies
export const mockPolicies: IAMPolicy[] = [
  {
    id: "pol-1",
    name: "EC2FullAccess",
    description: "Allows full access to EC2 instances",
    cloud: "AWS",
    service: "EC2",
    effect: "Allow",
    actions: ["ec2:*"],
    resources: ["*"],
    createdAt: "2023-01-15T08:30:00Z",
    updatedAt: "2023-01-15T08:30:00Z"
  },
  {
    id: "pol-2",
    name: "S3ReadOnly",
    description: "Allows read-only access to S3 buckets",
    cloud: "AWS",
    service: "S3",
    effect: "Allow",
    actions: ["s3:Get*", "s3:List*"],
    resources: ["arn:aws:s3:::*"],
    createdAt: "2023-02-20T10:15:00Z",
    updatedAt: "2023-03-05T14:22:00Z"
  },
  {
    id: "pol-3",
    name: "AzureVMContributor",
    description: "Grants contributor access to Azure VMs",
    cloud: "Azure",
    service: "Virtual Machines",
    effect: "Allow",
    actions: ["Microsoft.Compute/virtualMachines/*"],
    resources: ["/subscriptions/*/resourceGroups/*/providers/Microsoft.Compute/virtualMachines/*"],
    createdAt: "2023-02-10T09:45:00Z",
    updatedAt: "2023-02-10T09:45:00Z"
  },
  {
    id: "pol-4",
    name: "GCPStorageViewer",
    description: "Provides view access to GCP Storage buckets",
    cloud: "GCP",
    service: "Storage",
    effect: "Allow",
    actions: ["storage.objects.get", "storage.objects.list"],
    resources: ["projects/*/buckets/*"],
    createdAt: "2023-03-15T11:30:00Z",
    updatedAt: "2023-03-15T11:30:00Z"
  },
  {
    id: "pol-5",
    name: "RDSReadWrite",
    description: "Allows read and write access to RDS databases",
    cloud: "AWS",
    service: "RDS",
    effect: "Allow",
    actions: ["rds:Describe*", "rds:Modify*"],
    resources: ["arn:aws:rds:*:*:db:*"],
    createdAt: "2023-04-05T13:20:00Z",
    updatedAt: "2023-04-05T13:20:00Z"
  }
];

// Mock IAM Users
export const mockUsers: IAMUser[] = [
  {
    id: "usr-1",
    username: "johndoe",
    email: "john.doe@example.com",
    firstName: "John",
    lastName: "Doe",
    role: "Administrator",
    createdAt: "2023-01-10T08:00:00Z",
    status: "Active",
    lastLogin: "2023-05-01T09:15:00Z"
  },
  {
    id: "usr-2",
    username: "janedoe",
    email: "jane.doe@example.com",
    firstName: "Jane",
    lastName: "Doe",
    role: "Developer",
    createdAt: "2023-01-12T10:30:00Z",
    status: "Active",
    lastLogin: "2023-05-02T14:25:00Z"
  },
  {
    id: "usr-3",
    username: "bobsmith",
    email: "bob.smith@example.com",
    firstName: "Bob",
    lastName: "Smith",
    role: "Security Auditor",
    createdAt: "2023-02-15T11:45:00Z",
    status: "Active",
    lastLogin: "2023-04-30T16:40:00Z"
  },
  {
    id: "usr-4",
    username: "alicejones",
    email: "alice.jones@example.com",
    firstName: "Alice",
    lastName: "Jones",
    role: "DevOps Engineer",
    createdAt: "2023-03-10T09:20:00Z",
    status: "Active",
    lastLogin: "2023-05-03T10:10:00Z"
  },
  {
    id: "usr-5",
    username: "charliebravo",
    email: "charlie.bravo@example.com",
    firstName: "Charlie",
    lastName: "Bravo",
    role: "ReadOnly",
    createdAt: "2023-04-01T13:15:00Z",
    status: "Inactive",
    lastLogin: "2023-04-15T11:30:00Z"
  }
];

// Mock IAM Roles
export const mockRoles: IAMRole[] = [
  {
    id: "role-1",
    name: "Administrator",
    description: "Full access to all resources",
    permissions: ["admin:*"],
    userCount: 2,
    createdAt: "2023-01-05T08:00:00Z"
  },
  {
    id: "role-2",
    name: "Developer",
    description: "Access to development resources",
    permissions: ["ec2:Describe*", "s3:Get*", "s3:List*"],
    userCount: 15,
    createdAt: "2023-01-07T09:30:00Z"
  },
  {
    id: "role-3",
    name: "Security Auditor",
    description: "Read-only access for security auditing",
    permissions: ["*:Describe*", "*:Get*", "*:List*"],
    userCount: 5,
    createdAt: "2023-01-08T10:15:00Z"
  },
  {
    id: "role-4",
    name: "DevOps Engineer",
    description: "Access to infrastructure resources",
    permissions: ["ec2:*", "s3:*", "rds:*", "cloudformation:*"],
    userCount: 8,
    createdAt: "2023-01-10T11:45:00Z"
  },
  {
    id: "role-5",
    name: "ReadOnly",
    description: "Read-only access to all resources",
    permissions: ["*:Get*", "*:List*", "*:Describe*"],
    userCount: 20,
    createdAt: "2023-01-12T14:20:00Z"
  }
];

// Mock Audit Logs
export const mockAuditLogs: AuditLog[] = [
  {
    id: "log-1",
    action: "User Login",
    user: "johndoe",
    resource: "IAM Portal",
    timestamp: "2023-05-01T09:15:00Z",
    status: "Success",
    details: "User logged in successfully",
    ipAddress: "192.168.1.100"
  },
  {
    id: "log-2",
    action: "Create Policy",
    user: "johndoe",
    resource: "Policy: EC2FullAccess",
    timestamp: "2023-05-01T10:30:00Z",
    status: "Success",
    details: "Created new IAM policy",
    ipAddress: "192.168.1.100"
  },
  {
    id: "log-3",
    action: "Assign Role",
    user: "janedoe",
    resource: "User: bobsmith, Role: Security Auditor",
    timestamp: "2023-05-02T14:25:00Z",
    status: "Success",
    details: "Assigned role to user",
    ipAddress: "192.168.1.101"
  },
  {
    id: "log-4",
    action: "Delete Policy",
    user: "bobsmith",
    resource: "Policy: OldPolicy",
    timestamp: "2023-04-30T16:40:00Z",
    status: "Failed",
    details: "Insufficient permissions",
    ipAddress: "192.168.1.102"
  },
  {
    id: "log-5",
    action: "Update Role",
    user: "alicejones",
    resource: "Role: Developer",
    timestamp: "2023-05-03T10:10:00Z",
    status: "Success",
    details: "Updated role permissions",
    ipAddress: "192.168.1.103"
  },
  {
    id: "log-6",
    action: "Password Reset",
    user: "system",
    resource: "User: charliebravo",
    timestamp: "2023-05-03T11:25:00Z",
    status: "Success",
    details: "Reset password for user",
    ipAddress: "192.168.1.1"
  },
  {
    id: "log-7",
    action: "User Logout",
    user: "johndoe",
    resource: "IAM Portal",
    timestamp: "2023-05-01T17:45:00Z",
    status: "Success",
    details: "User logged out",
    ipAddress: "192.168.1.100"
  },
  {
    id: "log-8",
    action: "API Call",
    user: "apigateway",
    resource: "ListUsers API",
    timestamp: "2023-05-03T13:15:00Z",
    status: "Success",
    details: "API call to list users",
    ipAddress: "10.0.0.5"
  }
];
