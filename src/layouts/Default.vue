<template>
  <div class="layout">
    <TheHeader/>
    
    <slot/>
    <TheFooter/>
  </div>
</template>



<style>
body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  margin     : 0;
  padding    : 0;
  line-height: 1.5;
  
  
}
.layout {
  max-width    : auto;
  margin       : 0 auto;
  padding-left : 2px;
  padding-right: 2px;
  background   : #242943;
  color        : #ebf8ff;
  font-size    : 15;

}


.header {
  display        : flex;
  justify-content: space-between;
  align-items    : center;
  margin-bottom  : 20px;
  height         : 80px;

}

#showcase{
  background             : url(http://res.cloudinary.com/dzhbfdfa5/image/upload/v1515831480/tower_vow6im.jpg) no-repeat center center fixed;
  background-size        : cover;
  -webkit-background-size: cover;
  -moz-background-size   : cover;
  -o-background-size     : cover;
  height                 : 100%;
  margin-top             : -75px;

}

.nav__link {
  margin-left: 20px;
}

.title-color{
    color: #FFCB31;
}

.main-color{
color: #1A8c97;
}

.con-color{color: #242943;
}

.main-content{
  margin-top: 4.5rem;
}
.labour{
  color: #ef4836;
}
.tory{
  color: #1e90ff;
}
.asian{
  color: #00ff7f;
}

.today{
  color: #FFF5EE;
}
.pink{
  color: #e000e0;
}
.football{
  color: #00e0e0;
}

.work-card {
            box-shadow   : 0px 0px 20px rgba(0, 0, 0.1);
            padding      : 1rem;
            border-radius: 0.2rem;
            color        : #00ff7f;
            font-size    : medium;
}
#work-card {
  box-shadow: 0px 0px 20px rgba(0, 0, 0.1);
}
#background{
    background: #242943;
}
.postcode{
color     : #68d391;

}

.event{
color     : #4fd1c5;

}





</style>


<script>
import TheHeader from '@/components/TheHeader/TheHeader'
import TheFooter from '@/components/TheFooter/TheFooter'



export default {
   script: [

        {src: 'https://kit.fontawesome.com/e3c70d4fc5.js'}
      ],
  components: {
    TheHeader,
    TheFooter,
  }
}
</script>
