<template>
  <div id="work-card" class="m-4 p-4 w-auto rounded-lg shadow-2xl">
    <div class="p-6">
      <H2 class="text-2xl text-blue-200"><span class="text-pink-300">
           <i class="fas fa-landmark"></i>
        </span> Geffrye Museum</H2>
      <g-link href="http://bit.ly/3cU96J8" target="_blank"
        ><g-image
          class = "w-auto h-auto"
          src   = "@/images/visit/geffrye.jpg"
          fluid-grow
          alt = "Geffrye Museum"
      /></g-link>
      <p class="text-blue-200">
       136 Kingsland Road<br />Hackney London 

        <g-link
          class  = "text-red-700 hover:text-white"
          to     = "http://bit.ly/38KPSTg"
          target = "_blank"
        >
          E2 8EA
        </g-link>
     <p>
            <h5 class=" mb-4 text-2xl text-pink-300">Closed</h5>

     </p>
    
      <g-link
        class  = "text-red-700 hover:text-white"
        to     = "http://bit.ly/3cU96J8"
        target = "_blank"
      >
        More Info
      </g-link>
    </div>
  </div>
</template>
