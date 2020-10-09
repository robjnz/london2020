<template>
<Layout>

  <div id="background" class="container m-auto">
  <div id="work-card" class="mx-20 mt-20 mb-20 p-4 w-auto rounded-lg">
<h1>{{$page.post.title}}</h1>
<h2>Author: {{$page.post.author}}</h2>
<h2>Created: {{$page.post.created}}</h2>

<VueRemarkContent />





  </div>
  </div>
  
</Layout>
</template>

<page-query>
query Post($id: ID!){
post(id: $id) {
  title
  author
  created
}

}


</page-query>

<script>
import barkingF from "@/components/Football/barkingF";
import barkingside from "@/components/Football/barkingside";
import bexley from "@/components/Football/bexley";
import bridon from "@/components/Football/bridon";
import canning from "@/components/Football/canning";
import charlton from "@/components/Football/charlton";
import charltonwomen from "@/components/Football/charltonwomen";
import dagenham from "@/components/Football/dagenham";
import dagred from "@/components/Football/dagred";
import erithtown from "@/components/Football/erithtown";
import erithbell from "@/components/Football/erithbell";
import forest from "@/components/Football/forest";
import greenwichF from "@/components/Football/greenwichF";
import hornchurchF from "@/components/Football/hornchurchF";
import ilfordF from "@/components/Football/ilfordF";
import lewisham from "@/components/Football/lewisham";
import orient from "@/components/Football/orient";
import orientwomen from "@/components/Football/orientwomen";
import lopes from "@/components/Football/lopes";
import may from "@/components/Football/may";
import newbury from "@/components/Football/newbury";
import phoenix from "@/components/Football/phoenix";
import phoenixwomen from "@/components/Football/phoenixwomen";
import redbridge from "@/components/Football/redbridge";
import romford from "@/components/Football/romford";
import tower from "@/components/Football/tower";
import walthamstow from "@/components/Football/walthamstow";
import welling from "@/components/Football/welling";
import west from "@/components/Football/west";
import westwomen from "@/components/Football/westwomen";





export default {
  metaInfo: {
    title: "Posts",
    meta : [
      {
        name   : "description",
        content: "Blog Posts."
      }
    ]
  },
  components: {
    
  }
};
</script>


<style>

</style>