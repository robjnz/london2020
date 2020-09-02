<template>
  <Layout>
    
    <div id="background" class="container m-auto">
      <h1 class="ml-6 mt-16 text-4xl text-blue-100">
        <!--
        Things To Do In London Today, For memorable Days Out.
        -->
        Places to visit for memorable days out in London.</h1>

        <p class="ml-6 mb-5 text-2xl text-blue-100">
           Visit historical places of interest, museums and county houses, and for evening entertainment visit a London theatre.</p>
          
    
      
        <g-image
          class = "w-full h-full object-cover"
          src   = "https://res.cloudinary.com/dzhbfdfa5/image/upload/c_scale,h_150,w_560/v1515831480/tower_vow6im.jpg"
          alt   = "tower of london"
      />
       <a data-pin-do="buttonBookmark" data-pin-tall="true" href="https://www.pinterest.com/pin/create/button/"></a>     
      <!--<date class="ml-8"/>-->
    
        <br />

     <on />

     </div>
   
    <br />
  </Layout>
</template>

<script>
import football from "@/components/Home/football";
import series from "@/components/Home/series";
import inst from "@/components/Home/inst";
import on from "@/components/Home/on";
import film from "@/components/Home/film";
import theatre from "@/components/Home/theatre";
import night from "@/components/Home/night";

import date from "@/components/Home/date";

export default {
  metaInfo: {
    title: "Places to visit Today",
    meta : [
      {
        name   : "description",
        content: 
          " Places to visit for memorable days out in London, visit historical places of interest, museums, or county houses, and for evening entertainment visit a London theatre."
      }
    ],
    script: [
      { src: "https://kit.fontawesome.com/e3c70d4fc5.js" },
      { src: "//assets.pinterest.com/js/pinit.js"},
     
     
    ]
  },
  components: {
    football,
    series,
    inst,
    on,
    film,
    theatre,
    night,
    date,
  }
};
</script>

<style>
.Hero {
  padding-top   : 10rem;
  padding-bottom: 10rem;
  background    : darksalmon;
  color         : #337;
}
.Port {
  padding: 5rem;
}
.work {
  padding: 2rem 1rem;
}
.work-card {
  box-shadow   : 0px 0px 20px rgba(0, 0, 0.1);
  padding      : 1rem;
  border-radius: 0.2rem;
  color        : #00ff7f;
  margin       : 1rem;
}

.home-links a {
  margin-right: 1rem;
}
</style>
