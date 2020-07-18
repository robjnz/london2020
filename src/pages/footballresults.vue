<template>
  <Layout>
    <div id="background" class="container ml-8">
      <h1 class="ml-8 mt-16 text-4xl text-red-600">
        <span class="text-pink-300">
          <i class="fas fa-futbol"></i>
        </span>
        Football Results
      </h1>
      <!--<date class="ml-8" />-->
      <br />

      <div class="port container" id="works">
        <div class="row">
          <div class="work col-md-12">
            <div class="work-card">
              
            </div>
          </div>
        </div>
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
    westwomen
  }
};
</script>
