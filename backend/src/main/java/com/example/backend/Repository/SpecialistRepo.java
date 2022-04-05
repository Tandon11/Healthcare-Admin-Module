package com.example.backend.Repository;

import com.example.backend.Models.Doctor;
import com.example.backend.Models.Specialist;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public interface SpecialistRepo extends JpaRepository<Specialist, Long> {
    @Modifying
    @Transactional
    @Query(nativeQuery = true, value = "DELETE FROM specialist s WHERE s.id IN (:specialistId)")
    void terminateSpecialist(List<Integer> specialistId);
}
