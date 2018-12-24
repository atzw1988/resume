<template>
  <div class="section two fp-section" data-anchor="page2" style="height: 889px;">
    <div id="about">
      <div id="about_content" style="padding-top: 71.3333px;">
        <div class="title">
          <h1>关于我</h1>
					<!-- <div class="photo"></div> -->
        </div>
        <div id="about_list_content">
          <div class="about_list" id="about_list1">
            <div class="about_list_eg" id="about_en_edu"></div>
            <div class="about_list_cn" id="about_cn_edu">学历
              <p>本科</p>
            </div>
          </div>
          <div class="about_list">
            <div class="about_list_eg" id="about_en_age"></div>
            <div class="about_list_cn" id="about_cn_age">年龄
              <p>29岁</p>
            </div>
          </div>
          <div class="about_list">
            <div class="about_list_eg" id="about_en_loc"></div>
            <div class="about_list_cn" id="about_cn_loc">坐标
              <p>深圳</p>
            </div>
          </div>
          <div class="about_list">
            <div class="about_list_eg" id="about_en_sta"></div>
            <div class="about_list_cn" id="about_cn_sta">状态
              <p>离职</p>
            </div>
          </div>
        </div>
        <div id="about_info" style="width: 800px; margin-top: 0px; margin-bottom: 0px;">
          <p style="bottom: 0px;">2012年毕业于郑州大学升达经贸管理学院</p>
          <p style="bottom: 0px;">喜欢优雅的代码，代码强迫症患者</p>
          <p style="bottom: 0px;">AngularJS ReactJs VueJs</p>
          <p style="bottom: 0px;">层出不穷的框架让人兴奋，而不同框架背后的思路却在逐渐统一</p>
        </div>
      </div>
    </div>
  </div>
</template>





<style>
h1 {
    text-align: center;
}
#about_content {
	height: 510px;
}
#about_list_content {
	margin: 50px auto;
	width: 800px;
	height: 200px;
	padding: 20px 0;
	border-radius: 30px;
	background: #a0a0b4;	
}
.about_list {
	float: left;
	margin-left: 120px;
	cursor: pointer;
}
#about_list1 {
	margin-left: 60px;
}
.about_list:hover .about_list_eg {
	background: rgba(255,255,255,1);
	color: #702fa8;
	box-shadow: 0 0 0 8px rgba(255,255,255,0.3);
}
.about_list:hover .about_list_eg:before{
	-webkit-animation: l_to_r 1s forwards;
	-moz-animation: l_to_r 1s forwards;
	-o-animation: l_to_r 1s forwards;
	animation: l_to_r 1s forwards;
}
.about_list_eg {
	width: 80px;
	height: 80px;
	box-shadow: 0 0 0 4px rgba(255,255,255,1);
	border-radius: 50%;
	overflow: hidden;
	color: #fff;
	-webkit-transition: background 1s, color 1s, box-shadow 1s;
	transition: background 1s, color 1s, box-shadow 1s;
}
.about_list_eg:before {
	display: block;
	line-height: 130px;
	text-align: center;
}
.about_list_cn {
	padding-top: 20px;
	line-height: 20px;
	position: relative;
	color: #fff;
}
.about_list_cn p {
	padding-top: 10px;
	text-align: right;
	font-size: 14px;
}
.about_list_cn p:before {
	display: block;
	content: "";
	position: absolute;
	background: #ccc;
	height: 2px;
	width: 90px;
	bottom: 25px;
	-webkit-transform: rotate(-30deg);
	transform: rotate(-30deg);
}
#about_info {
	clear: both;
	margin: 50% auto;
	height: 210px;
	width: 0;
	position: relative;
	overflow: hidden;
}
#about_info:before,
#about_info:after {
	position: absolute;
	width: 50px;
	height: 50px;
	content: "";
}
#about_info:before {
	top: 0;
	left: 0;
	border-top: 2px solid #5686D6;
	border-left: 2px solid #5686D6;
}
#about_info:after {
	bottom: 0;
	right: 0;
	border-right: 2px solid #5686D6;
	border-bottom: 2px solid #5686D6;
}
#about_info p {
	text-align: center;
	line-height: 40px;
	position: relative;
	bottom: -300px;
}
#about_en_edu {
	background-image: url('../assets/xueli.png')
}
#about_en_age {
	background-image: url('../assets/age.png')
}
#about_en_loc {
	background-image: url('../assets/where.png')
}
#about_en_sta {
	background-image: url('../assets/work.png')
}
/* .photo{
    width: 150px;
    height: 150px;
    border:8px solid rgb(185, 174, 174);
    margin: 0 auto;
    border-radius: 35%;
    background-image: url('../assets/phtot.png');
} */
</style>
