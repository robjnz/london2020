<template>
  <Layout>
<section class="container m-auto ml-8 mt-16 text-4xl text-blue-300">
<form name="contact" method="POST" data-netlify="true">
  <p>
    <label>Your Name: <input class="text-black bg- bg-blue-200" type="text" name="name" /></label>   
  </p>
  <br />
  <p>
    <label>Your Email: <input class="text-black bg- bg-blue-200" type="email" name="email" /></label>
  </p>
 <br />
  <p>
    <label>Message:      <textarea class="text-black bg- bg-blue-200" name="message"></textarea></label>
  </p>
<br />
<div class="field">
<div 
data-netlify-recaptcha="true">
</div>
</div>
  <p>
    <button type="submit">Send</button>
  </p>
</form>

<br /><br />
</section>
 </Layout>
</template>