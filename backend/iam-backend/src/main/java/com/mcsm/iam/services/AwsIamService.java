/* 
package com.mcsm.iam.services;

import software.amazon.awssdk.services.iam.IamClient;
import software.amazon.awssdk.services.iam.model.*;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

@Service
public class AwsIamService {
    
    private static final Logger logger = LoggerFactory.getLogger(AwsIamService.class);
    private final IamClient iamClient;

    public AwsIamService() {
        this.iamClient = IamClient.create();
    }

    public void createUser(String username) {
        try {
            CreateUserRequest request = CreateUserRequest.builder().userName(username).build();
            iamClient.createUser(request);
            logger.info("AWS IAM User created: {}", username);
        } catch (IamException e) {
            logger.error("Failed to create AWS IAM User: {}", e.awsErrorDetails().errorMessage());
        }
    }

    public void assignRole(String username, String role) {
        try {
            AddUserToGroupRequest request = AddUserToGroupRequest.builder()
                .userName(username)
                .groupName(role)
                .build();
            iamClient.addUserToGroup(request);
            logger.info("Assigned role {} to AWS IAM user: {}", role, username);
        } catch (IamException e) {
            logger.error("Failed to assign role: {}", e.awsErrorDetails().errorMessage());
        }
    }

    public void attachPolicyToUser(String username, String policyArn) {
        try {
            AttachUserPolicyRequest request = AttachUserPolicyRequest.builder()
                .userName(username)
                .policyArn(policyArn)
                .build();
            iamClient.attachUserPolicy(request);
            logger.info("Attached policy {} to AWS IAM user: {}", policyArn, username);
        } catch (IamException e) {
            logger.error("Failed to attach policy: {}", e.awsErrorDetails().errorMessage());
        }
    }
}
*/