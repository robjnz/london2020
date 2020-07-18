<template>
  <div id="work-card" class="m-4 p-4 w-auto rounded-lg shadow-2xl">
    <div class="p-6">
      <H2 class="text-2xl text-blue-200"><span class="text-pink-300">
           <i class="fas fa-landmark"></i>
        </span> Pitzhanger Manor</H2>
      <g-link href="https://bit.ly/2RscMsO" target="_blank"
        ><g-image
          class = "w-auto h-auto"
          src   = "https://res.cloudinary.com/dzhbfdfa5/image/upload/c_scale,h_200,w_300/v1586443218/pitzhanger_nco2e9.jpg"
          alt   = "pitzhanger manor"
      /></g-link>
      <p class="text-blue-200">
    Mattock Lane<br />Ealing London


        <g-link
          class  = "text-red-700 hover:text-white"
          to     = "https://bit.ly/2xZuAo8"
          target = "_blank"
        >
          W5 5EQ
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
Was the home of Sir John Soane<br /> one of the most influential architects..... 
<input id="read-more-pitzhanger-1" class="read-more-pitzhanger" type="checkbox">
  <div class="read-more-content">

 in British history. <br /><br />Soane designed many <br />extraordinary buildings,<br /> but Pitzhanger is almost unique<br /> as a building designed,<br /> built and lived in<br /> by Soane himself.

  </div>
<label class="read-more-pitzhanger-label text-red-700 hover:text-white" for="read-more-pitzhanger-1">Read </label>
</article>
      <g-link
        class  = "text-red-700 hover:text-white"
        to     = "https://bit.ly/2RscMsO"
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
.read-more-pitzhanger {
  display: none;
}
.read-more-pitzhanger-label {
  display    : inline-block;
  user-select: none;
  cursor     : pointer;
  border     : none;
  padding    : 5px;
  margin     : .5em;
  font-size  : 16px;
}
.read-more-pitzhanger-label:after {
  content: "More";
  display: inline-block;
}
.read-more-pitzhanger:checked + .read-more-content {
  display: block;
  /* css animation won't work with "auto"; set to some height larger
    than the content */
  max-height: 1000px;
}
.read-more-pitzhanger:checked + .read-more-content + .read-more-pitzhanger-label:after {
  content: "Less";
}
</style>
