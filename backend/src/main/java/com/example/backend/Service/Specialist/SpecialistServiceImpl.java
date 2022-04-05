package com.example.backend.Service.Specialist;

import com.example.backend.Models.Specialist;
import com.example.backend.Repository.SpecialistRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class SpecialistServiceImpl implements SpecialistService {

    @Autowired
    private SpecialistRepo specialistRepository;

    public void saveSpecialist(Specialist specialist) {
        specialistRepository.save(specialist);
    }
}
