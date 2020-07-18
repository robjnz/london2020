<template>
  <div id="work-card" class="m-4 p-4 w-auto rounded-lg shadow-2xl">
    <div class="p-6">
      <H2 class="text-2xl text-blue-200"
        ><span class="text-pink-300">
          <i class="fas fa-landmark"></i>
        </span>
        Alexandra Palace 
</H2
      >
      <g-link href="https://bit.ly/2vTGGyw" target="_blank"
        ><g-image
          class = "w-auto h-auto"
          src   = "https://res.cloudinary.com/dzhbfdfa5/image/upload/c_scale,h_200,w_300/v1585222919/alexandra_d4foln.jpg"
          fluid-grow
          alt = "Alexandra Palace "
      /></g-link>
      <p class="text-blue-200">
        Alexandra Palace Way<br /> London 
        <g-link
          class  = "text-red-700 hover:text-white"
          to     = "https://bit.ly/2xtJORT"
          target = "_blank"
        >
           N22 7AY
        </g-link>
      </p>
      
       <h5 class=" mb-4 text-2xl text-pink-300">Closed</h5>
      <article class="text-blue-200">
  Grade II listed entertainment<br /> and sports venue....... 
  <input id="read-more-alexandra-1" class="read-more-alexandra" type="checkbox">
  <div class="read-more-content">
 and park with views across london.
  </div>
  <label class="read-more-alexandra-label text-red-700 hover:text-white" for="read-more-alexandra-1">Read </label>
</article>
      <g-link
        class  = "text-red-700 hover:text-white"
        to     = "https://bit.ly/2vTGGyw"
        target = "_blank"
      >
        More Info
      </g-link>
    </div>
  </div>
</template>

<style>


.read-more-content {
  max-height: 0;
  overflow  : hidden;
  transition: max-height .5s ease;
}
.read-more-alexandra {
  display: none;
}
.read-more-alexandra-label {
  display    : inline-block;
  user-select: none;
  cursor     : pointer;
  border     : none;
  padding    : 5px;
  margin     : .5em;
  font-size  : 16px;
}
.read-more-alexandra-label:after {
  content: "More";
  display: inline-block;
}
.read-more-alexandra:checked + .read-more-content {
  display: block;
  /* css animation won't work with "auto"; set to some height larger
    than the content */
  max-height: 1000px;
}
.read-more-alexandra:checked + .read-more-content + .read-more-alexandra-label:after {
  content: "Less";
}
</style>
