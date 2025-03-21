package com.mcsm.iam.model;

import java.util.List;

public class IamPolicy {
    private String role;
    private List<String> permissions;

    public IamPolicy(String role, List<String> permissions) {
        this.role = role;
        this.permissions = permissions;
    }

    public String getRole() {
        return role;
    }

    public List<String> getPermissions() {
        return permissions;
    }
}
