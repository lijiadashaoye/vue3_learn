<template>
  <div>
    user:{{ user }}
    <div>
      <input
        v-focus:[user]="11111"
        :value="modelValue"
        @input="modelValueFn($event.target.value)"
      />
    </div>
  </div>
</template>

<script>
import { inject } from "vue";
import { onMounted } from "@vue/runtime-core";
export default {
  props: {
    modelValue: String,
    modelModifiers: null,
    user: String,
  },
  // 在 setup 中你应该避免使用 this，因为它不会找到组件实例。
  // setup 的调用发生在 data property、computed property 或 methods 被解析之前
  setup(props) {
    // onMounted(ttt);
    // function ttt() {
    //   console.log(66);
    // }
  },
  emits: ["update:modelValue"],
  data() {
    return {};
  },
  mounted() {},
  watch: {
    user: {
      handler: function (t) {},
      immediate: true,
    },
  },
  created() {},
  methods: {
    modelValueFn(t) {
      this.$emit("update:modelValue", t + "99");
    },
  },
};
</script>

<style></style>
