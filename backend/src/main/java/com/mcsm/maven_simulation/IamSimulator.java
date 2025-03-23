package com.mcsm.maven_simulation;

import java.util.Scanner;

public class IamSimulator {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        PolicyManager policyManager = new PolicyManager();

        System.out.println("Enter IAM role:");
        String role = scanner.nextLine().trim().toLowerCase();

        System.out.println("Access Level: " + policyManager.getPolicy(role));
    }
}
