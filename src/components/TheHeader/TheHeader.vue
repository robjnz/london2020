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
      </div>

      <div>
        <!--  <g-link to="/" class="m-1 inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Home</g-link>

            <g-link to="/visit" class="m-1 inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Places to Visit</g-link>

            <g-link to="/test" class="m-1 inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Sport</g-link>

      <a href="#" class="m-1 inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Download</a>
    -->
      </div>
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
