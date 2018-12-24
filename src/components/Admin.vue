<template>
  <div class="section three fp-section" data-anchor="page3" style="height: 889px;">
    <div id="skill">
      <div id="skill_content" style="padding-top: 71.3333px;">
        <div class="title">
          <h1>专业技能</h1>
        </div>
        <div id="skill_info">
          <p>前端的学习需要持之以恒，知识深度与广度都很重要。而前端开发的重中之重就是原生javascript的理解，而如今的思路必需有模块化，组件化，工程化</p>
        </div>
        <div id="skill_list">
          <div class="skill_list_content skill_scale" id="skill_list1">
            <div class="skill_icon" id="skill_icon1"></div>
            <div class="skill_name">VueJs</div>
            <div class="skill_int" id="skill_int1">
              <ul>
                <li>运用VueJS处理模块开发</li>
                <li>模块组件化</li>
                <!-- <li>了解双绑的背后实现</li> -->
              </ul>
            </div>
          </div>
          <div class="skill_list_content skill_scale" id="skill_list2">
            <div class="skill_icon" id="skill_icon2"></div>
            <div class="skill_name">HTML</div>
            <div class="skill_int" id="skill_int2">
              <ul>
                <li>深刻理解Web标准</li>
                <li>熟练运用html标签</li>
                <li>熟悉xml及xhtml标记语言</li>
                <li>掌握html5如SVG，localstorage新特性</li>
              </ul>
            </div>
          </div>
          <div class="skill_list_content skill_scale" id="skill_list3">
            <div class="skill_icon" id="skill_icon3"></div>
            <div class="skill_name">CSS</div>
            <div class="skill_int" id="skill_int3">
              <ul>
                <li>熟练运用css及css3新属性</li>
                <li>注重浏览器兼容性，熟悉常见的css hack（兼容至IE8）</li>
                <li>了解bootstrap框架及源码的实现</li>
                <li>了解css预编译器Less及Sass</li>
              </ul>
            </div>
          </div>
          <div class="skill_list_content skill_scale" id="skill_list4">
            <div class="skill_icon" id="skill_icon4"></div>
            <div class="skill_name">JavaScript</div>
            <div class="skill_int" id="skill_int4">
              <ul>
                <li>掌握jQuery</li>
                <li>掌握原生JS的编程</li>
                <li>注重JavaScript性能优化</li>
                <li>正在学习ES6</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
function btn3(){
  document.getElementById('skill_int3').style.display='block';
}

</script>



<style>
h1 {
  text-align: center;
}
#skill_info {
  margin: 50px auto 0;
  width: 100%;
  line-height: 30px;
}
#skill_info p {
  text-align: center;
}
#skill_list {
  margin: 20px auto;
  width: 100%;
  font-size: 16px;
  height: 400px;
}
#skill_list ul {
  list-style: disc;
  list-style-position :inside;
}
.skill_list_content {
  float: left;
  width: 270px;
  position: relative;
  height: 200px;
  visibility: hidden;
  overflow: hidden;
}
.skill_icon {
  cursor: pointer;
  background-size: 100%;
  width: 90px;
  height: 100px;
  text-align: center;
  margin: 30px auto;
  webkit-transform: scale(1);
  transform: scale(1);
  transition: transform 0.25s;
}
.skill_icon:hover {
  webkit-transform: scale(1.2);
  transform: scale(1.2);
  transition: transform 0.25s;
}
.skill_name {
  text-align: center;
  width: 100%;
  position: relative;
}
.skill_int {
  position: absolute;
  top: 250px;
  width: 270px;
  font-size: 14px;
  line-height: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding-top:15px;
  background: #c8c8dc;
}
.skill_int li {
  font-size: 12px;
  padding-left: 5px;
}
@-webkit-keyframes skill_scale {
  0% {
    opacity: 0.1;
    -webkit-transform: scale(0.3);
    transform: scale(0.3);
  }
  100% {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
@-moz-keyframes skill_scale {
  0% {
    opacity: 0.1;
    transform: scale(0.3);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@-o-keyframes skill_scale {
  0% {
    opacity: 0.1;
    transform: scale(0.3);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes skill_scale {
  0% {
    opacity: 0.1;
    transform: scale(0.3);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
.skill_scale {
  -webkit-animation: skill_scale 1s;
  -moz-animation: lskill_scale 1s;
  -o-animation: skill_scale 1s;
  animation: skill_scale 1s;
  visibility: visible;
}
#skill_icon1 {
  background: url("../assets/vue.png") no-repeat;
}
#skill_icon2 {
  background: url("../assets/html.png") no-repeat;
}
#skill_icon3 {
  background: url("../assets/css.png") no-repeat;
}
#skill_icon4 {
  background: url("../assets/js.png") no-repeat;
}
.skill_list_content:hover{
  height: 500px;
}

</style>

