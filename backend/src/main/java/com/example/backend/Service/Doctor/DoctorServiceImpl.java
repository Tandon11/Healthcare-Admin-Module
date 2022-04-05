package com.example.backend.Service.Doctor;

import com.example.backend.Models.Doctor;
import com.example.backend.Repository.DoctorRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Arrays;
import java.util.List;

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
}
