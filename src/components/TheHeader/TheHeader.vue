<template>
  <nav class="flex items-center justify-between flex-wrap bg-blue-800 p-6">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <!--<svg class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
    -->
      <g-image
        class = ""
        src   = "@/images/logowhite_transparent.png" width = "70"
      ></g-image>
      <span class="font-semibold text-2xl tracking-tight"
        ><g-link class="hover:text-red-500" to="/">London</g-link>
      </span>
    </div>
    <div class="block lg:hidden">
     <button @click="isOpen = !isOpen" type="button" class="block text-teal-100 hover:text-white focus:text-white focus:outline-none">
          <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
            <path v-if="isOpen" fill-rule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>
            <path v-if="!isOpen" fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
          </svg>
        </button>
    </div>

    <div :class="isOpen ? 'block' : 'hidden'  " class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="text-lg lg:flex-grow">
        <g-link
          to    = "/"
          class = "block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
        >
          Home
        </g-link>

        <g-link
          to    = "/visit"
          class = "block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
        >
          Places to Visit
        </g-link>
        
        <g-link
          to    = "/theatres"
          class = "block mt-4 mr-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
        > Threatres
          
        </g-link>

        <g-link
          to    = "/nightclubs"
          class = "block mt-4 mr-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
        > Nightclubs
          
        </g-link>
        
        <g-link
          to    = "/football"
          class = "block mt-4 mr-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
        > Football
          
        </g-link>

         <g-link
          to    = "/rugby"
          class = "block mt-4 mr-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
        > Rugby
          
        </g-link>

          <g-link
          to    = "/contact"
          class = "block mt-4 mr-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
        > Contact
          
        </g-link>
      </div>

      <div>
        <!--  <g-link to="/" class="m-1 inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Home</g-link>

            <g-link to="/visit" class="m-1 inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Places to Visit</g-link>

            <g-link to="/test" class="m-1 inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Sport</g-link>

      <a href="#" class="m-1 inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Download</a>
    -->
      </div>
      <table class="text-blue-200" cellpadding=0 cellspacing=0 border=0 >
<tr>
	<td  style="font-family: Arial, Helvetica, sans-serif; font-size: 15pt;">
		<center><table width="90%" cellpadding=0 cellspacing=0 border=0  style="font-family: Arial, Helvetica, sans-serif; font-size: 7.5pt;" >
		<tr>
			<td style="font-family: Arial, Helvetica, sans-serif; font-size: 10.5pt;" align=left ><a href="https://search.freefind.com/siteindex.html?si=71946005" target="_blank">index</a></td>
			<td style="font-family: Arial, Helvetica, sans-serif; font-size: 10.5pt;" align=center><a href="https://search.freefind.com/find.html?si=71946005&amp;m=0&amp;p=0" target="_blank">sitemap</a></td>
			<td style="font-family: Arial, Helvetica, sans-serif; font-size: 10.5pt;" align=right><a href="https://search.freefind.com/find.html?si=71946005&amp;pid=a" target="_blank">advanced</a></td>
		</tr>
		</table></center>
		<form style="margin:0px; margin-top:4px;" action="https://search.freefind.com/find.html" method="get" accept-charset="utf-8" target="_blank">
		<input type="hidden" name="si" value="71946005">
		<input type="hidden" name="pid" value="r">
		<input type="hidden" name="n" value="0">
		<input type="hidden" name="_charset_" value="">
		<input type="hidden" name="bcd" value="&#247;">
		<input class="text-black text-center" type="text" name="query" size="15"> 
		<input class="text-blue-800" type="submit" value="search">
		</form>
	</td>
</tr>
<tr>
	<td style="text-align:center; font-family: Arial, Helvetica, sans-serif;	font-size: 7.5pt; padding-top:4px;">
		<a style="text-decoration:none; color:gray;" href="https://www.freefind.com" rel="nofollow" >site search</a><a style="text-decoration:none; color:gray;" href="https://www.freefind.com"  rel="nofollow"> by
		<span style="color: #606060;">freefind</span></a>
	</td>
</tr>
</table>
<!-- end of freefind search box html --> 

<!--
      Begin FusionBot.com site search engine code 
      <div class="text-blue-200">
<form name="fbsearch" method="get" action="https://ss245.fusionbot.com/b/q" target="_blank" style="margin:0;">
  <div align="left"><font size="2" face="arial"><a href="https://www.fusionbot.com" target="_blank">Site Search</a>:</font><br />
  <input class="text-black" type="text" name="keys" size="15">
  <input class="text-blue-800" type="submit" value="GO"><br />
  <font face="arial" size="1"><a href="https://ss245.fusionbot.com/b/h?sn=166039041">search tips</a></font> 
  <font face="arial" size="1"><a href="https://ss245.fusionbot.com/b/s?sn=166039041">sitemap</a></font>
  <input type="hidden" name="sitenbr" value="166039041">
  </div>
</form> 
</div>
End FusionBot.com site search engine code -->
    </div>

  </nav>
</template>
<script>

export default {
  data () {
    return{
      isOpen: false,
    }
  }
  }



</script>
<style scoped></style>
