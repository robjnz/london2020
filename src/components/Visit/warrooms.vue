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

      <H2 class="text-2xl text-blue-200"><span class="text-pink-300">
           <i class="fas fa-landmark"></i>
        </span>  Churchill War Rooms</H2>
      <g-link href="https://bit.ly/2Agb347" target="_blank"
        ><g-image
          class = "w-auto h-auto"
          src   = "https://res.cloudinary.com/dzhbfdfa5/image/upload/c_scale,h_200,w_300/v1590745930/warrooms_nywbti.jpg"
          alt   = "Churchill War Rooms"
      /></g-link>
      <p class="text-blue-200">
        Clive Steps King Charles Street<br />Westminster London





        <g-link
          class  = "text-red-700 hover:text-white"
          to     = "https://bit.ly/2B8o67T"
          target = "_blank"
        >
          SW1A 2AQ
        </g-link>
      </p>
      
      <h5 class=" mb-4 text-2xl text-pink-300"></h5>
      <h5 class=" mb-4 text-base text-orange-300">
        
      Adults: £22.00 <br />Concession £17.60 <br />Children: £11.00 
<br />Family: £57.25<br /><br />
   
      Opening Times: <br />Mon To Sun<br />
      9.30am To 6.00pm  <br />Required To Book Online<br />

      

      </h5>
      
      <!--
      <p class="text-pink-300">
        <span>
          <i class="far fa-calendar-alt"></i>
        </span>
       Thurs 19 March
      
      </p>
      -->
      <article class="text-blue-200">
   Discover Life in Churchill's<br /> War Bunker.......
<input id="read-more-warrooms-1" class="read-more-warrooms" type="checkbox">

  <div class="read-more-content">
<br />
  See historic images, objects<br /> and interviews with the men and women<br /> who worked in the underground hideaway,<br /> revealing what it was like to work<br /> in secret alongside Winston Churchill<br /> during the Second World War.

</div>
<label class="read-more-warrooms-label text-red-700 hover:text-white" for="read-more-warrooms-1">Read </label>
</article>
      <g-link
        class  = "text-red-700 hover:text-white"
        to     = "https://bit.ly/2Agb347"
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
.read-more-warrooms {
  display: none;
}
.read-more-warrooms-label {
  display    : inline-block;
  user-select: none;
  cursor     : pointer;
  border     : none;
  padding    : 5px;
  margin     : .5em;
  font-size  : 16px;
}
.read-more-warrooms-label:after {
  content: "More";
  display: inline-block;
}
.read-more-warrooms:checked + .read-more-content {
  display: block;
  /* css animation won't work with "auto"; set to some height larger
    than the content */
  max-height: 1000px;
}
.read-more-warrooms:checked + .read-more-content + .read-more-warrooms-label:after {
  content: "Less";
}
</style>
