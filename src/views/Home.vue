<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/img/usr/logo.png">
        <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->

        <el-button>ngfdskj</el-button>
        <el-button type="success">成功按钮</el-button>
        <i class="ivu-icon ivu-icon-checkmark">435</i>
         <Button>Default</Button>
        <Button type="primary">Primary</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="text">Text</Button>
        <br><br>
        <Button type="info">Info</Button>
        <Button type="success">Success</Button>
        <Button type="warning">Warning</Button>
        <Button type="error">Error</Button>

    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  }
};
</script>
