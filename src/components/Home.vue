<template>
    <div class="row">
        <div id="home" class="col-sm-12 text-center">
            <div class="background">
                <div>
                <h3>生活是一种绵延不绝的渴望,渴望不断上升,变得更伟大而高贵。</h3>
                <h4>我叫张威</h4>
                <dd>29岁</dd>
                <dd>一名前端工程师</dd>
                <dd>atzw1988love@163.com</dd>
                <button @click="goToMenu" class="btn btn-success">更多信息!</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    methods:{ 
        goToMenu(){
            //跳转到上一次浏览的页面
            //this.$router.go(-1)

            //指定跳转的地址
            //this.$router.replace('/Menu')

            //指定跳转路由得名字下
            //this.$router.replace({name:'menuLink'}})

            //通过push进行跳转
            //this.$router.push('/menu')
            this.$router.push({name:'menuLink'})
        }
    }
}
</script>

<style>
#home{
    height: 85vh;
    padding: 10%;
}
h1,h2{
    margin: 6%;
}
.background{
    background: #eee;
    opacity: 0.8;
    max-width: 70vw;
    margin: 0 auto;
    padding: 20px 0;
}
</style>

