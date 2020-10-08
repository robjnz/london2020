<template>
  <div>
<h1>{{$page.post.title}}</h1>
<h2>Author: {{$page.post.author}}</h2>

<VueRemarkContent />





  </div>
</template>

<page-query>
query Post($id: ID!){
post(id: $id) {
  title
  author
}

}


</page-query>

<script>
export default {

}
</script>

<style>

</style>