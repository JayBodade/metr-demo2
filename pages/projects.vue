<template>
    <div class="mt-3">
      <v-row class="mb-3" no-gutters justify="start" align="start">
    <v-col
      cols="auto"
      v-for="project in allprojects"
      :key="project._id"
    >
     <NuxtLink :to="`/project/${project._id}`"><product  :projectItem="project" ></product></NuxtLink> 
    </v-col>
  </v-row>
  
    </div>
  </template>
  
  <script  setup>
  
  const {data:allprojects} = await useFetch('/api/getAllProjects')
  </script>
  
  <style>
  
  .custom-card {
    width: 600px;
    border-radius: 12px;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
    background-color: #1e1e1e; 
    color: #fff; 
  }
  
  .v-card-title {
    background-color: #6200ea;
    color: white;
    padding: 16px;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
  }
  
  .v-card-subtitle {
    color: #b3b3b3; 
  }
  
  
  
  .v-text-field input,
  .v-select input {
    color: #fff; 
  }
  
  
  
  
  
  .v-card-actions {
    justify-content: space-between;
  }
  
  </style>