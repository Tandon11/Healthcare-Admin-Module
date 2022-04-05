package com.example.backend.Models;

import javax.persistence.*;
import java.util.Objects;

@Entity
@SequenceGenerator(name= "SPECIALIST_SEQUENCE", initialValue=1, allocationSize = 1)
public class Specialist {

      @Id
      @GeneratedValue(strategy= GenerationType.SEQUENCE, generator="SPECIALIST_SEQUENCE")
      private Long Id;

      private String fname;
      private String lname;
      private String username;
      private String password;
      private String gender;
      private String highest_qual;
      private String contact_no;
      private String is_Avail;

      protected Specialist() {

      }

      public Specialist(Long id, String fname, String lname, String username, String password, String gender, String highest_qual, String contact_no, String is_Avail) {
          Id = id;
          this.fname = fname;
          this.lname = lname;
          this.username = username;
          this.password = password;
          this.gender = gender;
          this.highest_qual = highest_qual;
          this.contact_no = contact_no;
          this.is_Avail = is_Avail;
      }

      public Long getId() {
        return Id;
      }

      public void setId(Long id) {
        Id = id;
      }

      public String getFname() {
        return fname;
      }

      public void setFname(String fname) {
        this.fname = fname;
      }

      public String getLname() {
        return lname;
      }

      public void setLname(String lname) {
        this.lname = lname;
      }

      public String getUsername() {
        return username;
      }

      public void setUsername(String username) {
        this.username = username;
      }

      public String getPassword() {
        return password;
      }

      public void setPassword(String password) {
        this.password = password;
      }

      public String getGender() {
        return gender;
      }

      public void setGender(String gender) {
        this.gender = gender;
      }

      public String getHighest_qual() {
        return highest_qual;
      }

      public void setHighest_qual(String highest_qual) {
        this.highest_qual = highest_qual;
      }

      public String getContact_no() {
        return contact_no;
      }

      public void setContact_no(String contact_no) {
        this.contact_no = contact_no;
      }

      public String getIs_Avail() {
        return is_Avail;
      }

      public void setIs_Avail(String is_Avail) {
        this.is_Avail = is_Avail;
      }

      @Override
      public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Specialist that = (Specialist) o;
        return Objects.equals(Id, that.Id) && Objects.equals(fname, that.fname) && Objects.equals(lname, that.lname) && Objects.equals(username, that.username) && Objects.equals(password, that.password) && Objects.equals(gender, that.gender) && Objects.equals(highest_qual, that.highest_qual) && Objects.equals(contact_no, that.contact_no) && Objects.equals(is_Avail, that.is_Avail);
      }

      @Override
      public int hashCode() {
        return Objects.hash(Id, fname, lname, username, password, gender, highest_qual, contact_no, is_Avail);
      }
}
