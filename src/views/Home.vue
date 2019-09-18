<template>
  <div class="ion-page">
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>TipsCalc</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding" fullscreen>
      <TotalTipsInput v-on:setTotalValue="setTotalTips($event)" />
      <InputBar v-on:addItem="addNewItem($event)" />
      <List v-bind:list="calculateTips" v-on:removeItem="removeItem($event)" />
      <ClearList v-if="list.length > 0" v-on:clearList="clearList" />
    </ion-content>
    <ion-footer>
      <ion-toolbar>
        <ion-title>&copy 2019 - tipsCalc</ion-title>
      </ion-toolbar>
    </ion-footer>
  </div>
</template>

<script>
import TotalTipsInput from "../components/TotalTipsInput/TotalTipsInput";
import InputBar from "../components/InputBar/InputBar";
import List from "../components/List/List";
import ClearList from "../components/ClearList/ClearList";

export default {
  name: "home",
  components: {
    TotalTipsInput,
    InputBar,
    List,
    ClearList
  },
  data() {
    return {
      list: [],
      totalTips: 0
    };
  },
  computed: {
    calculateTips() {
      if (this.list && this.totalTips > 0) {
        const totalTips = this.totalTips;
        const totalDays = this.list.reduce((acc, cur) => {
          return (acc += +cur.hours);
        }, 0);
        const tipPerDay = totalTips / totalDays;
        const listCalculated = this.list.map(item => {
          item.tips = (item.hours * tipPerDay).toFixed(2);
          return item;
        });
        this.list = listCalculated;
      }
      return this.list;
    }
  },
  methods: {
    addNewItem(item) {
      this.list.push(item);
    },
    setTotalTips(value) {
      return (this.totalTips = +value);
    },
    clearList() {
      this.list = [];
    },
    removeItem(name) {
      const listUpdated = this.list.filter(item => {
        return item.name !== name;
      });
      this.list = listUpdated;
    }
  }
};
</script>
