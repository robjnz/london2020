<template>
<div>
    <h2 class="ml-8 text-3xl text-blue-200">
        North London
      </h2>
      <div class="grid sm:flex">
        <alexandra /><!--alexandra palace-->
        <bethune /><!--Bethune Nature reserve-->
        <forty /><!--forty hall-->
        
      </div>

      <div class="grid sm:flex">
        <jewish /><!--jewish museum-->
        <canal /><!--London canal museum-->
        <markfield /> <!--Markfield -->
      </div>

       <div class="grid sm:flex">
        <stephens /><!--Stephens house-->
        <totteridge /><!--Totteridge fields-->
        <airforce /><!--Royal Air Force Museum-->
       
      </div>
    </div>

</template>

<script>
import alexandra from "@/components/Visit/north/alexandra";
import bethune from "@/components/Visit/north/bethune";
import canal from "@/components/Visit/north/canal";

import forty from "@/components/Visit/north/forty";
import jewish from "@/components/Visit/north/jewish";

import markfield from "@/components/Visit/north/markfield";

import stephens from "@/components/Visit/north/stephens";
import airforce from "@/components/Visit/north/airforce";
import totteridge from "@/components/Visit/north/totteridge";

export default {
    components: {
      alexandra,
      bethune,
      canal,
      forty,
      jewish,
      markfield,
        stephens,
        totteridge,
        airforce,
    }
}
</script>

