<template>
  <Layout>
    <div id="background" class="container m-auto">
      <h1 class="ml-8 mt-16 text-4xl text-red-600">
        <span class="text-pink-300">
          <i class="fas fa-theater-masks"></i>
        </span>
        Theatres
      </h1>
      <!--<date class="ml-8" />-->
      <br />

      <div class="grid sm:flex">
        <alex /><!--alexandra palace-->
        <almeida /><!--Almeida Theatre-->
        <arts /><!--artsdepot-->
       </div>
      
      <div class="grid sm:flex">
        <barking /><!--Broadway Theatre Barking-->
        <chickenshed /><!--chickenshed-->
        <greenwichT /><!--Greenwich Theatre-->
      </div>
      
      <div class="grid sm:flex">
        <hackneyT /><!--hackney empire -->
        <hampsteadT /><!--Hampstead Theatre-->
        <hoxton /><!--Hoxton Hall-->
        </div>
      
      <div class="grid sm:flex">
        <intimate /><!--Intimate Theatre-->
        <ilford /><!--Kenneth More Theatre-->
        <angel /><!--Little Angel Theatre-->
       </div>
      
      <div class="grid sm:flex">
        <hornchurch/><!--Queen's Theatre Hornchurch -->
        <rainbow /><!--Rainbow Theatre-->
        <shorditch /><!--Shoreditch Town Hall-->
       </div>
      
      <div class="grid sm:flex">
        <stratford /><!--Theatre Royal Stratford East-->
        <two /><!--The O2 arena-->
        <yard/><!--The Yard -->
      </div>

      <div class="grid sm:flex">
        <wilton /><!--Wilton's Music Hall -->
      </div>
     
     
    </div>
    <br />
  </Layout>
</template>

<script>
import barking from "@/components/Theatres/barking";
import greenwichT from "@/components/Theatres/greenwichT";
import hackneyT from "@/components/Theatres/hackneyT";
import hoxton from "@/components/Theatres/hoxton";
import ilford from "@/components/Theatres/ilford";
import hornchurch from "@/components/Theatres/hornchurch";
import stratford from "@/components/Theatres/stratford";
import two from "@/components/Theatres/two";
import wilton from "@/components/Theatres/wilton";
import yard from "@/components/Theatres/yard";
import arts from "@/components/Theatres/arts";
import chickenshed from "@/components/Theatres/chickenshed";
import alex from "@/components/Theatres/alex";
import intimate from "@/components/Theatres/intimate";
import rainbow from "@/components/Theatres/rainbow";
import almeida from "@/components/Theatres/almeida";
import hampsteadT from "@/components/Theatres/hampsteadT";
import angel from "@/components/Theatres/angel";
import shorditch from "@/components/Theatres/shorditch";



import date from "@/components/Home/date";

export default {
  metaInfo: {
    title: "Theatres",
    meta : [
      {
        name   : "description",
        content: "Whats on guide for Local Theatres In North And East London."
      }
    ]
  },
  components: {
    barking,
    greenwichT,
    hackneyT,
    hornchurch,
    hoxton,
    ilford,
    stratford,
    two,
    wilton,
    yard,
    arts,
    chickenshed,
    alex,
    intimate,
    rainbow,
    almeida,
    hampsteadT,
    angel,
    shorditch,
    date,
  }
};
</script>

<style></style>
