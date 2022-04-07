package com.example.backend.Controller;

import com.example.backend.Models.Doctor;
import com.example.backend.Response.Response;
import com.example.backend.Models.Specialist;
import com.example.backend.Service.Doctor.DoctorService;
import com.example.backend.Service.Specialist.SpecialistService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class RestApiController {
      public static final Logger logger = LoggerFactory.getLogger(RestApiController.class);

      @Autowired
      DoctorService doctorService; // Using this service we will do all data retrival/mnaipulation work

      @Autowired
      SpecialistService specialistService;

      @RequestMapping(value = "/doctor", method = RequestMethod.POST)
      public ResponseEntity<?> createDoctor(@RequestBody Doctor doctor, UriComponentsBuilder ucBuilder) {
          doctorService.saveDoctor(doctor);

          HttpHeaders headers = new HttpHeaders();
          headers.setLocation(ucBuilder.path("/api/doctor/{id}").buildAndExpand(doctor.getId()).toUri());
          return new ResponseEntity<String>(headers, HttpStatus.CREATED);

      }

      @RequestMapping(value = "/checkDoctorUsername", method = RequestMethod.GET)
      public ResponseEntity<Response> findDoctorUsername(@RequestHeader String username) {
         String searchedUsername =  doctorService.checkDoctorUsername(username);
         return new ResponseEntity<Response>(new Response(searchedUsername), HttpStatus.OK);
      }

      @RequestMapping(value = "/specialist", method = RequestMethod.POST)
      public ResponseEntity<?> createSpecialist(@RequestBody Specialist specialist, UriComponentsBuilder ucBuilder) {
          specialistService.saveSpecialist(specialist);

          HttpHeaders headers = new HttpHeaders();
          headers.setLocation(ucBuilder.path("/api/specialist/{id}").buildAndExpand(specialist.getId()).toUri());
          return new ResponseEntity<String>(headers, HttpStatus.CREATED);
      }

      @RequestMapping(value = "/deleteDoctor", method = RequestMethod.POST)
      public ResponseEntity<?> deleteDoctor(@RequestBody Integer[] doctorId, UriComponentsBuilder ucBuilder) {
          System.out.println("In Rest API Controller");
          doctorService.removeDoctor(doctorId);

          HttpHeaders headers = new HttpHeaders();
    //    headers.setLocation(ucBuilder.path("/api/deleteDoctor/{id}").buildAndExpand(specialist.getId()).toUri());
          return new ResponseEntity<String>(headers, HttpStatus.CREATED);
      }

      @RequestMapping(value = "/viewDoctor", method = RequestMethod.GET)
      public  ResponseEntity<List<Doctor>> getAllDoctors() {
          System.out.println("Inside /viewProfessional");
          List<Doctor> doctors = doctorService.findDoctors();
          return new ResponseEntity<List<Doctor>>(doctors, HttpStatus.OK);
      }

      @RequestMapping(value = "/deleteSpecialist", method = RequestMethod.POST)
      public ResponseEntity<?> deleteSpecialist(@RequestBody Integer[] specialistId, UriComponentsBuilder ucBuilder) {
        System.out.println("In Rest API Controller");
        specialistService.removeSpecialist(specialistId);

        HttpHeaders headers = new HttpHeaders();
        //    headers.setLocation(ucBuilder.path("/api/deleteDoctor/{id}").buildAndExpand(specialist.getId()).toUri());
        return new ResponseEntity<String>(headers, HttpStatus.CREATED);
      }

      @RequestMapping(value = "/viewSpecialist", method = RequestMethod.GET)
      public  ResponseEntity<List<Specialist>> getAllSpecialists() {
        System.out.println("Inside /viewProfessional");
        List<Specialist> specialists = specialistService.findSpecialists();
        return new ResponseEntity<List<Specialist>>(specialists, HttpStatus.OK);
      }

}
