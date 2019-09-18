<template>
  <ion-grid>
    <ion-row>
      <ion-col size="12">
        <ion-item lines="full">
          <ion-label position="stacked">Total Tips Amount</ion-label>
          <ion-input :value="total" @input="total = $event.target.value" @change="setTotalValue"></ion-input>
        </ion-item>
      </ion-col>
    </ion-row>
  </ion-grid>
</template>

<script>
export default {
  name: "TotalTipsInput",
  data() {
    return {
      total: 0
    };
  },
  methods: {
    setTotalValue() {
      console.log(typeof this.total);
      this.$emit("setTotalValue", this.total);
    }
  }
};
</script>