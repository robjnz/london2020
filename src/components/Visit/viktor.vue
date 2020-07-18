<template>
  <div id="work-card" class="m-4 p-4 w-auto rounded-lg shadow-2xl">
    <div class="p-6">
      <H2 class="text-2xl text-blue-200"><span class="text-pink-300">
           <i class="fas fa-landmark"></i>
        </span> Viktor Wyne Museum</H2>
      <g-link href="http://bit.ly/2CHwY42" target="_blank"
        ><g-image
          class = "w-auto h-auto"
          src   = "@/images/visit/viktor.jpg"
          fluid-grow
          alt = "Viktor Wyne Museum"
      /></g-link>
      <p class="text-blue-200">
        11 Mare Street<br />Hackney London 

        <g-link
          class  = "text-red-700 hover:text-white"
          to     = "http://bit.ly/3aWJKJ9"
          target = "_blank"
        >
          E8 4RP 
        </g-link>
      </p>
             <h5 class=" mb-4 text-2xl text-pink-300">Reopens 18 July</h5>

      <g-link
        class  = "text-red-700 hover:text-white"
        to     = "http://bit.ly/2CHwY42"
        target = "_blank"
      >
        More Info
      </g-link>
    </div>
  </div>
</template>


