<template>
  <div id="work-card" class="m-4 p-4 w-auto rounded-lg shadow-2xl">
    <div class="p-6">
      <H2 class="text-2xl text-blue-200"><span class="text-pink-300">
           <i class="fas fa-landmark"></i>
        </span>  Buckingham Palace</H2>
      <g-link href="https://bit.ly/30f7vd4" target="_blank"
        ><g-image
          class = "w-auto h-auto"
          src   = "https://res.cloudinary.com/dzhbfdfa5/image/upload/c_scale,h_200,w_300/v1591525110/buckingham_jgziiv.jpg"
          alt   = "buckingham palace"
      /></g-link>
      <p class="text-blue-200">
Westminster <br />London 



        <g-link
          class  = "text-red-700 hover:text-white"
          to     = "https://bit.ly/3f15wNA"
          target = "_blank"
        >
         SW1A 1AA
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
    The State Rooms<br />are open to the public........
<input id="read-more-buckingham-1" class="read-more-buckingham" type="checkbox">

  <div class="read-more-content">
<br />
It's where The Queen and members <br />of the Royal Family receive <br />and entertain their guests<br /> on State, ceremonial<br /> and official occasions. 
</div>
<label class="read-more-buckingham-label text-red-700 hover:text-white" for="read-more-buckingham-1">Read </label>
</article>
      <g-link
        class  = "text-red-700 hover:text-white"
        to     = "https://bit.ly/30f7vd4"
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
.read-more-buckingham {
  display: none;
}
.read-more-buckingham-label {
  display    : inline-block;
  user-select: none;
  cursor     : pointer;
  border     : none;
  padding    : 5px;
  margin     : .5em;
  font-size  : 16px;
}
.read-more-buckingham-label:after {
  content: "More";
  display: inline-block;
}
.read-more-buckingham:checked + .read-more-content {
  display: block;
  /* css animation won't work with "auto"; set to some height larger
    than the content */
  max-height: 1000px;
}
.read-more-buckingham:checked + .read-more-content + .read-more-buckingham-label:after {
  content: "Less";
}
</style>
