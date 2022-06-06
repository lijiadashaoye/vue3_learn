<template>
  <div>
    1
    <com v-model.capitalize="searchText" :user="user" />
    <button @click="ffff">asdf</button>
    <slotC :slotName="slotName">
      <template v-slot="{ ff }">{{ ff }}</template>
      <template #[slotName]="{ ff2 }">{{ ff2 }}</template>
    </slotC>
    <div></div>
  </div>
</template>
<script>
import slotC from "@/components/slotC.vue";
import { defineAsyncComponent } from "vue";
import { provide, reactive, ref } from "vue";

export default {
  components: {
    com: defineAsyncComponent(() => import("@/components/com.vue")),
    slotC,
  },
  data() {
    return {
      searchText: "",
      slotName: "isName",
      num: 1,
      user: "55",
    };
  },
  setup() {},
  created() {},
  mounted() {},
  methods: {
    ffff() {
      this.num++;
    },
  },
};
</script>

<style lang="scss"></style>
