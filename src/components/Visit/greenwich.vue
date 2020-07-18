<template>
  <div id="work-card" class="m-4 p-4 w-auto rounded-lg shadow-2xl">
    <div class="p-6">
      <H2 class="text-2xl text-blue-200"><span class="text-pink-300">
           <i class="fas fa-landmark"></i>
        </span> Royal Museums </H2>
      <g-link href="http://bit.ly/2yibjM1" target="_blank"
        ><g-image class="w-auto h-auto"
          src = "@/images/visit/greenwich.jpg"
          fluid-grow
          alt = "Royal Museums Greenwich"
      /></g-link>
      <p class="text-blue-200">
        Romney Road<br /> Greenwich London 

        <g-link
          class  = "text-red-700 hover:text-white"
          to     = "http://bit.ly/39NF5sD"
          target = "_blank"
        >
          SE10 9NF
        </g-link>
      </p>

        <h5 class=" mb-4 text-2xl text-pink-300">Closed</h5>

      <g-link
        class  = "text-red-700 hover:text-white"
        to     = "http://bit.ly/2yibjM1"
        target = "_blank"
      >
        More Info
      </g-link>
    </div>
  </div>
</template>


