package com.example.backend.Response;


public class Reponse {
  String username;

  public Reponse() {

  }

  public Reponse(String username) {
    this.username = username;
  }

  public String getUsername() {
    return username;
  }

  public void setUsername(String username) {
    this.username = username;
  }
}
