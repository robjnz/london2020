<template>
  <div id="work-card" class="m-4 p-4 w-auto rounded-lg shadow-2xl">
    <div class="p-6">
      <H2 class="text-2xl text-blue-200"><span class="text-pink-300">
           <i class="fas fa-landmark"></i>
        </span> Heath Robinson Museum</H2>
      <g-link href="https://bit.ly/2JRecbV" target="_blank"
        ><g-image
          class = "w-auto h-auto"
          src   = "https://res.cloudinary.com/dzhbfdfa5/image/upload/c_scale,h_200,w_300/v1586448975/robinson_jhf5hs.jpg"
          alt   = "Heath Robinson Museum"
      /></g-link>
      <p class="text-blue-200">
    Pinner Memorial Park
50 West End Lane<br />
Pinner London 

        <g-link
          class  = "text-red-700 hover:text-white"
          to     = "https://bit.ly/34opLkh"
          target = "_blank"
        >
          HA5 1AE
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
Heath Robinson exhibition<br /> tells the full story.....
<input id="read-more-robinson-1" class="read-more-robinson" type="checkbox">
  <div class="read-more-content">
<br />
 of Heath Robinson’s<br /> artistic career with<br /> original artwork and other items.  
 
 </div>
<label class="read-more-robinson-label text-red-700 hover:text-white" for="read-more-robinson-1">Read </label>
</article>
      <g-link
        class  = "text-red-700 hover:text-white"
        to     = "https://bit.ly/2JRecbV"
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
.read-more-robinson {
  display: none;
}
.read-more-robinson-label {
  display    : inline-block;
  user-select: none;
  cursor     : pointer;
  border     : none;
  padding    : 5px;
  margin     : .5em;
  font-size  : 16px;
}
.read-more-robinson-label:after {
  content: "More";
  display: inline-block;
}
.read-more-robinson:checked + .read-more-content {
  display: block;
  /* css animation won't work with "auto"; set to some height larger
    than the content */
  max-height: 1000px;
}
.read-more-robinson:checked + .read-more-content + .read-more-robinson-label:after {
  content: "Less";
}
</style>
