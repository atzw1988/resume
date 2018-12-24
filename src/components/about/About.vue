<template>
  <div class="section four fp-section" data-anchor="page4" style="height: 889px;">
    <div id="exp">
      <div id="exp_content" style="padding-top: 72.8333px;">
        <div class="title">
          <h1>我的经历</h1>
        </div>
        <div id="exp_info" class="exp_scale b_to_t">
          <p>2018年工作期间，开始了web前端自学生涯。</p>
        </div>
        <div id="flash" class="demo">
          <img style="display:block" src="../assets/bg1.png" alt>
          <img src="../assets/bg2.png" alt>
          <img src="../assets/bg3.png" alt>
          <ul>
            <a class="dels" style="background:#A10000"></a>
            <a class="dels"></a>
            <a class="dels"></a>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>


<script>

    var flash = document.getElementById("flash");
    var is = document.getElementsByTagName("img");
    var ls = document.getElementsByClassName("dels");
    var c = 0;

    setInterval(function(){
        c++;
    // if (c == 4){
    //     c = 0;
    // }
        c = c==3? 0:c;
        for (var i = 0; i < is.length; i++){
        is[i].style.display = 'none';
        ls[i].style.background = '#DDDDDD';
        }
        is[c].style.display = 'block';
        ls[c].style.background = '#A10000';
    },5000)
</script>






<style>
*{
    margin: 0;
    padding: 0;
}
h1,p{
  text-align: center;
}
#flash{
    width: 1000px;
    height: 321px;
    margin: 20px auto;
    position: relative;
}
#flash img{
    display: none;
    position: absolute;
    top: 0;
    left: 0;
}
#flash ul{
    position: absolute;
    left: 468px;
    bottom: 13px;
}
#flash ul a{
    list-style: none;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    float: left;
    background: #DDDDDD;
    margin-right: 8px;
}
</style>
