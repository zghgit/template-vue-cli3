<template>
    <div id="app" class="a">

        <!-- <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link>
        </div> -->
         <!--左侧菜单-->
        <demo-menu-list></demo-menu-list>
        <!--角色权限-->
        <!-- <extent-competence></extent-competence> -->

          <!--vue视图-->
        <div class="routerView">
            <router-view></router-view>
        </div>
    </div> 
</template>

<script>
import $ from "jquery"; // eslint-disable-line
import utils from "@/utils/utils";

utils.autoRootSize();
// import DemoMenuList from "../src/components/commont/menuList";

export default {
  name: "app",
  // 父传子！
  props: {},
  components: {
    // DemoMenuList,
    BreadCrumb: () => import("@/components/commont/breadCrumbs.vue"),
    DemoMenuList: () => import("@/components/commont/menuList.vue"),
    ExtentCompetence: () => import("@/components/commont/nav.vue")
  },
  // 混入, 是一个类的继承，类似于一个公共的方法。
  mixins: [],
  // 存储数据
  data() {
    return {};
  },
  // 计算属性
  computed: {},
  watch: {},
  //    数据交互  127662
  methods: {},

  // 在一个实例被创建之后执行代码
  created() {},
  // 初始化数据
  mounted() {},
  beforeDestroy() {}
};
</script>

<style lang="less">
@import "./assets/style/main.less";
// @import url('./assets/style/common.less');
// @import url('./assets/style/icon.less');
#app {
  width: 100%;
}
.routerView {
  /*width: calc(100% - 200px);*/
  margin: 76px 20px 20px 220px;
  border: 1px solid #f0eded;
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
