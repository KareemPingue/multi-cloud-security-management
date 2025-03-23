package com.example.iam;

public class Main {
    public static void main(String[] args) throws Exception {
        GoogleCloudPolicySimulator simulator = new GoogleCloudPolicySimulator();
        System.out.println("Admin has start permission: " +
            simulator.checkPermission("admin", "compute.instances.start"));
    }
}
