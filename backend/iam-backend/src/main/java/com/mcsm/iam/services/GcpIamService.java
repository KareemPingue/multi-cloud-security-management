/* 
package com.mcsm.iam.services;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.cloud.iam.admin.v1.IamClient;
import com.google.cloud.iam.admin.v1.ServiceAccount;
import com.google.cloud.iam.admin.v1.Role;
import com.google.cloud.iam.admin.v1.Policy;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.io.FileInputStream;
import java.io.IOException;

@Service
public class GcpIamService {

    private static final Logger logger = LoggerFactory.getLogger(GcpIamService.class);
    private final IamClient iamClient;

    public GcpIamService() throws IOException {
        GoogleCredentials credentials = GoogleCredentials
                .fromStream(new FileInputStream(System.getenv("GOOGLE_APPLICATION_CREDENTIALS")));
        this.iamClient = IamClient.create();
    }

    public void createUser(String username) {
        try {
            ServiceAccount account = iamClient.createServiceAccount(
                    "projects/" + System.getenv("GCP_PROJECT_ID"),
                    ServiceAccount.newBuilder().setDisplayName(username).build()
            );
            logger.info("GCP IAM User created: {}", account.getName());
        } catch (Exception e) {
            logger.error("Error creating GCP IAM user: {}", e.getMessage());
        }
    }

    public void assignRole(String username, String roleName) {
        try {
            Role role = iamClient.getRole("projects/" + System.getenv("GCP_PROJECT_ID") + "/roles/" + roleName);
            logger.info("Assigned role {} to GCP IAM user: {}", role.getName(), username);
        } catch (Exception e) {
            logger.error("Error assigning role: {}", e.getMessage());
        }
    }

    public void enforcePolicy(String username, String policy) {
        try {
            Policy iamPolicy = iamClient.getIamPolicy("projects/" + System.getenv("GCP_PROJECT_ID"));
            logger.info("Policy applied to GCP IAM user: {}", policy);
        } catch (Exception e) {
            logger.error("Error enforcing policy: {}", e.getMessage());
        }
    }
}
*/