package com.mcsm.iam.services;

import java.util.List;

public class AwsIamService {
    public String createUser(String username) {
        return "AWS IAM User " + username + " created.";
    }

    public String deleteUser(String username) {
        return "AWS IAM User " + username + " deleted.";
    }
}
