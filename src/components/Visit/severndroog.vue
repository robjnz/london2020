<template>
  <div id="work-card" class="m-4 p-4 w-auto rounded-lg shadow-2xl">
    <div class="p-6">
      <H2 class="text-2xl text-blue-200"><span class="text-pink-300">
           <i class="fas fa-landmark"></i>
        </span> Severndroog Castle</H2>
      <g-link href="http://bit.ly/2WaV2Fw" target="_blank"
        ><g-image class="w-auto h-auto"
          src = "@/images/visit/severndroog.jpg"
          fluid-grow
          alt = "Severndroog Castle"
      /></g-link>
      <p class="text-blue-200">
        Castle Wood<br />Shooters Hill London 

        <g-link
          class  = "text-red-700 hover:text-white"
          to     = "http://bit.ly/39YSjDf"
          target = "_blank"
        >
          SE18 3RT 
        </g-link>
      </p>
       <h5 class="text-2xl text-pink-300">Closed</h5>
      <p class="text-pink-300">
        <span>
          <i class="far fa-calendar-alt"></i>
        </span>
      <!-- Sat 21 March-->
      </p>

       
      <g-link
        class  = "text-red-700 hover:text-white"
        to     = "http://bit.ly/2WaV2Fw"
        target = "_blank"
      >
        More Info
      </g-link>
    </div>
  </div>
</template>



