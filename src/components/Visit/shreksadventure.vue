<template>
  <div id="work-card" class="m-4 p-4 w-auto rounded-lg shadow-2xl">
    <div class="p-6">

        <!--pick --
       <h1 class="text-orange-400 text-2xl">
        <span class="text-blue-100" style="font-size: 1em;">
      <i class="fas fa-thumbs-up"></i>
      </span>
       
          Today's top pick of <br />places to visit in London is:
          
          </h1>
  --end-->
      <H2 class="text-2xl text-blue-200"><span class="text-pink-300">
           <i class="fas fa-landmark"></i>
        </span>  Shreks Adventure </H2>
      <g-link href="https://bit.ly/32vJMF0" target="_blank"
        ><g-image
          class = "w-auto h-auto"
          src   = "https://res.cloudinary.com/dzhbfdfa5/image/upload/c_scale,h_200,w_300/v1598436236/shrek_xu0imb.jpg"
          alt   = "Shreks Aadventure"
      /></g-link>
      <p class="text-blue-200">
        County Hall<br />Westminster London 



        <g-link
          class  = "text-red-700 hover:text-white"
          to     = "https://bit.ly/2YyXlCH"
          target = "_blank"
        >
          SE1 7PB
        </g-link>
      </p>
      
      <h5 class=" mb-4 text-2xl text-pink-300"></h5>
        <h5 class=" mb-4 text-base text-orange-300">
    
        
      Adult: 28.50 <br />Children: £23.00
<br />Family: £70.00<br /><br />
   
      Opening Times: <br />Mon To Sun<br />
      10.00am To 3.00pm  <br />Required To Book Online<br />

      

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
   Visit the magical world <br />of Shreks Adventure.......
<input id="read-more-shreksadventure-1" class="read-more-shreksadventure" type="checkbox">

  <div class="read-more-content">
<br />
  The swamp, <br />Rumplestilskin's carriage,<br /> the poison apple pub, <br />and the mirror maze.

</div>
<label class="read-more-shreksadventure-label text-red-700 hover:text-white" for="read-more-shreksadventure-1">Read </label>
</article>
      <g-link
        class  = "text-red-700 hover:text-white"
        to     = "https://bit.ly/32vJMF0"
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
.read-more-shreksadventure {
  display: none;
}
.read-more-shreksadventure-label {
  display    : inline-block;
  user-select: none;
  cursor     : pointer;
  border     : none;
  padding    : 5px;
  margin     : .5em;
  font-size  : 16px;
}
.read-more-shreksadventure-label:after {
  content: "More";
  display: inline-block;
}
.read-more-shreksadventure:checked + .read-more-content {
  display: block;
  /* css animation won't work with "auto"; set to some height larger
    than the content */
  max-height: 1000px;
}
.read-more-shreksadventure:checked + .read-more-content + .read-more-shreksadventure-label:after {
  content: "Less";
}
</style>
