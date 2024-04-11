package com.example.sms.model;

public class LoginResponse {
    
    private int user_id;
    private String user_name;
    private String user_role;
    private String user_token;
    public int getUser_id() {
        return user_id;
    }
    public void setUser_id(int user_id) {
        this.user_id = user_id;
    }
    public String getUser_name() {
        return user_name;
    }
    public void setUser_name(String user_name) {
        this.user_name = user_name;
    }
    public String getUser_role() {
        return user_role;
    }
    public void setUser_role(String user_role) {
        this.user_role = user_role;
    }
    public String getUser_token() {
        return user_token;
    }
    public void setUser_token(String user_token) {
        this.user_token = user_token;
    }

    
}
