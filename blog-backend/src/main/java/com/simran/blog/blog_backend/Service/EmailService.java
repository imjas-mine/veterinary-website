package com.simran.blog.blog_backend.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.simran.blog.blog_backend.payload.AppointmentRequest;

@Service
public class EmailService {

    @Autowired
    private JavaMailSender mailSender;

    @Value("${admin.email}")
    private String adminEmail;

    public void sendAppointmentNotification(AppointmentRequest request) {
        SimpleMailMessage message = new SimpleMailMessage();

        message.setTo(adminEmail);
        message.setSubject("New " + capitalizeFirst(request.getAppointmentType()) +
                " Call Appointment Request - " + request.getOwnerName());

        String emailBody = buildEmailBody(request);
        message.setText(emailBody);

        mailSender.send(message);
    }

    private String buildEmailBody(AppointmentRequest request) {
        StringBuilder body = new StringBuilder();

        body.append("========================================\n");
        body.append("   NEW APPOINTMENT REQUEST\n");
        body.append("========================================\n\n");

        body.append("📞 APPOINTMENT TYPE: ").append(request.getAppointmentType().toUpperCase()).append(" CALL\n\n");

        body.append("👤 OWNER INFORMATION\n");
        body.append("----------------------------------------\n");
        body.append("Name: ").append(request.getOwnerName()).append("\n");
        body.append("Email: ").append(request.getEmail()).append("\n");
        body.append("Phone: ").append(request.getCountryCode()).append(" ").append(request.getPhone()).append("\n");
        body.append("Preferred Date: ")
                .append(request.getPreferredDate() != null ? request.getPreferredDate() : "Not specified")
                .append("\n\n");

        body.append("🐾 PET INFORMATION\n");
        body.append("----------------------------------------\n");
        body.append("Pet Type: ").append(request.getPetType()).append("\n");
        body.append("Pet Sex: ").append(request.getPetSex()).append("\n");
        body.append("Pet Breed: ").append(request.getPetBreed() != null ? request.getPetBreed() : "Not specified")
                .append("\n");
        body.append("Pet Age: ").append(request.getPetAge()).append("\n\n");

        body.append("📝 ADDITIONAL NOTES\n");
        body.append("----------------------------------------\n");
        body.append(request.getAdditionalNotes() != null && !request.getAdditionalNotes().isEmpty()
                ? request.getAdditionalNotes()
                : "No additional notes provided").append("\n\n");

        body.append("========================================\n");
        body.append("Please contact the owner to confirm the appointment.\n");

        return body.toString();
    }

    private String capitalizeFirst(String str) {
        if (str == null || str.isEmpty()) {
            return str;
        }
        return str.substring(0, 1).toUpperCase() + str.substring(1).toLowerCase();
    }
}
