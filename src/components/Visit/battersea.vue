<template>
  <div id="work-card" class="m-4 p-4 w-auto rounded-lg shadow-2xl">
    <div class="p-6">
      <h1 class="text-2xl text-blue-200"><span class="text-pink-300">
           <i class="fas fa-landmark"></i>
        </span> Battersea Park</h1>
      <g-link href="https://bit.ly/2xXCSwL" target="_blank"
        ><g-image
          class = "w-auto h-auto"
          src   = "https://res.cloudinary.com/dzhbfdfa5/image/upload/c_scale,h_200,w_300/v1586361831/batterseapark_k3yiaz.jpg"
          alt   = "Battersea Park"
      /></g-link>
      <p class="text-blue-200">
    Battersea Park<br />Battersea London 

        <g-link
          class  = "text-red-700 hover:text-white"
          to     = "https://bit.ly/2UQGklP"
          target = "_blank"
        >
         SW11 4NJ
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

         A victorian park<br /> built between 1854 and 1870....... 
<input id="read-more-battersea-1" class="read-more-battersea" type="checkbox">
  <div class="read-more-content">

 It has a riverside promenade<br /> a large lake and ecological areas,<br /> children's play areas,<br /> the Pump House gallery. 
  </div>
<label class="read-more-battersea-label text-red-700 hover:text-white" for="read-more-battersea-1">Read </label>
</article>
      <g-link
        class  = "text-red-700 hover:text-white"
        to     = "https://bit.ly/2xXCSwL"
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
.read-more-battersea {
  display: none;
}
.read-more-battersea-label {
  display    : inline-block;
  user-select: none;
  cursor     : pointer;
  border     : none;
  padding    : 5px;
  margin     : .5em;
  font-size  : 16px;
}
.read-more-battersea-label:after {
  content: "More";
  display: inline-block;
}
.read-more-battersea:checked + .read-more-content {
  display: block;
  /* css animation won't work with "auto"; set to some height larger
    than the content */
  max-height: 1000px;
}
.read-more-battersea:checked + .read-more-content + .read-more-battersea-label:after {
  content: "Less";
}
</style>
