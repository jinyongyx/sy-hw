<template>
  <div class="box">
      <!-- <p>{{date.name}}</p>
      <img :src="date.img" alt=""> -->
        <div class="box-img">
            <img :src="date.imgOne" alt="">
        </div>
        <div class="box-img1">
            <img :src="date.imgTwo" alt="">
        </div>
        <div class="box-img2">
            <img :src="date.minImgOne" alt="">
            <img :src="date.minImgTwo" alt="">
            <img :src="date.minImgThree" alt="">
            <img :src="date.minImgFour" alt="">
            <img :src="date.minImgFive" alt="">
        </div>
        <div class="p">
        </div>
        <div class="ul">
            <!-- <p class="p">{{date.arr[index].kind1}}</p> -->
            <ul>
                <li v-for="(item,index) in date.arr" :key="index">
                    <img :src="item.iponImg" alt="">
                    <p>{{item.text1}}</p>
                </li>
                
            </ul>
        </div>
        <div class="p">
            <p></p>
        </div>
        <div class="ul-li">
            <!-- <p class="p">{{date.arr[index].kind}}</p> -->
            <ul>
                <li v-for="(item,index) in date.PadList" :key="index">
                    <img :src="item.iponImg" alt="">
                    <p>{{item.text1}}</p>
                </li>
            </ul>
        </div>
  </div>
</template>

<script>
export default {
    props: ['date'],
    created(){
        window.console.log(this.date)
        
    }
}
</script>

<style scoped>
    .box{
        width: 100%;
        /* height: 100%; */
    }
    .box-img {
        /* height: 100%; */
        width: 100%;
    }
    .box-img img {
        width: 100%;
        border-radius: 15px;
        padding: 0 10px 0 10px;
    }
    .ul-li>.p {
        width: 100%;
        color: #333;
    }
    .box-img1 {
        width: 100%;
    }
    .box-img1 img {
        width: 100%;
        border-radius: 15px;
        padding: 0 10px 0 10px;
    }
    .box-img2 {
        width: 100%;
        overflow-x: auto;
        white-space: nowrap; 
    }

    .box-img2::-webkit-scrollbar {
    display: none;
}
    .box-img2 img {
        width: 33%;
        padding: 0 0 0 5px;
    }
    .p {
        text-align: center;
        font-size: 14px;
        color: #333;
    }
    .ul ul {
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }
    .ul ul li {
        width: 28%;
        padding: 0 10px 10px 10px ;
        font-size: 12px;
        color: #666;
        text-align: center;
    }

    .ul ul li img {
        width: 100%;
        padding-bottom: 10px;
    }


    .ul-li ul {
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }
    .ul-li ul li {
        width: 28%;
        padding: 0 10px 10px 10px ;
        font-size: 12px;
        color: #666;
        text-align: center;
    }

    .ul-li ul li img {
        width: 100%;
        padding-bottom: 10px;
    }

</style>