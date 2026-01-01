package com.simran.blog.blog_backend.payload;

public class AppointmentRequest {

    private String ownerName;
    private String email;
    private String countryCode;
    private String phone;
    private String preferredDate;
    private String petType;
    private String petSex;
    private String petBreed;
    private String petAge;
    private String additionalNotes;
    private String appointmentType; // "voice" or "video"

    // Getters and Setters
    public String getOwnerName() {
        return ownerName;
    }

    public void setOwnerName(String ownerName) {
        this.ownerName = ownerName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getCountryCode() {
        return countryCode;
    }

    public void setCountryCode(String countryCode) {
        this.countryCode = countryCode;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getPreferredDate() {
        return preferredDate;
    }

    public void setPreferredDate(String preferredDate) {
        this.preferredDate = preferredDate;
    }

    public String getPetType() {
        return petType;
    }

    public void setPetType(String petType) {
        this.petType = petType;
    }

    public String getPetSex() {
        return petSex;
    }

    public void setPetSex(String petSex) {
        this.petSex = petSex;
    }

    public String getPetBreed() {
        return petBreed;
    }

    public void setPetBreed(String petBreed) {
        this.petBreed = petBreed;
    }

    public String getPetAge() {
        return petAge;
    }

    public void setPetAge(String petAge) {
        this.petAge = petAge;
    }

    public String getAdditionalNotes() {
        return additionalNotes;
    }

    public void setAdditionalNotes(String additionalNotes) {
        this.additionalNotes = additionalNotes;
    }

    public String getAppointmentType() {
        return appointmentType;
    }

    public void setAppointmentType(String appointmentType) {
        this.appointmentType = appointmentType;
    }

    @Override
    public String toString() {
        return "AppointmentRequest{" +
                "ownerName='" + ownerName + '\'' +
                ", email='" + email + '\'' +
                ", countryCode='" + countryCode + '\'' +
                ", phone='" + phone + '\'' +
                ", preferredDate='" + preferredDate + '\'' +
                ", petType='" + petType + '\'' +
                ", petSex='" + petSex + '\'' +
                ", petBreed='" + petBreed + '\'' +
                ", petAge='" + petAge + '\'' +
                ", additionalNotes='" + additionalNotes + '\'' +
                ", appointmentType='" + appointmentType + '\'' +
                '}';
    }
}
