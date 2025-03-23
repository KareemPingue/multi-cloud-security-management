/* 
package com.mcsm.iam.services;

import com.azure.identity.DefaultAzureCredentialBuilder;
import com.azure.resourcemanager.authorization.AuthorizationManager;
import com.azure.resourcemanager.authorization.models.RoleAssignment;
import com.azure.resourcemanager.authorization.models.RoleDefinition;
import com.azure.resourcemanager.authorization.models.ServicePrincipal;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

@Service
public class AzureIamService {

    private static final Logger logger = LoggerFactory.getLogger(AzureIamService.class);
    private final AuthorizationManager authManager;

    public AzureIamService() {
        this.authManager = AuthorizationManager
                .authenticate(new DefaultAzureCredentialBuilder().build(), System.getenv("AZURE_SUBSCRIPTION_ID"));
    }

    public void createUser(String username) {
        try {
            ServicePrincipal user = authManager.servicePrincipals().define(username)
                    .withTenantId(System.getenv("AZURE_TENANT_ID"))
                    .create();
            logger.info("Azure IAM User created: {}", user.name());
        } catch (Exception e) {
            logger.error("Error creating Azure IAM user: {}", e.getMessage());
        }
    }

    public void assignRole(String username, String roleName) {
        try {
            RoleDefinition role = authManager.roleDefinitions().getByName(roleName);
            RoleAssignment assignment = authManager.roleAssignments()
                    .define(username)
                    .forUser(username)
                    .withRoleDefinition(role)
                    .create();
            logger.info("Assigned role {} to Azure IAM user: {}", roleName, username);
        } catch (Exception e) {
            logger.error("Error assigning role: {}", e.getMessage());
        }
    }

    public void enforcePolicy(String username, String policy) {
        logger.info("Azure IAM policies are enforced through RBAC. Implement necessary policies manually.");
    }
}
*/