package com.example.backend.Repository;

import com.example.backend.Models.Doctor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

// Takes Doctor and work on primary key whose type is long
@Repository
public interface DoctorRepo extends JpaRepository<Doctor, Long> {
    @Modifying
    @Transactional
    @Query(nativeQuery = true, value = "DELETE FROM doctor d WHERE d.id IN (:doctorId)")
    void terminateDoctor(List<Integer> doctorId);
}
