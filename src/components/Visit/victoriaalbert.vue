<template>
  <div id="work-card" class="m-4 p-4 w-auto rounded-lg shadow-2xl">
    <div class="p-6">
      <H2 class="text-2xl text-blue-200"><span class="text-pink-300">
           <i class="fas fa-landmark"></i>
        </span> Victoria & Albert Museum</H2>
      <g-link href="https://bit.ly/2yKcvL2" target="_blank"
        ><g-image
          class = "w-auto h-auto"
          src   = "https://res.cloudinary.com/dzhbfdfa5/image/upload/c_scale,h_200,w_300/v1587808401/victoriamuseum_hogzne.jpg"
          alt   = "victoria & albert museum"
      /></g-link>
      <p class="text-blue-200">
     
      Cromwell Road<br />Kensington London 


        <g-link
          class  = "text-red-700 hover:text-white"
          to     = "https://bit.ly/2Y255NQ"
          target = "_blank"
        >
          SW7 2RL
        </g-link>
      </p>
      
      <h5 class=" mb-4 text-2xl text-pink-300">Reopens 6 August</h5>
      
      <!--
      <p class="text-pink-300">
        <span>
          <i class="far fa-calendar-alt"></i>
        </span>
       Thurs 19 March
      
      </p>
      -->
      <article class="text-blue-200">
The Museum holds many of <br />the UK's national collections......
<input id="read-more-victoriaalbert-1" class="read-more-victoriaalbert" type="checkbox">

  <div class="read-more-content">
<br />

for the study of<br />architecture, furniture, fashion, textiles,<br/> photography, sculpture, painting, jewellery, <br />glass, ceramics, book arts, <br />Asian art and design, <br />theatre and performance. </div>
<label class="read-more-victoriaalbert-label text-red-700 hover:text-white" for="read-more-victoriaalbert-1">Read </label>
</article>
      <g-link
        class  = "text-red-700 hover:text-white"
        to     = "https://bit.ly/2yKcvL2"
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
.read-more-victoriaalbert {
  display: none;
}
.read-more-victoriaalbert-label {
  display    : inline-block;
  user-select: none;
  cursor     : pointer;
  border     : none;
  padding    : 5px;
  margin     : .5em;
  font-size  : 16px;
}
.read-more-victoriaalbert-label:after {
  content: "More";
  display: inline-block;
}
.read-more-victoriaalbert:checked + .read-more-content {
  display: block;
  /* css animation won't work with "auto"; set to some height larger
    than the content */
  max-height: 1000px;
}
.read-more-victoriaalbert:checked + .read-more-content + .read-more-victoriaalbert-label:after {
  content: "Less";
}
</style>
