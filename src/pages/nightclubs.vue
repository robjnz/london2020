<template>
  <Layout>
    <div id="background" class="container m-auto">
      <h1 class="ml-8 mt-16 text-4xl text-red-600">
        <span class="text-pink-300">
          <i class="fas fa-glass-cheers"></i>
        </span>
        Nightclubs
      </h1>
      <!--<date class="ml-8" />-->
      <br />

      <div class="grid sm:flex">
        <atik /><!--Atik-->
        <bar /><!--Bar300-->
        <inegales /><!--Club Inégales-->
        </div>
      <div class="grid sm:flex">
        <club /><!--CLUB 701-->
        <crystals /><!--Crystals-->
        <egg /><!--Egg London Nightclub-->
        </div>
      <div class="grid sm:flex">
          <fabric /><!--fabric-->
        <faces /><!--Faces -->
        <infernos /><!--Infernos -->
        </div>
      <div class="grid sm:flex">
        <jhankaar /><!--Jhankaar club-->
        <kings /><!--kings Bull-->
        <kolis /><!--Kolis London-->
        </div>
      <div class="grid sm:flex">
        <ministry /><!--Ministry of Sound-->
        <orleans /><!--Orleans-->
        <rio /><!--Rio Nightclub-->
         </div>
      <div class="grid sm:flex">
        <grand /><!--The Clapham Grand-->
        <art /><!--The CLF Art Cafe-->
        <underworld /><!--The Underworld-->
         </div>
      <div class="grid sm:flex">
        <venue /><!--The Venue N10-->
        <vdf /><!--VFD-->
        <xoyo /><!--xoyo-->
      </div>
    </div>
    <br />
  </Layout>
</template>

<script>
import atik from "@/components/Nightclubs/atik";
import bar from "@/components/Nightclubs/bar";
import faces from "@/components/Nightclubs/faces";
import jhankaar from "@/components/Nightclubs/jhankaar";
import kings from "@/components/Nightclubs/kings";
import xoyo from "@/components/Nightclubs/xoyo";
import egg from "@/components/Nightclubs/egg";
import inegales from "@/components/Nightclubs/inegales";
import kolis from "@/components/Nightclubs/kolis";
import rio from "@/components/Nightclubs/rio";
import orleans from "@/components/Nightclubs/orleans";
import venue from "@/components/Nightclubs/venue";
import underworld from "@/components/Nightclubs/underworld";
import fabric from "@/components/Nightclubs/fabric";
import vdf from "@/components/Nightclubs/vdf";
import infernos from "@/components/Nightclubs/infernos";
import grand from "@/components/Nightclubs/grand";
import crystals from "@/components/Nightclubs/crystals";
import art from "@/components/Nightclubs/art";
import club from "@/components/Nightclubs/club";
import ministry from "@/components/Nightclubs/ministry";

import date from "@/components/Home/date";

export default {
  metaInfo: {
    title: "Nightclubs",
    meta : [
      {
        name   : "description",
        content: 
          "Whats on guide for Local Nightclubs In North and East London."
      }
    ]
  },
  components: {
    atik,
    bar,
    faces,
    jhankaar,
    kings,
    xoyo,
    egg,
    inegales,
    kolis,
    rio,
    orleans,
    venue,
    underworld,
    fabric,
    vdf,
    infernos,
    grand,
    crystals,
    art,
    club,
    ministry,
    date,
  }
};
</script>
