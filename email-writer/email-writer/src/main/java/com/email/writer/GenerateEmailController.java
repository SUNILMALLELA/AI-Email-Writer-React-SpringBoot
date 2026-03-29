package com.email.writer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/email")
@CrossOrigin(origins = "*")
public class GenerateEmailController {
    @Autowired
    private final GenerateEmailService generateEmailService;

    public GenerateEmailController(GenerateEmailService generateEmailService) {
        this.generateEmailService = generateEmailService;
    }

    @PostMapping("/generate")
    public ResponseEntity<String> generateEmail(@RequestBody EmailRequest emailRequest){
        String response = generateEmailService.generateEmailReplay(emailRequest);
        return ResponseEntity.ok(response);
    }
}
