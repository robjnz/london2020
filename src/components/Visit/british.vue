<template>
  <div id="work-card" class="m-4 p-4 w-auto rounded-lg shadow-2xl">
    <div class="p-6">
      <H2 class="text-2xl text-blue-200"><span class="text-pink-300">
           <i class="fas fa-landmark"></i>
        </span> British Museum</H2>
      <g-link href="https://bit.ly/2KckjaU" target="_blank"
        ><g-image
          class = "w-auto h-auto"
          src   = "https://res.cloudinary.com/dzhbfdfa5/image/upload/c_scale,h_200,w_300/v1587052674/british_vexfwb.jpg"
          alt   = "British Museum"
      /></g-link>
      <p class="text-blue-200">
      Great Russell Street<br />London 


        <g-link
          class  = "text-red-700 hover:text-white"
          to     = "https://bit.ly/2K8ALZI"
          target = "_blank"
        >
          WC1B 3DG
        </g-link>
      </p>
      
      <h5 class=" mb-4 text-2xl text-pink-300"></h5>
           <h5 class=" mb-4 text-base text-orange-300">
        
     Admission free<br /><br />
   
      Opening Times: <br />Wed To Sun<br />
      10.00am – 5.00pm
      <br />
      Required To Book Online<br />

      

      </h5>
      
      <p class="text-pink-300">
        <span>
          <i class="far fa-calendar-alt"></i>
        </span>
       Thurs 24 Sept 2020 - Sun 24 Jan 2021
      <br />
      Tantra Enlightenment To Revolution<br />
      Explore the radical force that <br />transformed the religious,<br /> cultural and political landscape of India.

      </p>
      <br />
      <article class="text-blue-200">
The British Museum was founded in 1753<br /> opened its doors in 1759.......
<input id="read-more-british-1" class="read-more-british" type="checkbox">

  <div class="read-more-content">
<br />
 It was the first national museum <br />to cover all fields of human knowledge.
 </div>
<label class="read-more-british-label text-red-700 hover:text-white" for="read-more-british-1">Read </label>
</article>
      <g-link
        class  = "text-red-700 hover:text-white"
        to     = "https://bit.ly/2KckjaU"
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
.read-more-british {
  display: none;
}
.read-more-british-label {
  display    : inline-block;
  user-select: none;
  cursor     : pointer;
  border     : none;
  padding    : 5px;
  margin     : .5em;
  font-size  : 16px;
}
.read-more-british-label:after {
  content: "More";
  display: inline-block;
}
.read-more-british:checked + .read-more-content {
  display: block;
  /* css animation won't work with "auto"; set to some height larger
    than the content */
  max-height: 1000px;
}
.read-more-british:checked + .read-more-content + .read-more-british-label:after {
  content: "Less";
}
</style>
