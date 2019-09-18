<template>
  <ion-grid>
    <ion-list>
      <ion-row v-for="item in list" :key="item.name">
        <ion-col size="12">
          <ion-item color="success" class="ion-justify-content-start" lines="none">
            <ion-col size="5">
              <ion-label>{{ item.name }}</ion-label>
            </ion-col>
            <ion-col size="3">
              <ion-label>{{ item.hours }}</ion-label>
            </ion-col>
            <ion-col size="3">
              <ion-label>{{ item.tips }}</ion-label>
            </ion-col>
            <ion-col size="1">
              <ion-icon name="close" @click="removeItem(item.name)"></ion-icon>
            </ion-col>
          </ion-item>
        </ion-col>
      </ion-row>
    </ion-list>
  </ion-grid>
</template>

<script>
export default {
  name: "List",
  props: {
    list: {
      type: Array,
      required: true
    }
  },
  methods: {
    removeItem(item) {
      this.$emit("removeItem", item);
    }
  }
};
</script>