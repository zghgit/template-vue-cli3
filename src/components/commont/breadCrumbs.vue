<template>
    <div class="breadcrumb">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <!--<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>-->
            <!-- 路由生成菜单-->
            <el-breadcrumb-item
                v-for="(item, index) in breadcrumbList"
                :to="{path:item.router}"
                :key="index">
                {{item.label}}
            </el-breadcrumb-item>

        </el-breadcrumb>
        <div class="widget">
            <i class="el-icon-star-on"></i>
            <span>工具</span>
            <i class="el-icon-arrow-down"></i>
        </div>
    </div>
</template>
<script>
export default {
  props: ["breadcrumbList"],
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="less" scoped>
.breadcrumb {
  color: red;
}
</style>
