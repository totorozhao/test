<template>
  <el-row>
    <h4>路由 Dic RouteInfo</h4>
    <div>
      <el-button type="primary">保存</el-button>
      <el-button @click="goback">返回</el-button>
    </div>
  </el-row>
</template>
<script>
export default {
  methods: {
    goback () {
      this.$router.go(-1)
    }
  }
}
</script>
