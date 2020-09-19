<template>
  <div id="work-card" class="m-4 p-4 w-auto rounded-lg shadow-2xl">
    <div class="p-6">
      <H2 class="text-2xl text-blue-200"><span class="text-pink-300">
          <i class="fas fa-theater-masks"></i>
        </span> Palace Theatre</H2>
      <g-link href="https://bit.ly/3c8KDQB" target="_blank"
        ><g-image
       class = "w-auto h-auto"
       src   = "https://res.cloudinary.com/dzhbfdfa5/image/upload/c_scale,h_200,w_300/v1600421936/palace_sz9m3e.jpg"
       alt   = "Palace Theatre"
      /></g-link>
       <p class="text-blue-200"> 
      113 Shaftesbury Avenue<br /> Soho London 
 

        <g-link
          class  = "text-red-700 hover:text-white"
          to     = "https://bit.ly/2ZKLWzZ"
          target = "_blank"
        >
          W1D 5AY
        </g-link>

      </p>
      <h5 class="text-2xl text-pink-300"></h5>
       <h1 class="text-2xl text-teal-400"> Whats On:</h1>

      <g-link href="https://bit.ly/2ZPFw2O" target="_blank"
        ><g-image
       class = "w-auto h-auto"
       src   = "https://res.cloudinary.com/dzhbfdfa5/image/upload/c_scale,h_200,w_300/v1600423482/potter_cppeei.jpg"
       alt   = "Harry Potter The Cursed Child Poster"
      /></g-link>
      
      
      <h2 class="text-2xl text-teal-400">Harry Potter <br />The Cursed Child </h2>

      <p class="text-teal-400">
        <span>
          <i class="far fa-calendar-alt"></i>
        </span>
       Ends Sun 26 September 2021<br /><br />
       </p>
    
     
    

<article class="text-teal-400">
   Harry Potter and the Cursed Child is <br />one play presented in two Parts..... 

  <input id="read-more-palace-1" class="read-more-palace" type="checkbox">
  <div class="read-more-content">
       which are intended to be <br />seen in order on the same day<br /> matinee and evening <br />or on two consecutive evenings.

  </div>
  <label class="read-more-palace-label text-red-700 hover:text-white" for="read-more-palace-1">Read </label>
</article>
    

<br />
<g-link
        class  = "text-red-700 hover:text-white"
        to     = "https://bit.ly/3c8KDQB"
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
.read-more-palace {
  display: none;
}
.read-more-palace-label {
  display    : inline-block;
  user-select: none;
  cursor     : pointer;
  border     : none;
  padding    : 5px;
  margin     : .5em;
  font-size  : 16px;
}
.read-more-palace-label:after {
  content: "More";
  display: inline-block;
}
.read-more-palace:checked + .read-more-content {
  display: block;
  /* css animation won't work with "auto"; set to some height larger
    than the content */
  max-height: 1000px;
}
.read-more-palace:checked + .read-more-content + .read-more-palace-label:after {
  content: "Less";
}
</style>
