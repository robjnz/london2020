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
        </span>  Charles Dickens Museum </H2>
      <g-link href="https://bit.ly/3g0baAG" target="_blank"
        ><g-image
          class = "w-auto h-auto"
          src   = "https://res.cloudinary.com/dzhbfdfa5/image/upload/c_scale,h_200,w_300/v1595667439/dickens_n2bu2f.jpg"
          alt   = "Charles Dickens Museum"
      /></g-link>
      <p class="text-blue-200">
        48-49 Doughty Street<br />London 



        <g-link
          class  = "text-red-700 hover:text-white"
          to     = "https://bit.ly/3jL8Yzt"
          target = "_blank"
        >
          WC1N 2LX
        </g-link>
      </p>
      
      <h5 class=" mb-4 text-2xl text-pink-300"></h5>
        <h5 class=" mb-4 text-base text-orange-300">
        
      Adults: £9.50 <br />Concession £7.50 <br />Children: £4.50 
<br /><br />
   
      Opening Times: <br />Fri To Sun<br />
      10.00am To 5.00pm  <br />Required To Book Online<br />

      

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
   The Victorian family home<br /> of Charles Dickens.......

<input id="read-more-dickens-1" class="read-more-dickens" type="checkbox">

  <div class="read-more-content">
<br />

Uncover the private world behind<br />  the author where the he wrote <br />Oliver Twist, <br />Pickwick Papers<br /> and Nicholas Nickleby. 
</div>
<label class="read-more-dickens-label text-red-700 hover:text-white" for="read-more-dickens-1">Read </label>
</article>
      <g-link
        class  = "text-red-700 hover:text-white"
        to     = "https://bit.ly/3g0baAG"
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
.read-more-dickens {
  display: none;
}
.read-more-dickens-label {
  display    : inline-block;
  user-select: none;
  cursor     : pointer;
  border     : none;
  padding    : 5px;
  margin     : .5em;
  font-size  : 16px;
}
.read-more-dickens-label:after {
  content: "More";
  display: inline-block;
}
.read-more-dickens:checked + .read-more-content {
  display: block;
  /* css animation won't work with "auto"; set to some height larger
    than the content */
  max-height: 1000px;
}
.read-more-dickens:checked + .read-more-content + .read-more-dickens-label:after {
  content: "Less";
}
</style>
