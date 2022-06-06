<template>
  <div>
    <router-link to="/">Go to Home</router-link> |
    <router-link to="/two">Go to About</router-link>
     <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  created() {},
};
</script>

<style lang="scss"></style>
