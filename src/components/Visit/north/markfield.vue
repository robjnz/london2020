<template>
  <div id="work-card" class="m-4 p-4 w-auto rounded-lg shadow-2xl">
    <div class="p-6">
      <H2 class="text-2xl text-blue-200"
        ><span class="text-pink-300">
          <i class="fas fa-landmark"></i>
        </span>
        Markfield Hall
</H2
      >
      <g-link href="https://bit.ly/3bsEHAa" target="_blank"
        ><g-image
          class = "w-auto h-auto"
          src   = "https://res.cloudinary.com/dzhbfdfa5/image/upload/c_scale,h_200,w_300/v1585205957/markfield_qwuvz0.jpg"
          fluid-grow
          alt = "markfield Hall"
      /></g-link>
      <p class="text-blue-200">
        Markfield Road<br /> Tottenham London 
        <g-link
          class  = "text-red-700 hover:text-white"
          to     = "https://bit.ly/2QMP4a7"
          target = "_blank"
        >
           N15 4RB 
        </g-link>
      </p>
      
       <h5 class=" mb-4 text-2xl text-pink-300">Closed</h5>
      <article class="text-blue-200">
  Grade 2 listed engine hall <br />housing a restored.....

  <input id="read-more-markfield-1" class="read-more-markfield" type="checkbox">
  <div class="read-more-content">
      <br />
  working steam-powered beam<br /> engine dating from 1888. 

  </div>
  <label class="read-more-markfield-label text-red-700 hover:text-white" for="read-more-markfield-1">Read </label>
</article>
      <g-link
        class  = "text-red-700 hover:text-white"
        to     = "https://bit.ly/3bsEHAa"
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
.read-more-markfield {
  display: none;
}
.read-more-markfield-label {
  display    : inline-block;
  user-select: none;
  cursor     : pointer;
  border     : none;
  padding    : 5px;
  margin     : .5em;
  font-size  : 16px;
}
.read-more-markfield-label:after {
  content: "More";
  display: inline-block;
}
.read-more-markfield:checked + .read-more-content {
  display: block;
  /* css animation won't work with "auto"; set to some height larger
    than the content */
  max-height: 1000px;
}
.read-more-markfield:checked + .read-more-content + .read-more-markfield-label:after {
  content: "Less";
}
</style>
