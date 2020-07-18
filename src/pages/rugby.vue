<template>
  <Layout>
    <div id="background" class="container m-auto">
      <h1 class="ml-8 mt-16 text-4xl text-red-600">
        <span class="text-pink-300">
          <i class="fas fa-football-ball"></i>
        </span>
        Rugby
      </h1>
      <!--<date class="ml-8" />-->
      <br />

      <div class="grid sm:flex">
        <barkingR /><!--Barking Rugby-->
        <blackheath /><!--Blackheath Rugby-->
        <blackheathwomen /><!--Blackheathwomen rugby-->
      </div>

      <div class="grid sm:flex">
        <eton /><!--eton manor-->
        <etonwoman /><!--eton woman manor-->
        <hackneyR /><!--hackney Rugby-->
      </div>

      <div class="grid sm:flex">
        <hackneywoman /><!--hackney woman Rugby-->
        <gideawoman /><!--romford & Gidia park ravens rugby-->
        <gidea /><!--romford & Gidia park rugby-->
      </div>

      <div class="grid sm:flex">
        <millwall /><!--millwall Rugby-->
        <millwallwoman /><!--millwall venus Rugby-->

      </div>


    </div>

    <br />
  </Layout>
</template>

<script>
import barkingR from "@/components/Rugby/barkingR";
import blackheath from "@/components/Rugby/blackheath";
import blackheathwomen from "@/components/Rugby/blackheathwomen";
import hackneyR from "@/components/Rugby/hackneyR";
import hackneywoman from "@/components/Rugby/hackneywoman";
import gidea from "@/components/Rugby/gidea";
import gideawoman from "@/components/Rugby/gideawoman";
import eton from "@/components/Rugby/eton";
import etonwoman from "@/components/Rugby/etonwoman";
import millwall from "@/components/Rugby/millwall";
import millwallwoman from "@/components/Rugby/millwallwoman";


import date from "@/components/Home/date";

export default {
  metaInfo: {
    title: "Rugby",
    meta : [
      {
        name   : "description",
        content: "Whats on guide for rugby home matches In East London."
      }
    ]
  },
  components: {
    barkingR,
    blackheath,
    blackheathwomen,
    eton,
    etonwoman,
    hackneyR,
    hackneywoman,
    gidea,
    gideawoman,
    millwall,
    millwallwoman,
    date
  }
};
</script>
