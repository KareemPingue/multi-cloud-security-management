package com.mcsm.iam;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;
import org.junit.jupiter.api.Test;

import com.mcsm.iam.services.IamDataService;

public class IamDataServiceTest {

    @Test
    public void testRedisCache() {
        IamDataService service = new IamDataService();
        
        // Store a policy
        service.storeUserPolicy("user123", "{\"role\": \"admin\"}");
        
        // Retrieve the stored policy
        String storedPolicy = service.getUserPolicy("user123");
        assertNotNull(storedPolicy, "Policy should not be null");
        assertEquals("{\"role\": \"admin\"}", storedPolicy, "Stored policy should match expected value");
        
        // Clear the policy
        service.clearUserPolicy("user123");
        assertNull(service.getUserPolicy("user123"), "Policy should be null after clearing");
    }
}
