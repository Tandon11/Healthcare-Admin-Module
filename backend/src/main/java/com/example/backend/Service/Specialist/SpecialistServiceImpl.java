package com.example.backend.Service.Specialist;

import com.example.backend.Models.Doctor;
import com.example.backend.Models.Specialist;
import com.example.backend.Repository.SpecialistRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Arrays;
import java.util.List;

@Service
@Transactional
public class SpecialistServiceImpl implements SpecialistService {

    @Autowired
    private SpecialistRepo specialistRepository;

    public void saveSpecialist(Specialist specialist) {
        specialistRepository.save(specialist);
    }

    public void removeSpecialist(Integer[] specialistId) {
      specialistRepository.terminateSpecialist(Arrays.asList(specialistId));
    }

    public List<Specialist> findSpecialists() {
      return specialistRepository.findAll();
    }

    public String checkSpecialistUsername(String username) {
      return specialistRepository.findByUsername(username);
    }
}
