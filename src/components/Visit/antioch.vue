<template>
  <div id="work-card" class="m-4 p-4 w-auto rounded-lg shadow-2xl">
    <div class="p-6">
      <H2 class="text-2xl text-blue-200"><span class="text-pink-300">
           <i class="fas fa-landmark"></i>
        </span> St. Margaret of Antioch </H2>
      <g-link href="http://bit.ly/2W9FpxW" target="_blank"
        ><g-image
          class = "w-auto h-auto"
          src   = "@/images/visit/antioch.jpg"
          fluid-grow
          alt = "St. Margaret of Antioch"
      /></g-link>
      <p class="text-blue-200">
        North Street<br />
        Barking Essex

        <g-link
          class  = "text-red-700 hover:text-white"
          to     = "http://bit.ly/39Q9NBk"
          target = "_blank"
        >
          IG11 8AS
        </g-link>
      </p>
      <h5 class=" mb-4 text-2xl text-pink-300">Closed</h5>


      <g-link
        class  = "text-red-700 hover:text-white"
        to     = "http://bit.ly/2W9FpxW"
        target = "_blank"
      >
        More Info
      </g-link>
    </div>
  </div>
</template>
