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



<form 
method="POST"  
name="contact" data-netlify="true"  
data-netlify-honeypot="bot-field" 
enctype="application/x-www-form-urlencoded"  
>
            <input type="hidden" name="form-name" value="contact" />
            <div className="field" >
                <label>First Name</label>
                <input type="text" name="firstName" id="firstName" required />
            </div>

            <br />
            <div className="field">
                <label>Last Name</label>
                <input type="text" name="lastName" id="lastName"  required />
            </div>

            <br />
            <div className="field">
                <label>Email Address</label>
                <input type="email" name="portfolioemail" id="email"   />
          </div>
          <br />
          
          <div className="field">
             <label>Message</label>
            <textarea type="message" name="portfoliomessage" id="message"/>
         </div>
            <button type="submit">Send</button>
         </form>
<br /><br />
</section>
</Layout>
  
</template>