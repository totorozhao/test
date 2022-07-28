<template>
  <el-button
    type="primary"
    @click="goPage('/route/info')"
    >新增</el-button
  >
</template>
<script>
export default {
  methods: {
    goPage (path) {
      this.$router.push({ path, query: { id: 0 } })
    }
  }
}
</script>
