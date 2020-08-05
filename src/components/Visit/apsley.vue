<template>
  <div id="work-card" class="m-4 p-4 w-auto rounded-lg shadow-2xl">
    <div class="p-6">
      <H2 class="text-2xl text-blue-200"><span class="text-pink-300">
           <i class="fas fa-landmark"></i>
        </span>  Apsley House </H2>
      <g-link href="https://bit.ly/2Dwwijt" target="_blank"
        ><g-image
          class = "w-auto h-auto"
          src   = "https://res.cloudinary.com/dzhbfdfa5/image/upload/c_scale,h_200,w_300/v1596361693/apsley_etjixy.jpg"
          alt   = "apsley house"
      /></g-link>
      <p class="text-blue-200">
       149 Piccadilly Hyde Park Corner<br /> London 



        <g-link
          class  = "text-red-700 hover:text-white"
          to     = "https://bit.ly/3gnjpHh"
          target = "_blank"
        >
          W1J 7NT
        </g-link>
      </p>
      
      <h5 class=" mb-4 text-2xl text-pink-300"></h5>
        <h5 class=" mb-4 text-base text-orange-300">
        
      Adults: £11.30 <br />Concession £10.20 <br />Children: £6.80 
<br />Family: £29.40<br /><br />
   
      Opening Times: <br />Mon To Sun<br />
      <br />Required To Book Online<br />

      

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
    Built in the 1820s for <br />the Duke of Wellington....... 
<input id="read-more-apsley-1" class="read-more-apsley" type="checkbox">

  <div class="read-more-content">
<br />
collection of paintings, <br />silver and porcelain <br />many of the items <br />were presented to <br />the 1st Duke of Wellington<br /> after Waterloo.
</div>
<label class="read-more-apsley-label text-red-700 hover:text-white" for="read-more-apsley-1">Read </label>
</article>
      <g-link
        class  = "text-red-700 hover:text-white"
        to     = "https://bit.ly/2Dwwijt"
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
.read-more-apsley {
  display: none;
}
.read-more-apsley-label {
  display    : inline-block;
  user-select: none;
  cursor     : pointer;
  border     : none;
  padding    : 5px;
  margin     : .5em;
  font-size  : 16px;
}
.read-more-apsley-label:after {
  content: "More";
  display: inline-block;
}
.read-more-apsley:checked + .read-more-content {
  display: block;
  /* css animation won't work with "auto"; set to some height larger
    than the content */
  max-height: 1000px;
}
.read-more-apsley:checked + .read-more-content + .read-more-apsley-label:after {
  content: "Less";
}
</style>
