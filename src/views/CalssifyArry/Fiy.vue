<template>
    <div class="fiyy">
        <br>
        <br>
        <ul>
            <li v-for="(item,index) in list" :key="index" @click="LiBtn(index)" :class="{active:index == nowIndex}">{{item.name}}</li>
        </ul>
    </div>
</template>
<script>
export default {
    data () {
        return {
            list:[
                {
                    name:"新品"
                },
                {
                    name:"华为手机"
                },
                {
                    name:"荣耀手机"
                },
                {
                    name:"笔记本&平板"
                },
                {
                    name:"智能穿戴&VR"
                },
                {
                    name:"智能家居"
                },
                {
                    name:"智慧屏"
                },
                {
                    name:"耳机音箱"
                },
                {
                    name:"专属配件"
                },
                {
                    name:"通用配件"
                },
                {
                    name:"生态产品"
                },
                {
                    name:"增值服务"
                },
                {
                    name:"智能计算"
                },
            ],
            nowIndex:0
        }
    },
    methods:{
        LiBtn(index){
            window.console.log(index)
            this.nowIndex=index;
        }
    }
    
}
</script>
<style scoped>
.fiyy ul {
    width: 25%;
    margin-top: 15px;
    list-style: none;
    padding-left: 20px;
    overflow-y:auto;
}
.fiyy ul li {
    margin-bottom: 40px;
    font-size: 13px;
    color: #333;
}

.active {
    border-right: 1px solid red;
}
</style>