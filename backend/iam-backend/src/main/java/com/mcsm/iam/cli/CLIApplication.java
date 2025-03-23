package com.mcsm.iam.cli;

import com.mcsm.iam.services.AWSCloudPolicy;
import com.mcsm.iam.services.AzureCloudPolicy;
import com.mcsm.iam.services.GoogleCloudPolicy;

import java.util.Scanner;

public class CLIApplication {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        GoogleCloudPolicy gcpPolicy = new GoogleCloudPolicy();
        AWSCloudPolicy awsPolicy = new AWSCloudPolicy();
        AzureCloudPolicy azurePolicy = new AzureCloudPolicy();

        System.out.println("Enter cloud platform (AWS/GCP/Azure): ");
        String cloud = scanner.nextLine().trim().toUpperCase();

        System.out.println("Enter role (admin/developer): ");
        String role = scanner.nextLine().trim().toLowerCase();

        String policy = switch (cloud) {
            case "AWS" -> awsPolicy.getPolicy(role);
            case "GCP" -> gcpPolicy.getPolicy(role);
            case "AZURE" -> azurePolicy.getPolicy(role);
            default -> "Invalid cloud platform";
        };

        System.out.println("Access level: " + policy);
    }
}
