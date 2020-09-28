<template>
  <div id="work-card" class="m-4 p-4 w-auto rounded-lg shadow-2xl">
    <div class="p-6">
      <h1 class="text-2xl text-blue-200"><span class="text-pink-300">
           <i class="fas fa-landmark"></i>
        </span>  Buckingham Palace</h1>
      <g-link href="https://bit.ly/3eZ8nXv" target="_blank"
        ><g-image
          class = "w-auto h-auto"
          src   = "https://res.cloudinary.com/dzhbfdfa5/image/upload/c_scale,h_200,w_300/v1591526855/gallery_uog4fg.jpg"
          alt   = "buckingham palace"
      /></g-link>
      <p class="text-blue-200">
Westminster <br />London 



        <g-link
          class  = "text-red-700 hover:text-white"
          to     = "https://bit.ly/3dSI3OR"
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
    The Queens gallery<br />is open to the public........
<input id="read-more-gallery-1" class="read-more-gallery" type="checkbox">

  <div class="read-more-content">
<br />
The Royal Collection, featuring <br />old master paintings, <br />rare furniture, <br />decorative arts and <br />images from the <br />vast photograph collection.
</div>
<label class="read-more-gallery-label text-red-700 hover:text-white" for="read-more-gallery-1">Read </label>
</article>
      <g-link
        class  = "text-red-700 hover:text-white"
        to     = "https://bit.ly/3eZ8nXv"
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
.read-more-gallery {
  display: none;
}
.read-more-gallery-label {
  display    : inline-block;
  user-select: none;
  cursor     : pointer;
  border     : none;
  padding    : 5px;
  margin     : .5em;
  font-size  : 16px;
}
.read-more-gallery-label:after {
  content: "More";
  display: inline-block;
}
.read-more-gallery:checked + .read-more-content {
  display: block;
  /* css animation won't work with "auto"; set to some height larger
    than the content */
  max-height: 1000px;
}
.read-more-gallery:checked + .read-more-content + .read-more-gallery-label:after {
  content: "Less";
}
</style>
