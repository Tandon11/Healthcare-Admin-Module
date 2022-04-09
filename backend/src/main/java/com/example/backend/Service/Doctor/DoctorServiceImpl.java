package com.example.backend.Service.Doctor;

import com.example.backend.Models.Doctor;
import com.example.backend.Repository.DoctorRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.crypto.Cipher;
import java.security.Key;
import java.util.Arrays;
import java.util.Base64;
import java.util.List;

import static org.springframework.cache.interceptor.SimpleKeyGenerator.generateKey;

@Service
@Transactional
public class DoctorServiceImpl implements DoctorService {

    @Autowired
    private DoctorRepo doctorRepository;

    public void saveDoctor(Doctor doctor) {
        doctorRepository.save(doctor);
    }

    public void removeDoctor(Integer[] doctorId) {
        doctorRepository.terminateDoctor(Arrays.asList(doctorId));
    }

    public List<Doctor> findDoctors() {
       return doctorRepository.findAll();
    }

    public String checkDoctorUsername(String username) {
        return doctorRepository.findByUsername(username);
    }

}
