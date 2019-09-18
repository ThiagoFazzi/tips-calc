<template>
  <button @click="calculateTips">Calculate</button>
</template>

<script>
export default {
  name: "CalculateButton",
  props: {
    list: {
      type: Array,
      required: true
    },
    TotalTipsValue: {
      type: Number,
      required: true
    }
  },
  computed: {
    calculateTips() {
      const totalHours = this.list.reduce((item, total) => {
        console.log(item);
        //total.hours += item.hours;
      });
      console.log(totalHours);
      const tipPerHours = this.TotalTipsValue / totalHours;
      console.log(+tipPerHours);
      const calculatedList = this.list.map(item => {
        item.tip = item.hours * tipPerHours;
      });

      this.$emit("calculateTipsList", calculatedList);
    }
  }
};
</script>

<style>
</style>