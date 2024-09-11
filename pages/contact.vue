<template>
    <v-container fluid class="d-flex justify-space-between align-center">
      <!-- Left side: Contact form -->
      <v-col cols="12" md="6" class="contact-form">
        <div class="form-header">
          <h1 class="form-title">Get in Touch</h1>
          <p class="form-subtitle">
            Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo molestie vel, ornare non id blandit netus.
          </p>
        </div>
  
        <client-only>
        <v-form>
          <v-text-field variant="outlined" v-model="form.name" label="Name" required></v-text-field>
          <v-text-field  variant="outlined" v-model="form.email" label="Email"></v-text-field>
          <v-text-field variant="outlined" v-model="form.phone" label="Phone number"></v-text-field>
          <v-select
          variant="outlined"
            :items="['Online search', 'Referral', 'Advertisement', 'Other']"
            label="How did you find us?"
            v-model="form.leadFrom"
          ></v-select>
  
          <v-btn class="mt-4" color="primary" @click="submitForm" block>Send</v-btn>
        </v-form>
      </client-only>
  
        <div class="contact-info mt-8">
          <div class="contact-item">
            <v-icon>mdi-phone</v-icon> 03 5432 1234
          </div>
          <div class="contact-item">
            <v-icon>mdi-fax</v-icon> 03 5432 1234
          </div>
          <div class="contact-item">
            <v-icon>mdi-email</v-icon> info@marc.com.au
          </div>
        </div>
      </v-col>
  
      <!-- Right side: Map -->
      <v-col cols="12" md="6" class="map-container">
        <v-card class="map-card">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31709.392!2d106.800!3d-6.186!"
            width="100%"
            height="450"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </v-card>
      </v-col>
    </v-container>
  </template>
  
  <script setup>
 
  const items = ['Online search', 'Referral', 'Advertisement', 'Other'];

  const form = ref({
    name:'test',
    email:'test@gmail.com',
    phone:'00000000000',
    leadFrom:'',


  })
  function submitForm(){
    console.log("this is form submission");
  }
  </script>
  
  <style scoped>
  /* Style the form and map */
  .contact-form {
    padding: 20px;
  }
  
  .form-header {
    margin-bottom: 20px;
  }
  
  .form-title {
    font-size: 2.5rem;
    font-weight: bold;
  }
  
  .form-subtitle {
    margin-top: 10px;
    color: #999;
  }
  
  .contact-info {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
  }
  
  .contact-item {
    display: flex;
    align-items: center;
    margin-top: 10px;
    font-size: 1.2rem;
  }
  
  .map-container {
    padding: 20px;
  }
  
  .map-card {
    border-radius: 20px;
    overflow: hidden;
  }
  </style>
  