<template>
  <div id='message-list'>
    <ul v-if='userList'>
      <li class='user-item' @click="clickUser(friend.user)" v-for='friend  in friendsInfo' :key="friend.user">
        <span class='avatar'>
            <img :src="friend.avatar | renderImgPath" alt="">
        </span>
        <div class='info'>
          <div class='nickname'>{{friend.user}}</div>
          <div class='last-msg'>最后一句话</div>
        </div>
        <i class="unread-count" v-show="unreadMsgCount.single[friend.user] > 0">{{unreadMsgCount.single[friend.user]}}</i>
      </li>
    </ul>
    <div v-else>
     当前无消息
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import avatarFilter from '../../mixins/avatarFilter.js'
export default {
  name:'messages-list',
  mixins:[avatarFilter],
  created () {
   
  },
  computed: {
    ...mapState([
      'unreadMsgCount',
      'friendsInfo'
    ]),
    userList() {
      return this.$store.state.userList
    }
  },
  methods: {
   clickUser (user) {
      let id = this.userList[user]
      this.$store.commit('switchChatBox')
      this.$store.commit('setCurrentFriend', {
        id,
        user
      })
      //未读消息数量置为0
      this.$store.commit('setUnreadCount', {
        type: 'single',
        key: user,
        count: 0
      })
    }
  }
}
</script>

<style lang='scss'>
#message-list{
  width: 100%;
  height: 100%;
  background: #fff;
  ul {
    clear: both;
  }
}
.last-msg{
  font-size: 12px;
  text-overflow:ellipsis;
  white-space:nowrap;
  overflow:hidden;
  color: #aaa;
  padding-right: 20px;
}
.unread-count{
  position: absolute;
  right: 10px;
  top:10px;
  font-size: 12px;
  color: red;
  width: 15px;
  height: 15px;
  border:1px solid red;
  line-height: 15px;
  text-align: center;
  border-radius: 15px;
  font-style: normal;
}

</style>
