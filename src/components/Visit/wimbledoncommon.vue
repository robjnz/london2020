<template>
  <div id="work-card" class="m-4 p-4 w-auto rounded-lg shadow-2xl">
    <div class="p-6">
      <H2 class="text-2xl text-blue-200"><span class="text-pink-300">
           <i class="fas fa-landmark"></i>
        </span> Wimbledon Common  </H2>
      <g-link href="https://bit.ly/2Xl6COI" target="_blank"
        ><g-image
          class = "w-auto h-auto"
          src   = "https://res.cloudinary.com/dzhbfdfa5/image/upload/c_scale,h_200,w_300/v1586355412/wimbledoncommon_qjcydf.jpg"
          fluid-grow
          alt = "wimbledon Common"
      /></g-link>
      <p class="text-blue-200">
       Windmill Road<br />Wimbledon Common London 

        <g-link
          class  = "text-red-700 hover:text-white"
          to     = "https://bit.ly/39T5558"
          target = "_blank"
        >
          SW19 5NR
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
Area of Conservation, <br />the Commons provide..... 
<input id="read-more-wimbledoncommon-1" class="read-more-wimbledoncommon" type="checkbox">
  <div class="read-more-content">

       an important home for wildlife<br /> and a place for visitors<br /> to relax and unwind. 

  </div>
 <label class="read-more-wimbledoncommon-label text-red-700 hover:text-white" for="read-more-wimbledoncommon-1">Read </label>
</article>
      <g-link
        class  = "text-red-700 hover:text-white"
        to     = "https://bit.ly/2Xl6COI"
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
.read-more-wimbledoncommon {
  display: none;
}
.read-more-wimbledoncommon-label {
  display    : inline-block;
  user-select: none;
  cursor     : pointer;
  border     : none;
  padding    : 5px;
  margin     : .5em;
  font-size  : 16px;
}
.read-more-wimbledoncommon-label:after {
  content: "More";
  display: inline-block;
}
.read-more-wimbledoncommon:checked + .read-more-content {
  display: block;
  /* css animation won't work with "auto"; set to some height larger
    than the content */
  max-height: 1000px;
}
.read-more-wimbledoncommon:checked + .read-more-content + .read-more-wimbledoncommon-label:after {
  content: "Less";
}
</style>
