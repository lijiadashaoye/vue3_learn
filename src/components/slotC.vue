<template>
  <div>
    <slot :ff="'ff'"></slot><br />
    <slot :name="slotName" :ff2="'ff2'"></slot><br />
  </div>
</template>

<script>
export default {
  props: ["slotName"],
  data() {
    return {};
  },

  created() {},
  methods: {},
};
</script>

<style></style>
