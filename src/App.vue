<template>
  <div id="app">
    <router-view></router-view>
  
    <!-- <TabBar></TabBar> -->
    <!-- <Login/> -->
    <!-- <Choice></Choice> -->
    <Loginhome></Loginhome>
  </div>
</template>
<script>

// import TabBar from './components/tab-bar/tab-bar';
// import Login from './components/Login/Login';
// import Choice from './components/Login/Choice';
 import Loginhome from './components/Login/Loginhome';
export default {
    components:{
      // TabBar,
      // Login,
      // Choice,
      Loginhome
      
    }
}
</script>

<style lang="scss">

</style>
