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
        </span> Kew Gardens</H2>
      <g-link href="https://bit.ly/2VmFjRH" target="_blank"
        ><g-image
          class = "w-auto h-auto"
          src   = "https://res.cloudinary.com/dzhbfdfa5/image/upload/c_scale,h_200,w_300/v1586788794/kew_huxnq3.jpg"
          alt   = "Kew Gardens"
      /></g-link>
      <p class="text-blue-200">
        Kew <br />Richmond London 


        <g-link
          class  = "text-red-700 hover:text-white"
          to     = "https://bit.ly/2RwJwRw"
          target = "_blank"
        >
          TW9 3AE
        </g-link>
      </p>
      
      <h5 class=" mb-4 text-2xl text-pink-300"></h5>
       <h5 class=" mb-4 text-base text-orange-300">
        <br />
      Adults: £9.00 <br />Concession £8.00 <br />Children: £4.50
<br />Family: £21.00<br />
   <br />
      Opening Times:<br /> Mon To Sun<br />
      10am To 6pm <br />
      Required To Book Online<br />

      

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
Discover the world of science behind <br />the botanical collections.....
<input id="read-more-kew-1" class="read-more-kew" type="checkbox">

  <div class="read-more-content">
<br />
 with over 50,000 living plants<br /> to be found at <br />this World Heritage site.
 </div>
<label class="read-more-kew-label text-red-700 hover:text-white" for="read-more-kew-1">Read </label>
</article>
      <g-link
        class  = "text-red-700 hover:text-white"
        to     = "https://bit.ly/2VmFjRH"
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
.read-more-kew {
  display: none;
}
.read-more-kew-label {
  display    : inline-block;
  user-select: none;
  cursor     : pointer;
  border     : none;
  padding    : 5px;
  margin     : .5em;
  font-size  : 16px;
}
.read-more-kew-label:after {
  content: "More";
  display: inline-block;
}
.read-more-kew:checked + .read-more-content {
  display: block;
  /* css animation won't work with "auto"; set to some height larger
    than the content */
  max-height: 1000px;
}
.read-more-kew:checked + .read-more-content + .read-more-kew-label:after {
  content: "Less";
}
</style>
