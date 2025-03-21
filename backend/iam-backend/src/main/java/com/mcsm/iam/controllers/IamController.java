package com.mcsm.iam.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mcsm.iam.model.IamPolicy;
import com.mcsm.iam.service.IamService;

@RestController
@RequestMapping("/iam")
public class IamController {
    private final IamService iamService = new IamService();

    @GetMapping("/users")
    public List<String> getUsers() {
        return iamService.getUsers().stream().map(user -> user.getUsername()).toList();
    }

    @GetMapping("/policy/{role}")
    public Optional<IamPolicy> getPolicyForRole(@PathVariable String role) {
        return iamService.getPolicyForRole(role);
    }
}
