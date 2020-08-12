<template>
  <Layout>
    <div id="background" class="container m-auto">
      <h1 class="ml-8 mt-16 text-4xl text-pink-300">
        <span class="text-pink-300">
          <i class="fas fa-theater-masks"></i>
        </span>
        London Theatres
      </h1>
      <!--<date class="ml-8" />-->
      <br />

      <div class="grid sm:flex">
        <adelphi /><!--Adelphi Theatre-->
        <aldwych /><!--Aldwych Theatre-->
        <alex /><!--alexandra palace-->
      </div>

      <div class="grid sm:flex">
        <almeida /><!--Almeida Theatre-->
        <apollo /><!--Apollo Theatre-->
        <apollovic /><!--Apollo Victoria Theatre-->
      </div>

      <div class="grid sm:flex">
        <arts /><!--artsdepot-->
        <barbican /><!--Barbican Centre-->
        <barking /><!--Broadway Theatre Barking-->
      </div>

      <div class="grid sm:flex">
        <bloomsbury /><!--Bloomsbury Theatre-->
        <cambridge /><!--Cambridge Theatre-->
        <chickenshed /><!--chickenshed-->
      </div>

      <div class="grid sm:flex">
        <criterion /><!--Criterion Theatre-->
        <dominion /><!--Dominion Theatre-->
        <donmar /><!--Donmar Warehouse-->
         </div>

      <div class="grid sm:flex">
        <greenwichT /><!--Greenwich Theatre-->
      </div>

      <div class="grid sm:flex">
        <hackneyT /><!--hackney empire -->
        <hampsteadT /><!--Hampstead Theatre-->
        <pinter /><!--Harold Pinter Theatre-->
      </div>

      <div class="grid sm:flex">
        <hoxton /><!--Hoxton Hall-->

        <intimate /><!--Intimate Theatre-->
        <ilford /><!--Kenneth More Theatre-->
      </div>

      <div class="grid sm:flex">
        <angel /><!--Little Angel Theatre-->

        <hornchurch /><!--Queen's Theatre Hornchurch -->
        <rainbow /><!--Rainbow Theatre-->
         </div>
      
      <div class="grid sm:flex">
        <shorditch /><!--Shoreditch Town Hall-->
      </div>

      <div class="grid sm:flex">
        <stratford /><!--Theatre Royal Stratford East-->
        <two /><!--The O2 arena-->
        <yard /><!--The Yard -->
      </div>

      <div class="grid sm:flex"><wilton /><!--Wilton's Music Hall --></div>
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
import adelphi from "@/components/Theatres/adelphi";
import aldwych from "@/components/Theatres/aldwych";
import apollo from "@/components/Theatres/apollo";
import apollovic from "@/components/Theatres/apollovic";
import barbican from "@/components/Theatres/barbican";
import bloomsbury from "@/components/Theatres/bloomsbury";
import cambridge from "@/components/Theatres/cambridge";
import pinter from "@/components/Theatres/pinter";
import criterion from "@/components/Theatres/criterion";
import dominion from "@/components/Theatres/dominion";
import donmar from "@/components/Theatres/donmar";

import date from "@/components/Home/date";

export default {
  metaInfo: {
    title: "Theatres",
    meta: [
      {
        name: "description",
        content: "Whats on guide for Local Theatres In North And East London.",
      },
    ],
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
    adelphi,
    aldwych,
    apollo,
    apollovic,
    barbican,
    bloomsbury,
    cambridge,
    pinter,
    criterion,
    dominion,
    donmar,
    date,
  },
};
</script>

<style></style>
