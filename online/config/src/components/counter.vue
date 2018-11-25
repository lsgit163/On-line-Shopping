<template lang="html">
  <div class="counter-component">
    <div class="counter-btn" @click="decrement"> - </div>
    <div class="counter-show">
      <input type="text" v-model="count" @input="inputHandler">
    </div>
    <div class="counter-btn" @click="increment"> + </div>
  </div>
</template>

<script>
export default {
  name:"Counter",
  data(){
    return{
      count:1
    }
  },
  props:{
    max:{
      type:[Number,String],
      default:10
    },
    min:{
      type:[Number,String],
      default:1
    }
  },
  methods:{
    decrement(event){
      if(this.count <= this.min){
        return;
      }
      this.count --
      this.$emit("countEvent",this.count)
    },
    increment(event){
      if(this.count >= this.max){
        return;
      }
      this.count ++
      this.$emit("countEvent",this.count)
    },
    inputHandler(event){
      // 判断输入类型
      var fix;
      if(typeof this.count === "string"){
        // 转化为数字类型
        fix = Number(this.count.replace(/\D/g,""));
        // Number()
      }else{
        fix = this.min;
      }
      // 最大值和最小值
      if(fix <= this.min || fix > this.max){
        fix = this.min;
      }
      this.count = fix;
      this.$emit("countEvent",this.count)
    }
  }
}
</script>

<style lang="css" scoped>


.counter-component {
  position: relative;
  display: inline-block;
  overflow: hidden;
  vertical-align: middle;
}
.counter-show {
  float: left;
}
.counter-show input {
  border: none;
  border-top: 1px solid #e3e3e3;
  border-bottom: 1px solid #e3e3e3;
  height: 23px;
  line-height: 23px;
  width: 30px;
  outline: none;
  text-indent: 4px;
}
.counter-btn {
  border: 1px solid #e3e3e3;
  float: left;
  height: 25px;
  line-height: 25px;
  width: 25px;
  text-align: center;
  cursor: pointer;
  user-select:none;
}
.counter-btn:hover {
  border-color: #4fc08d;
  background: #4fc08d;
  color: #fff;
}


</style>
