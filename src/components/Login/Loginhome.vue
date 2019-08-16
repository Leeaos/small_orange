<template>
  <div id="login-home">
    <img class="log" src="../../pages/assets/image/login-home1.png" alt />
    <img class="log" src="../../pages/assets/image/login-home2.png" alt />
    <img class="log" src="../../pages/assets/image/login-home3.png" alt />
    <div class="login-home__foot">
      <div class="login-home__foot__resg">注册</div>
      <div class="login-home__foot__login">登录</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../../pages/assets/style/px2rem";
#login-home {
  position: absolute;
  width: 100%;
  height: 100%;
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
      color: #282828;
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