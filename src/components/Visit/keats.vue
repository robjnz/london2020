<template>
  <div id="work-card" class="m-4 p-4 w-auto rounded-lg shadow-2xl">
    <div class="p-6">
      <H2 class="text-2xl text-blue-200"><span class="text-pink-300">
           <i class="fas fa-landmark"></i>
        </span> Keats House</H2>
      <g-link href="https://bit.ly/2Y1UJNX" target="_blank"
        ><g-image
          class = "w-auto h-auto"
          src   = "https://res.cloudinary.com/dzhbfdfa5/image/upload/c_scale,h_200,w_300/v1587741322/keats_au8ir2.jpg"
          alt   = "keats house"
      /></g-link>
      <p class="text-blue-200">
     10 Keats Grove<br />Hampstead London 


        <g-link
          class  = "text-red-700 hover:text-white"
          to     = "https://bit.ly/2x4cOzV"
          target = "_blank"
        >
          NW3 2RR
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
 Home of John Keats the poet <br />1818 to 1820...... 
<input id="read-more-keats-1" class="read-more-keats" type="checkbox">

  <div class="read-more-content">
<br />
Built in 1815 and originally<br /> named Wentworth Place.

 </div>
<label class="read-more-keats-label text-red-700 hover:text-white" for="read-more-keats-1">Read </label>
</article>
      <g-link
        class  = "text-red-700 hover:text-white"
        to     = "https://bit.ly/2Y1UJNX"
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
.read-more-keats {
  display: none;
}
.read-more-keats-label {
  display    : inline-block;
  user-select: none;
  cursor     : pointer;
  border     : none;
  padding    : 5px;
  margin     : .5em;
  font-size  : 16px;
}
.read-more-keats-label:after {
  content: "More";
  display: inline-block;
}
.read-more-keats:checked + .read-more-content {
  display: block;
  /* css animation won't work with "auto"; set to some height larger
    than the content */
  max-height: 1000px;
}
.read-more-keats:checked + .read-more-content + .read-more-keats-label:after {
  content: "Less";
}
</style>
