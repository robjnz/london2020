<template>
  <div id="work-card" class="m-4 p-4 w-auto rounded-lg shadow-2xl">
    <div class="p-6">

        <!--pick-->
       <h1 class="text-orange-400 text-2xl">
        <span class="text-blue-100" style="font-size: 1em;">
      <i class="fas fa-thumbs-up"></i>
      </span>
       
          Today's top pick of <br />places to visit in London is:
          
          </h1>
  <!--end-->
      <H2 class="text-2xl text-blue-200"><span class="text-pink-300">
           <i class="fas fa-landmark"></i>
        </span>  The London Dungeon </H2>
      <g-link href="https://bit.ly/3llJLfG" target="_blank"
        ><g-image
          class = "w-auto h-auto"
          src   = "https://res.cloudinary.com/dzhbfdfa5/image/upload/c_scale,h_200,w_300/v1598437748/dungeon_qcfigx.jpg"
          alt   = "The London Dungeon"
      /></g-link>
      <p class="text-blue-200">
        County Hall<br /> Westminster London 



        <g-link
          class  = "text-red-700 hover:text-white"
          to     = "https://bit.ly/3lgGnCG"
          target = "_blank"
        >
          SE1 7PB
        </g-link>
      </p>
      
      <h5 class=" mb-4 text-2xl text-pink-300"></h5>
        <h5 class=" mb-4 text-base text-orange-300">
        
      Adults: £24.00 <br />Children: £19.00 
     <br /><br />
   
      Opening Times: <br />Mon To Sun<br />
      10.00am To 4.00pm  <br />Required To Book Online<br />

      

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
  The London Dungeon is a<br />uniquely thrilling attraction .......
<input id="read-more-dungeon-1" class="read-more-dungeon" type="checkbox">

  <div class="read-more-content">
<br />
That will whisk you way back to<br /> the capital's most perilous past.
</div>
<label class="read-more-dungeon-label text-red-700 hover:text-white" for="read-more-dungeon-1">Read </label>
</article>
      <g-link
        class  = "text-red-700 hover:text-white"
        to     = "https://bit.ly/3llJLfG"
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
.read-more-dungeon {
  display: none;
}
.read-more-dungeon-label {
  display    : inline-block;
  user-select: none;
  cursor     : pointer;
  border     : none;
  padding    : 5px;
  margin     : .5em;
  font-size  : 16px;
}
.read-more-dungeon-label:after {
  content: "More";
  display: inline-block;
}
.read-more-dungeon:checked + .read-more-content {
  display: block;
  /* css animation won't work with "auto"; set to some height larger
    than the content */
  max-height: 1000px;
}
.read-more-dungeon:checked + .read-more-content + .read-more-dungeon-label:after {
  content: "Less";
}
</style>
