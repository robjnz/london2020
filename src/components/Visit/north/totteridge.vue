<template>
  <div id="work-card" class="m-4 p-4 w-auto rounded-lg shadow-2xl">
    <div class="p-6">
      <H2 class="text-2xl text-blue-200"
        ><span class="text-pink-300">
          <i class="fas fa-landmark"></i>
        </span>
        Totteridge Fields</H2
      >
      <g-link href="https://bit.ly/2UdgF6u" target="_blank"
        ><g-image
          class = "w-auto h-auto"
          src   = "https://res.cloudinary.com/dzhbfdfa5/image/upload/c_scale,h_200,w_300/v1585070198/totteridge_sx8fzn.jpg"
          fluid-grow
          alt = "Totteridge Fields"
      /></g-link>
      <p class="text-blue-200">
        Hendon Wood Lane<br />
        Barnet London

        <g-link
          class  = "text-red-700 hover:text-white"
          to     = "https://bit.ly/2WDU0SA"
          target = "_blank"
        >
          NW7 4HR
        </g-link>
      </p>
      <br />
      <article class="text-blue-200">
  London's last remaining tracts <br />of traditional countryside.....<br /> 
  <input id="read-more-totteridge-1" class="read-more-totteridge" type="checkbox">
  <div class="read-more-content">
         its environs are a beautiful place<br /> for a spring or summer walk.

  </div>
  <label class="read-more-totteridge-label text-red-700 hover:text-white" for="read-more-totteridge-1">Read </label>
</article>
      <g-link
        class  = "text-red-700 hover:text-white"
        to     = "https://bit.ly/2UdgF6u"
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
.read-more-totteridge {
  display: none;
}
.read-more-totteridge-label {
  display    : inline-block;
  user-select: none;
  cursor     : pointer;
  border     : none;
  padding    : 5px;
  margin     : .5em;
  font-size  : 16px;
}
.read-more-totteridge-label:after {
  content: "More";
  display: inline-block;
}
.read-more-totteridge:checked + .read-more-content {
  display: block;
  /* css animation won't work with "auto"; set to some height larger
    than the content */
  max-height: 1000px;
}
.read-more-totteridge:checked + .read-more-content + .read-more-totteridge-label:after {
  content: "Less";
}
</style>
