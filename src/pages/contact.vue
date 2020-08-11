<template>
<Layout>
<section>
  <br />
  <form 
  name="contact" 
  method="POST" 
  data-netlify="true"
  data-netlify-honeypot="bot-field"
  >
  <p>
    <label>Name: <input type="text" name="name" /></label>   
  </p>
  <br />
  <p>
    <label>Email: <input type="email" name="email" /></label>
  </p>
  <br />
  <p>
    <label>Message: <textarea name="message"></textarea></label>
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