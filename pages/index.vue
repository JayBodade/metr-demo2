<template>
    <div class="pa-3 mt-4">
        <div class="landing-section">
            <v-row style="height: 100%;">
                <v-col>
                    <v-img
                        src="https://s3-alpha-sig.figma.com/img/9d5a/d69f/260a1a44644800184885c20a5e1032cf?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=USBe-SLw2XzKRx0w0U-ffOYRrb-3hPhzuz379rOJJXQ3OvfEzhPoMsI7-Q1t~~4eGHm3wB7mzMCO-5uxHsv4lTQNiit3EfZudfPD0ApATiKE9s2FiOxmHyQdUKDD3o-SBwwFXJJ3egPTndl4jqZ51FGUqf~q6a8k9JJrparUOnB5pppIR8razoLlQu9PY4JymDpMLcAM~T2dZiYd7Ine3IkAEnyh6rRwMwSoo1dOUyXos6pEA8pE0pV8xt~0mzyNfzyX20PN2ieeQY-rK9cdDsiy3OYei9emCRPqY1OOAD5q4tYFZsdR4JO2EdCSrJc9tddgEajyz1HGj7b0p8BMyQ__">

                    </v-img>
                </v-col>

                <v-col>
                    <v-row>
                        <v-col col="12" class="d-flex">
                            <span>Multifaceted, Edifying, Tract and Roof</span>
                            <span>metR</span>
                            <span>Designs</span>
                        </v-col>
                        <v-col col="12">

                        </v-col>
                    </v-row>
                </v-col>
                <v-col>
                    <v-img
                        src="https://s3-alpha-sig.figma.com/img/2073/e1a2/2b612eb9466274d5672bec7026320c67?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I0lcREGfpbRza-sP-Rpu8PW5Uyb0Hnd6qZiyAVETUIn5k8TqHrlkUD0V71a0IS0bTxS3CcUiMeB69x4vZf~PYQpkQuGj4Yd8WoBNI8ZLX46PYGLDGnKwJ9oRR5nvlfO6P~-RIO2GRRLcQmTQ3givK8R3l1rYNaZCVRwkU2cOnyK6qszUvzOk0qaT8t9H7aL5TE~OS3TBQgayLDmXha~UA7zBoXLooueSxSEvvAvidGD1X~3jhH9zgs5iCf123i-vAMWH~Ava4CSaBzor0t4I~Dsjh0WySM0JQU92Zgkcnxjf9z3VbRdrtXb6HhHruRWFCz~nvwvqh9lo~1gh7HjK8Q__">

                    </v-img>

                </v-col>
            </v-row>
        </div>

        <div class="tabination">
            <v-tabs v-model="tab" >
            <v-tab :value="1">
                All Projects
            </v-tab>
            <v-tab :value="2">
                Interior
            </v-tab>
            <v-tab :value="3">
                Architectural
            </v-tab>
            <v-tab :value="4">
                Landscape
            </v-tab>
            
            
          </v-tabs>

        
        </div>
        <v-tabs-window v-model="tab">
            <v-tabs-window-item :value="1">
                <v-row class="pa-4" >
                    <v-col cols="4"  v-for="project in allprojects" :key="project._id" >
                        <NuxtLink :to="`/proj/${project._id}`"> <product :projectItem="project"> </product></NuxtLink>
                    </v-col>
                </v-row>
            </v-tabs-window-item>
            <v-tabs-window-item :value="2">
                <v-row class="pa-4" >
                <v-col cols="4" v-for="project in interiorProjects" :key="project._id" >
                    <NuxtLink :to="`/proj/${project._id}`"> <product :projectItem="project"> </product></NuxtLink>
                    </v-col>
                </v-row>
            </v-tabs-window-item>
            <v-tabs-window-item :value="3">
                <v-row class="pa-4" >
                <v-col cols="4" v-for="project in landScapeProjects" :key="project._id" >
                    <NuxtLink :to="`/proj/${project._id}`"> <product :projectItem="project"> </product></NuxtLink>
                    </v-col>
                    </v-row>
            </v-tabs-window-item>
            <v-tabs-window-item :value="4">
                <v-row class="pa-4" >
                <v-col cols="4" v-for="project in architecuralProjects" :key="project._id" >
                    <NuxtLink :to="`/proj/${project._id}`"> <product :projectItem="project"> </product></NuxtLink>
                    </v-col>
                    </v-row>
            </v-tabs-window-item>
          </v-tabs-window>

     
           

    </div>
</template>

<script setup>

let tab = ref(1);


const {data:allprojects} = await useFetch('/api/getAllProjects')
const {data:interiorProjects} = await useFetch('/api/getInteriorProjects');
const {data:landScapeProjects} = await useFetch('/api/getLandscapeProjects');
const {data:architecuralProjects} = await useFetch('/api/getArchitecturalProjects');

</script>

<style>
.landing-section {
    background-color: rgb(25, 25, 25);
    min-height: 80vh;
    align-items: center;
    display: flex;
  
    justify-content: center;

}

.tabination{ 
     top: 85%;
     left: 30%;
     background-color: rgba(175, 174, 174, 0.1);
    position: absolute !important;
}
</style>