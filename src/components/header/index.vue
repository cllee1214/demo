
<template>
     <div id='header' class='top-title'>
        <div v-if='isShowGoBackBtn' class='goback' @click='handleClick'><</div>
        <div class='show-title'>{{title}}</div>
    </div>
</template>

<script>
export default {
    name: 'top-header',
    props:['title'],
    data () {
        return {}
    },
    created () {},
    computed: {
      isShowGoBackBtn: function() {
          return this.title != '主页'
      },
      isChatOpen() {
        return this.$store.state.isChatOpen
      }
    },
    methods: {
        handleClick () {
          if(this.isChatOpen){
            this.$store.commit('switchChatBox')
          }else{
             this.$router.go(-1)
          }
        }
    }
}
</script>

<style lang="scss">
@import '../../assets/common.scss';
.top-title{
   text-align: center;
   height: px2rem(100);
   border-bottom: 1px solid #ccc;
   position: relative;
}
.show-title{
  font-size: 16px;
  line-height: px2rem(100);
}
.goback{
  height: 100%;
  width: px2rem(100);
  line-height:px2rem(100);
  color: #ccc;
  position: absolute;
  left: 0;
}

</style>