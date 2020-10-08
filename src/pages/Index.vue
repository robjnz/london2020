<template>
  <Layout>
    
    <div id="background" class="container m-auto">
      <h1 class="ml-6 mt-16 text-4xl text-blue-100">
        <!--
        Things To Do In London Today, For memorable Days Out.
        -->
        Places to visit for memorable days out in London.</h1>

        <p class="ml-6 mb-5 text-2xl text-blue-100">
          Visit historical places of interest, museums and county houses and for evening entertainment, <br />visit a show at one of London theatres.</p>
          
    
      
        <g-image
          class = "w-full h-full object-cover"
          src   = "https://res.cloudinary.com/dzhbfdfa5/image/upload/c_scale,h_150,w_560/v1515831480/tower_vow6im.jpg"
          alt   = "tower of london"
      />
     
    
       
<!--

<div v-for="edge in $page.docs.edges" :key="edge.node.id">
  <g-link :to="edge.node.path">{{ edge.node.title }} </g-link>

</div>
-->
<br />
     <on />

     </div>
   
    <br />
    
  </Layout>
</template>

<page-query>

query post {
 docs: allPost{
  edges{
    node{
     title
      path
    
    }
    } 
  }
}

</page-query>

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
          "Places to visit for memorable days out in London, Visit historical places of interest, museums and county houses and for evening entertainment, visit a show at one of London theatres."
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
