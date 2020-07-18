<template>
  <div id="work-card" class="m-4 p-4 w-auto rounded-lg shadow-2xl">
    <div class="p-6">
      <H2 class="text-2xl text-blue-200"><span class="text-pink-300">
           <i class="fas fa-landmark"></i>
        </span> Mudchute</H2>
      <g-link href="http://bit.ly/2CXL8ON" target="_blank"
        ><g-image
          class = "w-auto h-auto"
          src   = "@/images/visit/mudchute.jpg"
          fluid-grow
          alt = "Mudchute"
      /></g-link>
      <p class="text-blue-200">
        Pier Street<br />
        Isle of Dogs London

        <g-link
          class  = "text-red-700 hover:text-white"
          to     = "http://bit.ly/2QaOYJd"
          target = "_blank"
        >
          E14 3HP
        </g-link>
        <br /><br /><br />
      </p>
      <g-link
        class  = "text-red-700 hover:text-white"
        to     = "http://bit.ly/2CXL8ON"
        target = "_blank"
      >
        More Info
      </g-link>
    </div>
  </div>
</template>
