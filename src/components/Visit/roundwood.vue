<template>
  <div id="work-card" class="m-4 p-4 w-auto rounded-lg shadow-2xl">
    <div class="p-6">
      <H2 class="text-2xl text-blue-200"><span class="text-pink-300">
           <i class="fas fa-landmark"></i>
        </span> Roundwood Park</H2>
      <g-link href="https://bit.ly/3c7BKFQ" target="_blank"
        ><g-image
          class = "w-auto h-auto"
          src   = "https://res.cloudinary.com/dzhbfdfa5/image/upload/c_scale,h_200,w_300/v1586433868/roundwood_udoj8w.jpg"
          alt   = "roundwood Park"
      /></g-link>
      <p class="text-blue-200">
    Harlesden Road<br />Willesden London

        <g-link
          class  = "text-red-700 hover:text-white"
          to     = "https://bit.ly/2UQGklP"
          target = "_blank"
        >
          NW10 3SH
        </g-link>
      </p>
      
      <h5 class=" mb-4 text-2xl text-pink-300"></h5>
      
      <!--
      <p class="text-pink-300">
        <span>
          <i class="far fa-calendar-alt"></i>
        </span>
       Thurs 19 March
      
      </p>
      -->
      <article class="text-blue-200">

        Roundwood Park opend in 1895<br />and is one of the finest examples....... 
<input id="read-more-roundwood-1" class="read-more-roundwood" type="checkbox">
  <div class="read-more-content">

 of a Victorian park.<br /> It has a maintains several<br /> iconic buildings of the<br /> area including the gazebo,<br /> drinking fountains<br /> and its flower beds.</div>
<label class="read-more-roundwood-label text-red-700 hover:text-white" for="read-more-roundwood-1">Read </label>
</article>
      <g-link
        class  = "text-red-700 hover:text-white"
        to     = "https://bit.ly/3c7BKFQ"
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
.read-more-roundwood {
  display: none;
}
.read-more-roundwood-label {
  display    : inline-block;
  user-select: none;
  cursor     : pointer;
  border     : none;
  padding    : 5px;
  margin     : .5em;
  font-size  : 16px;
}
.read-more-roundwood-label:after {
  content: "More";
  display: inline-block;
}
.read-more-roundwood:checked + .read-more-content {
  display: block;
  /* css animation won't work with "auto"; set to some height larger
    than the content */
  max-height: 1000px;
}
.read-more-roundwood:checked + .read-more-content + .read-more-roundwood-label:after {
  content: "Less";
}
</style>
