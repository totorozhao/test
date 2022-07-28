<template>
  <div class="about">
    <h1>This is an vue2 about page</h1>
  </div>
</template>
<script>
export default {
  created () {
    // TODO micro ,进行一次pushState后，主应用的router才能正常使用
    // window.history.pushState(null, '', '')
  }
}
</script>
