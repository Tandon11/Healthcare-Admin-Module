package com.example.backend.Service.Doctor;

import com.example.backend.Models.Doctor;

import java.util.List;

public interface DoctorService {
    void saveDoctor(Doctor doctor);
    void removeDoctor(Integer[] doctorId);
    List<Doctor> findDoctors();
}
