<template>
  <div>
    <div id="login-home">
      <img class="log" src="../../assets/image/login-home1.png" alt />
      <img class="log" src="../../assets/image/login-home2.png" alt />
      <img class="log" src="../../assets/image/login-home3.png" alt />
      <div class="login-home__foot">
        <div class="login-home__foot__resg">
          <router-link to="/logins/login" >注册</router-link>
        </div>
        <div class="login-home__foot__login">
          <router-link to="/logins/register" >登录</router-link>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
    data(){
      return{
     
      }
    },
  methods:{
     
  }
  


};
</script>
<style lang="scss" scoped>
@import "../../assets/style/px2rem";
#login-home {
  .router-link-active{
      color: #282828;
  }
  a {
    color: #6a6a6a;
  }
  position: absolute;
  top:0;
  left: 0;
  bottom:0;
  width: 100%;
  height: 100%;
  z-index: 500;
  background-image: linear-gradient(#f89e45 0%, #fac086 50%, #fbf1e6 100%);
  .log {
    display: block;
    margin: 0 auto;
  }
  img:nth-child(3) {
    margin-top: px2rem(80);
    margin-bottom: px2rem(284);
  }
  .login-home__foot {
    display: flex;
    justify-content: space-around;
    &__resg,
    &__login {
      align-self: center;
      font-size: 30px;
      font-family: "PingFang-SC-Bold";
      line-height: px2rem(60);
      text-align: center;
      border-radius: 6px;
      font-weight: bold;
      width: px2rem(202);
      height: px2rem(60);
      background: #f4f4f4;
    }
  }
  .login-home__foot__resg {
    margin-left: px2rem(100);
  }
  .login-home__foot__login {
    margin-right: px2rem(100);
  }
}
</style>