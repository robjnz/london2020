<template>
  <Layout>
    <div id="background" class="container m-auto">
      <h1 class="ml-8 mt-16 text-4xl text-red-600">
        <span class="text-pink-300">
          <i class="fas fa-futbol"></i>
        </span>
        Football
      </h1>
      <!--<date class="ml-8" />-->
      <br />

      <div class="grid sm:flex">
        <barkingF /><!--Barking-->
        <barkingside /><!--Barkingside-->
        <bexley /><!--Bexley-->
      </div>

       <div class="grid sm:flex">
        <bridon /><!--Bridon Ropes-->
        <canning /><!--Canning Town-->
        <charlton /><!--charlton-->
      </div>

        <div class="grid sm:flex">
        <charltonwomen /><!--charlton womens-->
        <dagenham /><!--Dagenham-->
        <dagred /><!--Dagenham & Redbridge-->
      </div>
      
      <div class="grid sm:flex">
        <erithtown /><!--Erith Town-->
        <erithbell /><!--Erith & Belvedere-->
        <forest /><!--Forest Hill Park-->
      </div>

        <div class="grid sm:flex">
        <greenwichF /><!--Greenwich-->
        <hornchurchF /><!--Hornchurch-->
        <ilfordF /><!--Ilford-->
      </div>

      <div class="grid sm:flex">
        <lewisham/><!--Lewisham-->
        <lopes /><!--lopes-->
        <may /><!--May & Bakers-->
      </div>

      <div class="grid sm:flex">
        <newbury /><!--newbury forest-->
        <orient /><!--Leyton Orient-->
        <orientwomen /><!--Leyton Orient womens-->
      </div>

      <div class="grid sm:flex">
        <phoenix /><!--Phoenix Sports-->
        <phoenixwomen /><!--Phoenix Sports womens-->
        <redbridge /><!--redbridge-->
      </div>

       <div class="grid sm:flex">
        <romford /><!--romford-->
        <tower /><!--Tower Hamlets-->
        <walthamstow /><!--walthamstow-->
      </div>

      <div class="grid sm:flex">
        <welling /><!--Welling United-->
        <west /><!--West Ham-->
        <westwomen/><!--West Ham womens team-->
      </div>
    </div>

    <br />
  </Layout>
</template>

<script>
import barkingF from "@/components/Football/barkingF";
import barkingside from "@/components/Football/barkingside";
import bexley from "@/components/Football/bexley";
import bridon from "@/components/Football/bridon";
import canning from "@/components/Football/canning";
import charlton from "@/components/Football/charlton";
import charltonwomen from "@/components/Football/charltonwomen";
import dagenham from "@/components/Football/dagenham";
import dagred from "@/components/Football/dagred";
import erithtown from "@/components/Football/erithtown";
import erithbell from "@/components/Football/erithbell";
import forest from "@/components/Football/forest";
import greenwichF from "@/components/Football/greenwichF";
import hornchurchF from "@/components/Football/hornchurchF";
import ilfordF from "@/components/Football/ilfordF";
import lewisham from "@/components/Football/lewisham";
import orient from "@/components/Football/orient";
import orientwomen from "@/components/Football/orientwomen";
import lopes from "@/components/Football/lopes";
import may from "@/components/Football/may";
import newbury from "@/components/Football/newbury";
import phoenix from "@/components/Football/phoenix";
import phoenixwomen from "@/components/Football/phoenixwomen";
import redbridge from "@/components/Football/redbridge";
import romford from "@/components/Football/romford";
import tower from "@/components/Football/tower";
import walthamstow from "@/components/Football/walthamstow";
import welling from "@/components/Football/welling";
import west from "@/components/Football/west";
import westwomen from "@/components/Football/westwomen";





export default {
  metaInfo: {
    title: "Football",
    meta : [
      {
        name   : "description",
        content: "Whats on guide for football home matches In East London."
      }
    ]
  },
  components: {
    barkingF,
    barkingside,
    bexley,
    bridon,
    canning,
    charlton,
    charltonwomen,
    dagenham,
    dagred,
    erithtown,
    erithbell,
    forest,
    greenwichF,
    hornchurchF,
    ilfordF,
    lewisham,
    lopes,
    orient,
    orientwomen,
    may,
    newbury,
    phoenix,
    phoenixwomen,
    redbridge,
    romford,
    tower,
    walthamstow,
    welling,
    west,
    westwomen,
  }
};
</script>
