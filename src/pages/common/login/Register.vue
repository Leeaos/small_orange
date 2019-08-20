<template>
  <div id="login">
    <div class="login-header">
      <router-link to="/logins"> <img
        class="login-back"
        src="../../assets/image/register_icon_Return@2x.png"
        alt
        srcset
      /></router-link>
     
    </div>
    <div class="login-content">
      <!--  -->
      <div class="btn">
        <span class="login-btn"><router-link to="/logins/login" >注册</router-link></span>
        <span class="register-btn"><router-link to="/logins/register" >登陆</router-link></span>
      </div>
      <!-- 手机输入框 -->
      <div class="login-content__input1">
        <img class="phone-icon" src="../../assets/image/register_icon_phone@2x.png" alt srcset />
        <input class="phone-input" type="text" name maxlength="11" placeholder="请输入手机号" />
      </div>
    

      <!-- 密码输入框 -->
      <div class="login-content__input2">
        <img class="password-icon" src="../../assets/image/register_icon_lock@2x.png" alt srcset />
        <input class="password-input" maxlength="16" :type="passwordType" name placeholder="请输入密码" />
        <p class="pswd-info" name>请输入6-16个字符,可使用数字,字符,符号等</p>
        <img class="eyes" :src="seen?openeye:nopeneye" alt @click="changeType" />
      </div>
    </div>
    <!-- 其他登陆方式 -->

    <!-- 立即登陆  -->
    <img
      class="immediately-btn"
      src="../../assets/image/The login_button_The login.png"
      alt
      srcset
    />
    <div class="forget-pswd" >忘记密码?</div>
    <div class="other">其他登陆方式</div>
    <ul class="foot-icon">
      <li>
        <img src="../../assets//image/register_icon_qq@2x.png" alt />
      </li>
      <li>
        <img src="../../assets/image/register_icon_micro-blog@2x.png" alt />
      </li>
      <li>
        <img src="../../assets/image/register_icon_WeChat@2x.png" alt />
      </li>
    </ul>
    <!-- 协议 -->
    <p class="agreement">使用即为同意《桔子注册协议及声明》</p>
  </div>
</template>


<script>

export default {
  data() {
    return {
      isShow:false,
      seen: "",
      openeye: require("../../assets/image/register_button_eye@2x.png"), //图片地址
      nopeneye: require("../../assets/image/register_button_eye2@2x.png"),
      passwordType: "password"
    };
  },

  methods: {
    changeType() {
      this.passwordType =
        this.passwordType === "password" ? "text" : "password";//密码显示隐藏
      this.seen = !this.seen; //小眼睛的变化
    },
  
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/style/px2rem";
#login {
  position: absolute;
  width: 100%;
  height: 100%;
  background: #fdfdfd;
  font-family: "PingFang-SC-Heavy";
  z-index: 998;
  .login-header {
    height: px2rem(244);
    .login-back {
      padding-top: px2rem(105);
      padding-left: px2rem(10);
      vertical-align: middle;
    }
  }
  .login-content {
    padding-left: px2rem(48);
    .btn {
      margin-bottom: px2rem(84);
      .login-btn a{
        font-size: 34px;
        color: #6a6a6a;
        padding-right: px2rem(42);
      
      }
      .register-btn a{
        font-size: 40px;
        color: #282828;
        font-weight: 800;
      }
    }

    &__input1,
    &__input2{
      display: flex;
      margin-bottom: px2rem(68);
      .phone-input,
      .password-input,
      .key-input {
        position: relative;
        background: #fff;
        font-size: 28px;
        display: block;
        width: px2rem(300);
        height: px2rem(54);
        line-height: px2rem(54);
        margin-left: px2rem(22);
        border: none;
        font-weight: bold;
        color: rgba(145, 144, 144, 1);
      }
      .yzm {
        position: absolute;
        display: block;
        right: px2rem(50);
      }
    }

    .login-content__input2 {
      position: relative;
      .pswd-info {
        position: absolute;
        top: 60px;
        left: 64px;
        font-size: 20px;
        color: #919090;
      }
      .eyes {
        position: absolute;
        top: 50%;
        right: 48px;
      }
    }
  }
  .immediately-btn {
    display: block;
    margin: px2rem(44) auto 0 auto;
  }
  .forget-pswd {
    width: px2rem(200);
    height: px2rem((82));
    line-height: px2rem(82);
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    color: rgba(106, 106, 106, 1);
    margin: 0 auto;
  }
  .other {
    height: px2rem(152);
    line-height: px2rem(152);
    font-size: 24px;
    font-family: 'PingFangSC-Semibold';
    font-weight: 600;
    color: rgba(40, 40, 40, 1);
    padding-left: px2rem(48);
  }
  .foot-icon {
    padding: 0 px2rem(24);
    display: flex;
    justify-content: center;
    li {
      flex: 1;
      text-align: center;
    }
  }
  .agreement {
    text-align: center;
    font-size: 18px;
    font-weight: 400;
    color: rgba(145, 144, 144, 1);
    margin-top: px2rem(138);
  }
  input::-webkit-input-placeholder {
    color: #919090;
    font-size: 28px;
  }
}
</style>