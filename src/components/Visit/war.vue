<template>
  <div id="work-card" class="m-4 p-4 w-auto rounded-lg shadow-2xl">
    <div class="p-6">

       <!--pick 
       <h1 class="text-orange-400 text-2xl">
        <span class="text-blue-100" style="font-size: 1em;">
      <i class="fas fa-thumbs-up"></i>
      </span>
       
          Today's top pick of <br />places to visit in London is:
          
          </h1>
  end-->
      <H2 class="text-2xl text-blue-200"><span class="text-pink-300">
           <i class="fas fa-landmark"></i>
        </span>  Imperial War Museum</H2>
      <g-link href="https://bit.ly/3hVAwQP" target="_blank"
        ><g-image
          class = "w-auto h-auto"
          src   = "https://res.cloudinary.com/dzhbfdfa5/image/upload/c_scale,h_200,w_300/v1590156939/war_gdlnus.jpg"
          alt   = "Imperial War Museum"
      /></g-link>
      <p class="text-blue-200">
        Lambeth Road<br />London




        <g-link
          class  = "postcode hover:text-white"
          to     = "https://bit.ly/3eb7JFQ"
          target = "_blank"
        >
          SE1 6HZ
        </g-link>
      </p>
      
       <h5 class=" mb-4 text-base text-orange-300">
        
      Admission free<br /><br />
   
      Opening Times: <br />Mon To Sun<br />
      10.00am To 6.00pm  <br />Required To Book Online<br />

      

      </h5>
      <h2 class="text-2xl event"> Events:</h2>
       <g-link href="https://bit.ly/2Hn1cwG" target="_blank"
        ><g-image
          class = "w-auto h-auto"
          src   = "https://res.cloudinary.com/dzhbfdfa5/image/upload/c_scale,h_200,w_300/v1601013458/campiwm_ohvx1c.jpg"
          alt   = "Imperial War Museum Life in a Camp poster"
      /></g-link>
      <!--events-->
      <h2 class="text-2xl event">Life in a Camp</h2>

      <p class="event">
        <span>
          <i class="far fa-calendar-alt"></i>
        </span>
       <br />Thurs 24 September 2020 to <br />Mon 24 May 2021<br /><br />
      
     Experience What Life is really <br />like in a refugee camp.

      </p>

      <br />
      <iframe width="290" height="200" src="https://www.youtube.com/embed/N16nc8jlhHQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <br />
      <!--end-->
      
      <article class="text-blue-200">
   IWM is a place to experience <br />the continuing influence of war.......
<input id="read-more-war-1" class="read-more-war" type="checkbox">

  <div class="read-more-content">
<br />
  on the world, an experience as <br />compelling and thought-provoking <br />as it is unforgettable. 

</div>
<label class="read-more-war-label postcode hover:text-white" for="read-more-war-1">Read </label>
</article>


<br />
      <iframe width="290" height="200" src="https://www.youtube.com/embed/U1VqJABpcWA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <br />
<br />
      <iframe width="290" height="200" src="https://www.youtube.com/embed/6hcack_xoKM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <br />
      <g-link
        class  = "postcode hover:text-white"
        to     = "https://bit.ly/3hVAwQP"
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
.read-more-war {
  display: none;
}
.read-more-war-label {
  display    : inline-block;
  user-select: none;
  cursor     : pointer;
  border     : none;
  padding    : 5px;
  margin     : .5em;
  font-size  : 16px;
}
.read-more-war-label:after {
  content: "More";
  display: inline-block;
}
.read-more-war:checked + .read-more-content {
  display: block;
  /* css animation won't work with "auto"; set to some height larger
    than the content */
  max-height: 1000px;
}
.read-more-war:checked + .read-more-content + .read-more-war-label:after {
  content: "Less";
}
</style>
