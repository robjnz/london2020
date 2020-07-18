<template>
  <div id="work-card" class="m-4 p-4 w-auto rounded-lg shadow-2xl">
    <div class="p-6">
      <H2 class="text-2xl text-blue-200"><span class="text-pink-300">
           <i class="fas fa-landmark"></i>
        </span> Mayesbrook Park </H2>
      <g-link href="http://bit.ly/2Q7ZlO3" target="_blank"
        ><g-image
          class = "w-auto h-auto"
          src   = "@/images/visit/mayesbrook.jpg"
          fluid-grow
          alt = "Mayesbrook Park"
      /></g-link>
      <p class="text-blue-200">
        Lodge Avenue<br /> Dagenham Essex

        <g-link
          class  = "text-red-700 hover:text-white"
          to     = "http://bit.ly/33efo23"
          target = "_blank"
        >
          RM8 2JA
        </g-link>
      </p>

      <br /><br /><br />

      <g-link
        class  = "text-red-700 hover:text-white"
        to     = "http://bit.ly/2Q7ZlO3"
        target = "_blank"
      >
        More Info
      </g-link>
    </div>
  </div>
</template>
