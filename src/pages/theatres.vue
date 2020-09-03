<template>
  <Layout>
    <div id="background" class="container m-auto">
      <h1 class="ml-8 mt-16 text-4xl text-blue-100">
        <span class="text-pink-300">
          <i class="fas fa-theater-masks"></i>
        </span>
        London Theatres
      </h1>
      <p class="ml-8 text-blue-100 text-2xl">
        A to z guide of whats on at London theatres.
      </p>
      <!--<date class="ml-8" />-->
      <br />

      <div class="grid sm:flex">
        <adelphi /><!--Adelphi Theatre-->
        <aldwych /><!--Aldwych Theatre-->
        <alex /><!--alexandra palace-->
      </div>

      <div class="grid sm:flex">
        <almeida /><!--Almeida Theatre-->
        <ambassadors /><!--Ambassadors Theatre-->
        <apollo /><!--Apollo Theatre-->
      </div>

      <div class="grid sm:flex">
        <apollovic /><!--Apollo Victoria Theatre-->
        <arts /><!--artsdepot-->
        <barbican /><!--Barbican Centre-->
      </div>

      <div class="grid sm:flex">
        <barking /><!--Broadway Theatre Barking-->
        <bloomsbury /><!--Bloomsbury Theatre-->
        <cambridge /><!--Cambridge Theatre-->
      </div>

      <div class="grid sm:flex">
        <chickenshed /><!--chickenshed-->
        <criterion /><!--Criterion Theatre-->
        <dominion /><!--Dominion Theatre-->
      </div>

      <div class="grid sm:flex">
        <donmar /><!--Donmar Warehouse-->
        <duchess /><!--Duchess Theatre-->
        <york /><!--Duke of York's Theatre-->
      </div>

      <div class="grid sm:flex">
        <fortune /><!--Fortune Theatre-->
        <garrick /><!--Garrick Theatre-->
        <gielgud /><!--Gielgud Theatre-->
      </div>

      <div class="grid sm:flex">
        <gillian /><!--Gillian Lynne Theatre-->
        <greenwichT /><!--Greenwich Theatre-->
        <hackneyT /><!--hackney empire -->
      </div>

      <div class="grid sm:flex">
        <hampsteadT /><!--Hampstead Theatre-->
        <pinter /><!--Harold Pinter Theatre-->
        <her /><!-- Majesty's Theatre-->
      </div>

      <div class="grid sm:flex">
        <hoxton /><!--Hoxton Hall-->
        <intimate /><!--Intimate Theatre-->
        <ilford /><!--Kenneth More Theatre-->
      </div>

      <div class="grid sm:flex">
        <leicester /><!--Leicester Square Theatre-->
        <angel /><!--Little Angel Theatre-->
        <coliseum /><!--London Coliseum-->
      </div>

      <div class="grid sm:flex">
        <lyceum /><!--Lyceum Theatre-->
        <lyric /><!--Lyric Theatre-->
        <hammersmith /><!--Lyric Hammersmith Theatre-->
      </div>

      <div class="grid sm:flex">
        <nationalT /><!--National Theatre-->
        <wimbledon /><!--New Wimbledon Theatre-->
        <noel /><!--Noël Coward Theatre-->
      </div>

      <div class="grid sm:flex">
        <novello /><!--Novello Theatre-->
        <open /><!--Open Air Theatre-->
        </div>

      <div class="grid sm:flex">
        <hornchurch /><!--Queen's Theatre Hornchurch -->
        <rainbow /><!--Rainbow Theatre-->
      </div>

      <div class="grid sm:flex">
        <globe /><!--Shakespeare's Globe-->
        <shorditch /><!--Shoreditch Town Hall-->
      </div>

      <div class="grid sm:flex">
        <stratford /><!--Theatre Royal Stratford East-->
        <dury /><!--Theatre Royal Dury lane-->
        <haymarket /><!--Theatre Royal Haymarket-->
      </div>

      <div class="grid sm:flex">
        <palladium /><!--The London Palladium-->
        <old /><!--The Old Vic-->
        <two /><!--The O2 arena-->
      </div>

      <div class="grid sm:flex"><yard /><!--The Yard --></div>

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
import dury from "@/components/Theatres/dury";
import duchess from "@/components/Theatres/duchess";
import york from "@/components/Theatres/york";
import fortune from "@/components/Theatres/fortune";
import garrick from "@/components/Theatres/garrick";
import gielgud from "@/components/Theatres/gielgud";
import globe from "@/components/Theatres/globe";
import haymarket from "@/components/Theatres/haymarket";
import her from "@/components/Theatres/her";
import leicester from "@/components/Theatres/leicester";
import coliseum from "@/components/Theatres/coliseum";
import palladium from "@/components/Theatres/palladium";
import lyceum from "@/components/Theatres/lyceum";
import lyric from "@/components/Theatres/lyric";
import hammersmith from "@/components/Theatres/hammersmith";
import nationalT from "@/components/Theatres/nationalT";
import ambassadors from "@/components/Theatres/ambassadors";
import gillian from "@/components/Theatres/gillian";
import wimbledon from "@/components/Theatres/wimbledon";
import noel from "@/components/Theatres/noel";
import novello from "@/components/Theatres/novello";
import old from "@/components/Theatres/old";
import open from "@/components/Theatres/open";

import date from "@/components/Home/date";

export default {
  metaInfo: {
    title: "Theatres",
    meta: [
      {
        name: "description",
        content: "A to Z guide of what plays, that are showing at London theatres. Due to coronavirus London theatres are curently closed",
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
    dury,
    duchess,
    york,
    fortune,
    garrick,
    gielgud,
    globe,
    haymarket,
    her,
    leicester,
    coliseum,
    palladium,
    lyceum,
    lyric,
    hammersmith,
    nationalT,
    ambassadors,
    gillian,
    wimbledon,
    noel,
    novello,
    old,
    open,
    date,
  },
};
</script>

<style></style>
