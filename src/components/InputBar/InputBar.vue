<template>
  <ion-grid>
    <ion-row class="ion-justify-content-start">
      <ion-col size="8">
        <ion-item lines="full">
          <ion-label position="stacked">Name</ion-label>
          <ion-input type="text" :value="name" @input="name = $event.target.value"></ion-input>
        </ion-item>
      </ion-col>
      <ion-col size="4">
        <ion-item lines="full">
          <ion-label position="stacked">Days</ion-label>
          <ion-input type="number" :value="hours" @input="hours = $event.target.value"></ion-input>
        </ion-item>
      </ion-col>
    </ion-row>
    <ion-row class="ion-justify-content-start">
      <ion-col size="12">
        <ion-button @click="onAddItem" color="primary" expand="block">Add Colleague</ion-button>
      </ion-col>
    </ion-row>
  </ion-grid>
</template>

<script>
export default {
  name: "InputBar",
  data() {
    return {
      name: "",
      hours: ""
    };
  },
  methods: {
    onAddItem() {
      if (this.name !== "" && this.hours) {
        const item = {
          name: this.name,
          hours: this.hours,
          tips: 0
        };
        this.$emit("addItem", item);
        this.name = "";
        this.hours = 0;
      } else {
        return this.$ionic.alertController
          .create({
            header: "TipsCalc",
            subHeader: "Alert",
            message: "You must enter a valid value.",
            buttons: ["OK"]
          })
          .then(a => a.present());
      }
    }
  }
};
</script>