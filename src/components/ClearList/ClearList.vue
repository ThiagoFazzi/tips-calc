<template>
  <ion-grid>
    <ion-row>
      <ion-col size="12">
        <ion-button @click="clearList" expand="block">Clear List</ion-button>
      </ion-col>
    </ion-row>
  </ion-grid>
</template>

<script>
export default {
  name: "ClearList",
  methods: {
    clearList() {
      this.$emit("clearList");
    }
  }
};
</script>