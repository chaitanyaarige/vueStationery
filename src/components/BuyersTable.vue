<template>
  <div class="BuyersTable__main-container">
    <div class="BuyersTable__table-container">
      <div class="BuyersTable__table-heading BuyersTable__table-content-id">Serial #</div>
      <div class="BuyersTable__table-heading BuyersTable__table-heading-name">
        Name
      </div>
      <div
        class="BuyersTable__table-heading BuyersTable__table-heading-address"
      >
        Address
      </div>
      <div class="BuyersTable__table-heading BuyersTable__table-heading-city">
        City
      </div>
      <div class="BuyersTable__table-heading BuyersTable__table-heading-phone">
        Phone
      </div>
      <div
        class="BuyersTable__table-heading BuyersTable__table-heading-actions"
      >
        Edit / Delete
      </div>
    </div>

    <div
      v-for="(item, index) in dataList"
      :key="index"
      class="BuyersTable__table-container"
    >
      <div class="BuyersTable__table-content BuyersTable__table-content-id">
        {{ index+1 }}
      </div>
      <div class="BuyersTable__table-content BuyersTable__table-content-name">
        {{ item.name }}
      </div>
      <div
        class="BuyersTable__table-content BuyersTable__table-content-address"
      >
        {{ item.address }}
      </div>
      <div class="BuyersTable__table-content BuyersTable__table-content-city">
        {{ item.city }}
      </div>
      <div class="BuyersTable__table-content BuyersTable__table-content-phone">
        {{ item.phone }}
      </div>
      <div
        class="BuyersTable__table-content BuyersTable__table-content-actions"
      >
        <div
          @click="editData(item)"
          class="BuyersTable__button-container"
        >
          <div class="BuyersTable__edit-button">Edit</div>
        </div>
        <div
          @click="deleteData(item)"
        class="BuyersTable__button-container">
          <div class="BuyersTable__delete-button">Delete</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BuyersTable",

  props: ["dataList"],

  methods: {
    editData(item) {
      this.$emit("editData", item);
    },
    deleteData(item) {
      this.$emit("deleteData", item)
    }
  }
};
</script>

<style lang="scss" scoped>
@import "BuyersTable";
</style>
