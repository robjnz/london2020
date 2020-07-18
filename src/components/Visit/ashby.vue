<template>
  <div id="work-card" class="m-4 p-4 w-auto rounded-lg shadow-2xl">
    <div class="p-6">
      <H2 class="text-2xl text-blue-200"><span class="text-pink-300">
           <i class="fas fa-landmark"></i>
        </span>  Brixton Windmill</H2>
      <g-link href="https://bit.ly/2WsPPHl" target="_blank"
        ><g-image
          class = "w-auto h-auto"
          src   = "https://res.cloudinary.com/dzhbfdfa5/image/upload/c_scale,h_200,w_300/v1588609196/ashby_mryrre.jpg"
          alt   = "brixton windmill"
      /></g-link>
      <p class="text-blue-200">
        22 Blenheim Gardens<br /> Brixton London



        <g-link
          class  = "text-red-700 hover:text-white"
          to     = "https://bit.ly/2A0PxAh"
          target = "_blank"
        >
           SW2 5BZ 
        </g-link>
      </p>
      
      <h5 class=" mb-4 text-2xl text-pink-300">Closed</h5>
      
      <!--
      <p class="text-pink-300">
        <span>
          <i class="far fa-calendar-alt"></i>
        </span>
       Thurs 19 March
      
      </p>
      -->
      <article class="text-blue-200">
Ashby's Brixton Mill was built in 1816<br /> and worked by wind until 1862 .......
<input id="read-more-ashby-1" class="read-more-ashby" type="checkbox">

  <div class="read-more-content">
<br />
 Has been fully restored to working<br /> order in 2011.

</div>
<label class="read-more-ashby-label text-red-700 hover:text-white" for="read-more-ashby-1">Read </label>
</article>
      <g-link
        class  = "text-red-700 hover:text-white"
        to     = "https://bit.ly/2WsPPHl"
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
.read-more-ashby {
  display: none;
}
.read-more-ashby-label {
  display    : inline-block;
  user-select: none;
  cursor     : pointer;
  border     : none;
  padding    : 5px;
  margin     : .5em;
  font-size  : 16px;
}
.read-more-ashby-label:after {
  content: "More";
  display: inline-block;
}
.read-more-ashby:checked + .read-more-content {
  display: block;
  /* css animation won't work with "auto"; set to some height larger
    than the content */
  max-height: 1000px;
}
.read-more-ashby:checked + .read-more-content + .read-more-ashby-label:after {
  content: "Less";
}
</style>
