(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{143:function(t,e,i){var r=i(148);"string"==typeof r&&(r=[[t.i,r,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};i(2)(r,s);r.locals&&(t.exports=r.locals)},147:function(t,e,i){"use strict";var r=i(143);i.n(r).a},148:function(t,e,i){(t.exports=i(1)(!1)).push([t.i,"#frind-list{width:100%;height:100%;background:#fff}#frind-list ul{clear:both}.user-item{height:60px;width:100%;position:relative}.avatar{width:35px;height:35px;border-radius:20px;margin:15px 10px 0 15px;float:left;overflow:hidden;border:1px solid #ccc;box-sizing:border-box;position:relative}.avatar img{width:100%;height:100%}.info{float:left;margin-top:10px;width:calc(100% - 60px)}.nickname{font-size:18px}.feeling{font-size:12px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;color:#aaa;padding-right:20px}.roll{font-size:16px;text-indent:10px;background-color:#4a596b;padding:10px 0;color:#ccc}\n",""])},152:function(t,e,i){"use strict";i.r(e);var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"frind-list"}},[t.friendsInfo?[i("div",{staticClass:"roll"},[t._v("我的好友")]),t._v(" "),i("ul",{staticClass:"friend"},t._l(t.friendsInfo,(function(e){return i("li",{key:e.user,staticClass:"user-item",on:{click:function(i){return t.clickUser(e.user)}}},[i("span",{staticClass:"avatar"},[i("img",{attrs:{src:t._f("renderImgPath")(e.avatar),alt:""}})]),t._v(" "),i("div",{staticClass:"info"},[i("div",{staticClass:"nickname"},[t._v(t._s(e.nickname))]),t._v(" "),i("div",{staticClass:"feeling"},[i("span",[t._v("["+t._s(t.userList&&t.userList[e.user]?"当前在线":"离线")+"] ")]),t._v(t._s(e.declaration))])])])})),0),t._v(" "),i("div",{staticClass:"roll"},[t._v("我的群")]),t._v(" "),i("ul",{staticClass:"group"},t._l(t.groupsInfoList,(function(e){return i("li",{key:e.id,staticClass:"user-item",on:{click:function(i){return t.clickGroup(e)}}},[i("span",{staticClass:"avatar"}),t._v(" "),i("div",{staticClass:"info"},[i("div",{staticClass:"nickname"},[t._v(t._s(e.name)+t._s(e.id))]),t._v(" "),i("div",{staticClass:"feeling"})])])})),0)]:i("div",[t._v("\n    暂无好友\n  ")])],2)};r._withStripped=!0;var s=i(38),n=i(6);function o(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,r)}return i}function a(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var c={name:"friends-list",mixins:[s.a],created(){console.log("userlist",this.userList)},computed:function(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?o(Object(i),!0).forEach((function(e){a(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}({},Object(n.b)(["userList","friendsInfo","groupsInfoList","unreadMsgCount"])),methods:{clickUser(t){let e=this.userList[t];this.$store.commit("switchChatBox",{type:"single"}),this.$store.commit("setCurrentFriend",{id:e,user:t}),this.$store.commit("setUnreadCount",{type:"single",key:t,count:0})},clickGroup(t){this.$store.commit("switchChatBox",{type:"group"}),this.$store.commit("setCurrentGroup",t)}}},l=(i(147),i(0)),u=Object(l.a)(c,r,[],!1,null,null,null);u.options.__file="src/page/friends/friendList.vue";e.default=u.exports}}]);