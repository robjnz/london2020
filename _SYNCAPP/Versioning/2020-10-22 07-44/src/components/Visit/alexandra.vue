<template>
  <div id="work-card" class="m-4 p-4 w-auto rounded-lg shadow-2xl">
    <div class="p-6">

<!--pick -->
       <h1 class="text-orange-400 text-2xl">
        <span class="text-blue-100" style="font-size: 1em;">
      <i class="fas fa-thumbs-up"></i>
      </span>
       
          Today's top pick of <br />places to visit in London is:
          
          </h1>
  <!--end-->

      <h1 class="text-2xl text-blue-200"
        ><span class="text-pink-300">
          <i class="fas fa-landmark"></i>
        </span>
        Alexandra Palace 
</h1>

      <g-link href="https://bit.ly/2vTGGyw" target="_blank"
        ><g-image
          class = "h-32 w-full object-fill"
          src   = "https://res.cloudinary.com/dzhbfdfa5/image/upload/v1585222919/alexandra_d4foln.jpg"
          alt = "Alexandra Palace "
      /></g-link>

      
      <p class="text-blue-200">
        Alexandra Palace Way<br /> London 
        <g-link
          class  = "postcode hover:text-white"
          to     = "https://bit.ly/2xtJORT"
          target = "_blank"
        >
           N22 7AY
        </g-link>
      </p>

       <h2 class="text-2xl event"> Events:</h2>
      
       <g-link href="https://bit.ly/33bFdBq" target="_blank"
        ><g-image
          class = "h-32 w-full object-fill"
          src   = "https://res.cloudinary.com/dzhbfdfa5/image/upload/v1601366033/driveinclub_vxrkk8.jpg"
          alt = "Alexandra Palace drive in club poster"
      /></g-link>

      <h2 class="text-2xl event">Drive in Film Club</h2>

      <h2 class="text-base text-orange-300">
       Afternoon Screening <br />
       One Vehicle: £29.50<br />
       NHS Hero £5.00<br />
       Evening Screening <br />
       One Vehicle: £31.50<br />
      NHS Hero £5.00<br /><br />
     </h2>

      <p class="event">
        <span>
          <i class="far fa-calendar-alt"></i>
        </span>
       Monday 12  October 2020<br />
       To<br />
        <span>
          <i class="far fa-calendar-alt"></i>
        </span>
       Saturday 31 October 2020<br />
       <br />
      
       Films includes a mix of family classics<br /> such as Jurassic Park and Ghostbusters,<br /> cult classics Pulp Fiction.      
       </p>
       <br />
       <p class="text-base event">
       <span>
          <i class="far fa-calendar-alt"></i>
        </span> Wednesday 21 October 2020 <br />
        <!--
        Matilda 2.30pm
        <iframe class="h-32 w-full object-fill" aria-label="youtube-video" title="video trailer of Matilda 0.38 seconds" src="https://www.youtube.com/embed/mPvuVAUEETg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
       <br />
        -->

      Notting Hill 5.30pm
        <iframe class="h-32 w-full object-fill" aria-label="youtube-video" title="video trailer of notting hill 2.46 minutes" src="https://www.youtube.com/embed/Ig_88q9M3SU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
       
         <br />
       Goodfellas 8.30pm
        <iframe class="h-32 w-full object-fill" aria-label="youtube-video" title="video trailer of goodfellas 1.29 minutes" src="https://www.youtube.com/embed/PTBRNXGQR9Q" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
       </p>
      <br />
      
      <article class="text-blue-200">
  Grade II listed entertainment<br /> and sports venue....... 
  <input id="read-more-alexandra-1" class="read-more-alexandra" type="checkbox">
  <div class="read-more-content">
 and park with views across london.
  </div>
  <label class="read-more-alexandra-label postcode hover:text-white" for="read-more-alexandra-1">Read </label>
</article>
      <g-link
        class  = "postcode hover:text-white"
        to     = "https://bit.ly/2vTGGyw"
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
.read-more-alexandra {
  display: none;
}
.read-more-alexandra-label {
  display    : inline-block;
  user-select: none;
  cursor     : pointer;
  border     : none;
  padding    : 5px;
  margin     : .5em;
  font-size  : 16px;
}
.read-more-alexandra-label:after {
  content: "More";
  display: inline-block;
}
.read-more-alexandra:checked + .read-more-content {
  display: block;
  /* css animation won't work with "auto"; set to some height larger
    than the content */
  max-height: 1000px;
}
.read-more-alexandra:checked + .read-more-content + .read-more-alexandra-label:after {
  content: "Less";
}
</style>
