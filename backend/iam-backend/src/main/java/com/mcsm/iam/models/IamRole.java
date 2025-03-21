package com.mcsm.iam.models;

public class IamRole {
    private String roleName;
    private String cloudProvider;
    private String[] permissions;

    public IamRole(String roleName, String cloudProvider, String[] permissions) {
        this.roleName = roleName;
        this.cloudProvider = cloudProvider;
        this.permissions = permissions;
    }

    public String getRoleName() { return roleName; }
    public String getCloudProvider() { return cloudProvider; }
    public String[] getPermissions() { return permissions; }
}
