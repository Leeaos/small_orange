<template>
  <div id="choice">
    <div class="choice-logo">
        <img src="../../assets/image/log2.png" alt="">
      <img src="../../assets/image/log1.jpg" alt />
      
    </div>
    <p>打开橘子，记录你的美好点滴</p>
    <p>Open the orange and record your beautiful drops</p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../../assets/style/px2rem";
#choice {
  background: #fbf3ea;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  .choice-logo {
    img {
      display: block; 
      margin: 0 auto;  
    }
    img:nth-child(1){
        margin-top: px2rem(304);
        margin-bottom: px2rem(30);
    }
    img:nth-child(2){
        margin-bottom: px2rem(372);
    }
  }
    p{  
        text-align: center;
        font-size: 28px;
        font-family: '宋体';
        flex-wrap: wrap;
        color: #f0851d;
        margin-bottom: px2rem(40);
    }
}
</style>