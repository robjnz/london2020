<template>
  <div id="work-card" class="m-4 p-4 w-auto rounded-lg shadow-2xl">
    <div class="p-6">
      <H2 class="text-2xl text-blue-200"><span class="text-pink-300">
           <i class="fas fa-landmark"></i>
        </span> Bank Of England Museum</H2>
      <g-link href="https://bit.ly/3ens6AP" target="_blank"
        ><g-image
          class = "w-auto h-auto"
          src   = "https://res.cloudinary.com/dzhbfdfa5/image/upload/c_scale,h_200,w_300/v1586879358/bankengland_rxmejw.jpg"
          alt   = "bank of england museum"
      /></g-link>
      <p class="text-blue-200">
        Bartholomew Lane<br /> London 


        <g-link
          class  = "text-red-700 hover:text-white"
          to     = "https://bit.ly/2RDlLXZ"
          target = "_blank"
        >
          EC2R 8AH
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
Learn about the <br />Bank of England and money.....
<input id="read-more-bankengland-1" class="read-more-bankengland" type="checkbox">

  <div class="read-more-content">
<br />
 Discover history<br /> architecture and banknote design.
 </div>
<label class="read-more-bankengland-label text-red-700 hover:text-white" for="read-more-bankengland-1">Read </label>
</article>
      <g-link
        class  = "text-red-700 hover:text-white"
        to     = "https://bit.ly/3ens6AP"
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
.read-more-bankengland {
  display: none;
}
.read-more-bankengland-label {
  display    : inline-block;
  user-select: none;
  cursor     : pointer;
  border     : none;
  padding    : 5px;
  margin     : .5em;
  font-size  : 16px;
}
.read-more-bankengland-label:after {
  content: "More";
  display: inline-block;
}
.read-more-bankengland:checked + .read-more-content {
  display: block;
  /* css animation won't work with "auto"; set to some height larger
    than the content */
  max-height: 1000px;
}
.read-more-bankengland:checked + .read-more-content + .read-more-bankengland-label:after {
  content: "Less";
}
</style>
