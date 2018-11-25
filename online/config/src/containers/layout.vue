<template lang="html">
  <div class="index-wrap">
    <div class="index-left">
      <div class="index-left-block">
        <h2>全部产品</h2>
        <div v-for="(product,index) in productList" :key="index">
          <h3>{{ product.title }}</h3>
          <ul>
            <li v-for="(item,index) in product.list" :key="index">
              <a href="#">{{ item.text }}</a>
              <span class="hot-tag" v-if="item.hot">HOT</span>
            </li>
          </ul>
          <div :class='{"hr":index == 0}'></div>
        </div>
      </div>
      <div class="index-left-block">
        <h2>全部列表</h2>
        <ul>
          <li v-for="(item,index) in leftMenu" :key="index">
            <a href="http://www.wwtliu.com">{{ item.title }}</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="index-right">
      <div class="swiper-size">
        <swiper :options="swiperOption">
          <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
            <img class="swiperimg" :src="slide" alt="">
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
      <div class="index-board-list">
        <div
          class="index-board-item"
          v-for="(item,index) in indexBoard"
          :key="index"
          :class="['index-board-'+item.flag,{'line-last':index%2 !== 0}]"
        >
          <div class="index-board-item-inner">
            <h2>{{ item.title }}</h2>
            <p>{{ item.desc }}</p>
            <div class="index-board-button">
              <router-link :to="'/details/'+ item.flag " class="button">立即购买</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name:"Layout",
  data(){
    return{
      indexBoard:[
        {
          title:"开放产品",
          desc:"开放产品是一款开放产品",
          flag:"openproduct"
        },
        {
          title:"品牌营销",
          desc:"品牌营销帮助你的产品更好地找到定位",
          flag:"logo"
        },
        {
          title:"使命必达",
          desc:"使命必达快速迭代永远保持最前端的速度",
          flag:"golife"
        },
        {
          title:"勇攀高峰",
          desc:"帮你勇闯高峰，到达事业的顶峰",
          flag:"heigh"
        }
      ],
      swiperSlides:[
        require("../assets/slideShow/j1.jpg"),
        require("../assets/slideShow/j2.jpg"),
        require("../assets/slideShow/j3.jpg"),
        require("../assets/slideShow/j4.jpg")
      ],
      // 轮播图配置
      swiperOption:{
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
        },
        autoplay:true,
        loop:true
      },
      // 左菜单数据
      productList:[
        {
          title:"手机应用类",
          list:[
            {
              text:"91助手",
              value:0,
              hot:true
            },
            {
              text:"豌豆荚",
              value:1,
              hot:false
            },
            {
              text:"金山毒霸",
              value:2,
              hot:false
            }
          ]
        },
        {
          title:"pc产品",
          list:[
            {
              text:"webstorm",
              value:0,
              hot:false
            },
            {
              text:"sublime",
              value:1,
              hot:true
            },
            {
              text:"hbuild",
              value:2,
              hot:false
            },
            {
              text:"atom",
              value:3,
              hot:false
            }
          ]
        }
      ],
      leftMenu:[]
    }
  },
  components:{
    swiper,
    swiperSlide
  },
  mounted(){
    this.$axios.get("http://wwtliu.com/sxtstu/blueberrypai/getChengpinInfo.php")
        .then(res => {
          this.leftMenu = res.data.chengpinInfo
        })
        .catch(error => {
          console.log(error);
        })
  }
}
</script>

<style lang="css" scoped>

.index-wrap {
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
}
.index-left {
  float: left;
  width: 300px;
  text-align: left;
}
.index-right {
  float: left;
  width: 900px;
}
.index-left-block {
  margin: 15px;
  background: #fff;
  box-shadow: 0 0 1px #ddd;
}
.index-left-block .hr {
  margin-bottom: 20px;
  height: 1px;
  width: 100%;
  background: #ddd;
}
.index-left-block h2 {
  background: #4fc08d;
  color: #fff;
  padding: 10px 15px;
  margin-bottom: 20px;
}
.index-left-block h3 {
  padding: 0 15px 5px 15px;
  font-weight: bold;
  color: #222;
}
.index-left-block ul {
  padding: 10px 15px;
}
.index-left-block li {
  padding: 5px;
}
.index-board-list {
  overflow: hidden;
  margin-top: 15px;
}
.index-board-item {
  float: left;
  width: 400px;
  background: #fff;
  box-shadow: 0 0 1px #ddd;
  padding: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
}
.index-board-item-inner {
  min-height: 125px;
  padding-left: 120px;
}
.index-board-openproduct .index-board-item-inner{
  background: url(../assets/images/1.png) no-repeat;
}
.index-board-logo .index-board-item-inner{
  background: url(../assets/images/2.png) no-repeat;
}
.index-board-golife .index-board-item-inner{
  background: url(../assets/images/3.png) no-repeat;
}
.index-board-heigh .index-board-item-inner{
  background: url(../assets/images/4.png) no-repeat;
}
.index-board-item h2 {
  font-size: 18px;
  font-weight: bold;
  color: #000;
  margin-bottom: 15px;
}
.line-last {
  margin-right: 0;
}
.index-board-button {
  margin-top: 20px;
}
.lastest-news {
  min-height: 350px;
}
.hot-tag {
  background: red;
  color: #fff;
}
.new-item {
  display: inline-block;
  width: 230px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.swiperimg{
	width: 100%;
  height: 350px;
}

.swiper-size{
	margin-top: 15px;
}

.button{
	background: #4fc08d;
	color: #fff;
    display: inline-block;
    padding: 10px 20px;
    cursor: pointer;
}


</style>
