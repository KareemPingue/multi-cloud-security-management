package com.mcsm.iam.service;

import com.mcsm.iam.model.IamPolicy;
import com.mcsm.iam.model.IamUser;
import com.mcsm.iam.util.JsonUtils;

import java.util.List;
import java.util.Optional;

public class IamService {
    private static final String USERS_FILE = "src/main/resources/users.json";
    private static final String POLICIES_FILE = "src/main/resources/policies/iam_policies.json";

    public List<IamUser> getUsers() {
        return JsonUtils.loadUsers(USERS_FILE);
    }

    public List<IamPolicy> getPolicies() {
        return JsonUtils.loadPolicies(POLICIES_FILE);
    }

    public Optional<IamPolicy> getPolicyForRole(String role) {
        return getPolicies().stream()
                .filter(policy -> policy.getRole().equalsIgnoreCase(role))
                .findFirst();
    }
}
