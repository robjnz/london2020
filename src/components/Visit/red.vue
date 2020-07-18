<template>
  <div id="work-card" class="m-4 p-4 w-auto rounded-lg shadow-2xl">
    <div class="p-6">
      <H2 class="text-2xl text-blue-200"><span class="text-pink-300">
           <i class="fas fa-landmark"></i>
        </span> Red House</H2>
      <g-link href="http://bit.ly/2OK74SV" target="_blank"
        ><g-image class="w-auto h-auto"
          src = "@/images/visit/red.jpg"
          fluid-grow
          alt = "Red House"
      /></g-link>
      <p class="text-blue-200">
        Red House Lane<br /> Bexleyheath London 

        <g-link
          class  = "text-red-700 hover:text-white"
          to     = "http://bit.ly/3aLrxho"
          target = "_blank"
        >
          DA6 8JF
        </g-link>
      </p>

       <h5 class="text-2xl text-pink-300">Closed</h5>
      <p class="text-pink-300">
        <span>
          <i class="far fa-calendar-alt"></i>
        </span>
        <!--Sat 4 to Sat 18 April-->
      </p>
      <g-link
        class  = "text-red-700 hover:text-white"
        to     = "http://bit.ly/2OK74SV"
        target = "_blank"
      >
        More Info
      </g-link>
    </div>
  </div>
</template>

