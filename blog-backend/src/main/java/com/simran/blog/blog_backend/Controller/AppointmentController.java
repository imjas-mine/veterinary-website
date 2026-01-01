package com.simran.blog.blog_backend.Controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.simran.blog.blog_backend.Service.EmailService;
import com.simran.blog.blog_backend.payload.AppointmentRequest;

@RestController
@RequestMapping("/api/appointments")
public class AppointmentController {

    @Autowired
    private EmailService emailService;

    @PostMapping
    public ResponseEntity<Map<String, Object>> bookAppointment(@RequestBody AppointmentRequest request) {
        Map<String, Object> response = new HashMap<>();

        try {
            emailService.sendAppointmentNotification(request);

            response.put("success", true);
            response.put("message", "Appointment request sent successfully! We'll contact you within 24 hours.");
            return ResponseEntity.ok(response);

        } catch (Exception e) {
            response.put("success", false);
            response.put("message", "Failed to send appointment request. Please try again later.");
            response.put("error", e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }
}
