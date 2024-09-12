<template>
    <v-container fluid class="custom-layout">
      <v-row no-gutters>
        <!-- Left Section: Text Content -->
        <v-col cols="12" md="6" class="text-section">
          <div class="text-content">
            <h3 class="project-title">{{ project.projectTitle }}</h3>
            <h4 class="project-subtitle">{{ project.projectAddress }}</h4>
            <h1 class="company-name">{{project.projectClient}}</h1>
            <v-row class="features mt-5">
              <v-col cols="6" class="feature-item">
                <v-icon class="mr-2">mdi-check-circle</v-icon>
                <div>
                  <h5>Trusted</h5>
                  <p>Over 300+ clients all over Maharashtra love us</p>
                </div>
              </v-col>
              <v-col cols="6" class="feature-item">
                <v-icon class="mr-2">mdi-star-circle</v-icon>
                <div>
                  <h5>Quality</h5>
                  <p>We pay attention to every single detail.</p>
                </div>
              </v-col>
            </v-row>
          </div>
        </v-col>
  
        <!-- Right Section: Image -->
        <v-col cols="12" md="6" class="image-section">
          <v-img
            :src="project.projectThumbnail" 
            class="project-image"
            height="700px"
            cover
          ></v-img>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script setup>
  
  const route = useRoute();
  
  const {data:project} = await useFetch(`/api/product/${route.params.id}`,{
    method:"GET",
    headers:{
      'content-type':'application/json'
    }
  })
  
  
  
  </script>
  
  <style scoped>
  .custom-layout {
    height: 100vh;
    background-color: black; 
    color: white;
  }
  
  .text-section {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .text-content {
    padding: 40px;
  }
  
  .project-title {
    font-size: 20px;
    font-weight: 400;
    margin-bottom: 5px;
  }
  
  .project-subtitle {
    font-size: 16px;
    font-weight: 300;
    margin-bottom: 30px;
  }
  
  .company-name {
    font-size: 50px;
    font-weight: 600;
    margin-bottom: 50px;
  }
  
  .features {
    margin-top: 50px;
  }
  
  .feature-item {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }
  
  .feature-item v-icon {
    font-size: 24px;
  }
  
  .image-section .project-image {
    object-fit: cover;
    height: 100%;
  }
  </style>
  