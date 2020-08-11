<template>
<Layout>
<section>
  <form name="contact" method="POST" data-netlify="true">
  <p>
    <label>Your Name: <input type="text" name="name" /></label>   
  </p>
  <br />
  <p>
    <label>Your Email: <input type="email" name="email" /></label>
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