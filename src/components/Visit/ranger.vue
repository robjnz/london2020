<template>
  <div id="work-card" class="m-4 p-4 w-auto rounded-lg shadow-2xl">
    <div class="p-6">
      <H2 class="text-2xl text-blue-200"><span class="text-pink-300">
           <i class="fas fa-landmark"></i>
        </span> Ranger’s House</H2>
      <g-link href="http://bit.ly/2OgMGcC" target="_blank"
        ><g-image
          class = "w-auto h-auto"
          src   = "@/images/visit/ranger.jpg"
          fluid-grow
          alt = "Ranger’s House"
      /></g-link>
      <p class="text-blue-200">
        Chesterfield Walk<br />
        Blackheath London

        <g-link
          class  = "text-red-700 hover:text-white"
          to     = "http://bit.ly/2TJQa8w"
          target = "_blank"
        >
          SE10 8QX
        </g-link>
      </p>
            <h5 class=" mb-4 text-2xl text-pink-300">Closed</h5>


      <g-link
        class  = "text-red-700 hover:text-white"
        to     = "http://bit.ly/2OgMGcC"
        target = "_blank"
      >
        More Info
      </g-link>
    </div>
  </div>
</template>
