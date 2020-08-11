<template>
<Layout>
  <section class="container m-auto text-4xl text-blue-300">
<br />

<form action="https://getform.io/f/b28d0b1c-0650-43d0-a8aa-ae2e7e188dbe" method="POST">
  <p>
    <label>Name: <input type="text" name="name" /></label>   
  </p>
  <br />
  <p>
    <label>Email: <input type="email" name="email" /></label>
  </p>
 <br />
  <p>
    <label>Message: <textarea class="text-black" name="message"></textarea></label>
  </p>
  <br />
 
  <p>
    <button type="submit">Send</button>
  </p>
</form>
<br /><br />
</section>
</Layout>
  
</template>

<script>



export default {
  metaInfo: {
    title: "contact",
    meta : [
      {
        name   : "description",
        content: 
          "contact me"
      }
    ],
    script: [
      { scr: "https: //cdn.jsdelivr.net/npm/gsap@3.0.4/dist/gsap.min.js" },
      { src: "https://cdn.jsdelivr.net/npm/jquery@3.4.1/dist/jquery.min.js" },
      { src: "https://cdn.jsdelivr.net/npm/animejs@3.1.0/lib/anime.min.js" },
      { src: "https://kit.fontawesome.com/e3c70d4fc5.js" },
      
    ]
  },
};
</script>



  

  