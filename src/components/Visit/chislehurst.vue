<template>
  <div id="work-card" class="m-4 p-4 w-auto rounded-lg shadow-2xl">
    <div class="p-6">
      <H2 class="text-2xl text-blue-200"><span class="text-pink-300">
           <i class="fas fa-landmark"></i>
           <i class="fas fa-arrow-alt-circle-chislehurst"></i>
        </span> Chislehurst Caves</H2>
      <g-link href="https://bit.ly/2UHY5ni" target="_blank"
        ><g-image
          class = "w-auto h-auto"
          src   = "https://res.cloudinary.com/dzhbfdfa5/image/upload/c_scale,h_200,w_300/v1586097533/chislehurst_mzby07.jpg"
          fluid-grow
          alt = "Chislehurst Caves"
      /></g-link>
      <p class="text-blue-200">
        Old Hill<br /> Chislehurst Kent

        <g-link
          class  = "text-red-700 hover:text-white"
          to     = "https://bit.ly/39GYlXR"
          target = "_blank"
        >
          BR7 5NL
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
  The caves have been carved<br />out, over hundreds of years...... 
  <input id="read-more-chislehurst-1" class="read-more-chislehurst" type="checkbox">
  <div class="read-more-content">
        They were dug for the chalk to<br /> use in lime burning<br /> and brick making of<br /> Building London<br /> as well as for flints<br /> to fire the tinderboxes<br /> and flintlock guns.

  </div>
  <label class="read-more-chislehurst-label text-red-700 hover:text-white" for="read-more-chislehurst-1">Read </label>
</article>
      <g-link
        class  = "text-red-700 hover:text-white"
        to     = "https://bit.ly/2UHY5ni"
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
.read-more-chislehurst {
  display: none;
}
.read-more-chislehurst-label {
  display    : inline-block;
  user-select: none;
  cursor     : pointer;
  border     : none;
  padding    : 5px;
  margin     : .5em;
  font-size  : 16px;
}
.read-more-chislehurst-label:after {
  content: "More";
  display: inline-block;
}
.read-more-chislehurst:checked + .read-more-content {
  display: block;
  /* css animation won't work with "auto"; set to some height larger
    than the content */
  max-height: 1000px;
}
.read-more-chislehurst:checked + .read-more-content + .read-more-chislehurst-label:after {
  content: "Less";
}
</style>
