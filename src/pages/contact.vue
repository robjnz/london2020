<template>
<Layout>
  <section class="container m-auto text-4xl text-blue-300">
<br />
<form action="https://usebasin.com/f/cd732aa480b9" method="POST">
<!--
<form action="https://getform.io/f/b28d0b1c-0650-43d0-a8aa-ae2e7e188dbe" method="POST">
-->
  <p>
    <label>Name: <input class="text-black" type="text" name="name" /></label>   
  </p>
  <br />
  <p>
    <label>Email: <input class="text-black" type="email" name="email" /></label>
  </p>
 <br />
  <p>
    <label>Message: <textarea class="text-black" name="message"></textarea></label>
  </p>
  <br />
 <p>
    <input type="hidden" name="workmailaddress" value="">

 </p>
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
  },
};
</script>



  

  