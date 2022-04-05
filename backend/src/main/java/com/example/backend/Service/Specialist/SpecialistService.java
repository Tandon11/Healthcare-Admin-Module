package com.example.backend.Service.Specialist;

import com.example.backend.Models.Doctor;
import com.example.backend.Models.Specialist;

import java.util.List;

public interface SpecialistService {
    void saveSpecialist(Specialist specialist);
    void removeSpecialist(Integer[] specialistId);
    List<Specialist> findSpecialists();
}
