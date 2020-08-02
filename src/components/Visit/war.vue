<template>
  <div id="work-card" class="m-4 p-4 w-auto rounded-lg shadow-2xl">
    <div class="p-6">
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
          class  = "text-red-700 hover:text-white"
          to     = "https://bit.ly/3eb7JFQ"
          target = "_blank"
        >
          SE1 6HZ
        </g-link>
      </p>
      
      <h5 class=" mb-4 text-2xl text-pink-300"></h5>
       <h5 class=" mb-4 text-base text-orange-300">
        
      Admission free<br /><br />
   
      Opening Times: <br />Mon To Sun<br />
      10.00am To 6.00pm  <br />Required To Book Online<br />

      

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
   IWM is a place to experience <br />the continuing influence of war.......
<input id="read-more-war-1" class="read-more-war" type="checkbox">

  <div class="read-more-content">
<br />
  on the world, an experience as <br />compelling and thought-provoking <br />as it is unforgettable. 

</div>
<label class="read-more-war-label text-red-700 hover:text-white" for="read-more-war-1">Read </label>
</article>
      <g-link
        class  = "text-red-700 hover:text-white"
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
