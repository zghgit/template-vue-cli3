<template>
    <div id="app">
        <!--角色权限-->
        <navigation-bar @isMenuEvent="isMenuEvent"></navigation-bar>
        <!--左侧菜单-->
          <demo-menu-list v-show="isMenu"></demo-menu-list>
          <!--vue视图-->
        <div v-bind:class="[!isMenu ? 'routerView' : 'viewMl']">
            <router-view></router-view>
        </div>
    </div> 
</template>

<script>
import $ from "jquery"; // eslint-disable-line
import utils from "@/utils/utils";

utils.autoRootSize();

export default {
  name: "app",
  // 父传子！
  props: {},
  components: {
    // DemoMenuList,
    BreadCrumb: () => import("@/components/commont/breadCrumbs.vue"),
    DemoMenuList: () => import("@/components/commont/menuList.vue"),
    NavigationBar: () => import("@/components/commont/nav.vue")
  },
  // 混入, 是一个类的继承，类似于一个公共的方法。
  mixins: [],
  // 存储数据
  data() {
    return {
      isMenu: false
    };
  },
  // 计算属性
  computed: {},
  watch: {},
  //    数据交互  127662
  methods: {
    // 菜单收缩
    isMenuEvent(val) {
      this.isMenu = !this.isMenu;
    }
  },

  // 在一个实例被创建之后执行代码
  created() {},
  // 初始化数据
  mounted() {},
  beforeDestroy() {}
};
</script>

<style lang="less">
// @import "./assets/style/main.less";
@import url("../src/assets/style/main");

.routerView {
  // width: calc(100% - 20px);
  margin: 76px 20px 20px 20px;
  border: 1px solid rgba(255, 255, 255, 0.0470588);
  border-radius: 6px;
  padding: 20px;
}
.viewMl {
  margin: 76px 20px 20px 220px;
  border: 1px solid rgba(255, 255, 255, 0.0470588);
  border-radius: 6px;
  padding: 20px;
}
// #app {
//   font-family: "Avenir", Helvetica, Arial, sans-serif;
//   text-align: center;
//   color: #2c3e50;
//   border: 1px solid red;
//   border-radius: 20px;
//   display: flex;
// }
</style>
