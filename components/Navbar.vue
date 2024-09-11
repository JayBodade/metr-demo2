<template>
    <v-container class="navbar mt-3 " fluid >
    <v-row align="center" justify="space-between" class="px-4">
      <!-- Left Side: Logo -->
      <v-col cols="4" class="px-4">
        <span class="navar-text ">metR</span>
      </v-col>

      <v-spacer></v-spacer>
      <v-col cols="5" class="d-flex justify-center">
        <v-btn text flat to="/" class="nav-link">Home</v-btn>
        <v-btn text flat to="/projects" class="nav-link">Project</v-btn>
        <v-btn text flat to="/about" class="nav-link">About Us</v-btn>
        <v-btn text flat to="/contact" class="nav-link">Contact</v-btn>
      </v-col>

      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-col cols="3" class="d-flex justify-end " >
        <v-btn  text flat class="nav-link" outlined rounded="pill" >
          Contact Us
        </v-btn>
      </v-col>
    </v-row>
  </v-container>

</template>

<script setup>
// No script needed
</script>

<style>
.navbar {
display: flex;
background-color: white;
color: black;
width: 90%; 
margin: 0 auto; 
border-radius: 50px; 
padding: 6px 0; 
}

.navar-text{
font-weight: 400;
font-size: 40px;
padding-left: 20px;
}
</style>
