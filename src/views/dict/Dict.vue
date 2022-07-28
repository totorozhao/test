<template>
<div>
  <h1>dict page</h1>
  <el-button @click="$router.push({ path: '/dict/info'})">进入字典详情</el-button>
</div>
</template>
<script></script>
<script>
export default {
  methods: {
    goback() {
      this.$router.go(-1)
    }
  }
}
</script>
