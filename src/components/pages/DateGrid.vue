<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="account"
      :items-per-page-options="[5, 10, 15]"
      :footer-props="{
        showFirstLastPage: true,
        firstIcon: 'mdi-arrow-collapse-left',
        lastIcon: 'mdi-arrow-collapse-right',
        prevIcon: 'mdi-minus',
        nextIcon: 'mdi-plus',
        'items-per-page-text': '每頁顯示',
      }"
    >
      <template v-slot:item.index="props">
        <v-edit-dialog
          :return-value.sync="props.item.index"
          large
          persistent
          @save="save"
          @cancel="cancel"
          @open="open"
          @close="close"
        >
          <div>{{ props.item.index }}</div>
          <template v-slot:input>
            <div class="mt-4 title">Update Iron</div>
            <v-text-field
              v-model="props.item.index"
              :rules="[max25chars]"
              label="Edit"
              single-line
              counter
              autofocus
            ></v-text-field>
          </template>
        </v-edit-dialog>
      </template>
    </v-data-table>

    <v-snackbar v-model="snack" :timeout="3000" :color="snackColor">
      {{ snackText }}

      <template v-slot:action="{ attrs }">
        <v-btn v-bind="attrs" text @click="snack = false"> Close </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      snack: false,
      snackColor: "",
      snackText: "",
      max25chars: (v) => v.length <= 25 || "Input too long!",
      pagination: {},
      headers: [
        {
          text: "index",
          align: "start",
          // sortable: false,
          value: "index",
        },
        { text: "帳戶屬性", value: "帳戶屬性" },
        { text: "帳戶簡稱", value: "帳戶簡稱" },
        { text: "銀行帳號", value: "銀行帳號" },
        { text: "行庫代號", value: "行庫代號" },
        { text: "分行代碼", value: "分行代碼" },
        { text: "開戶名稱", value: "開戶名稱" },
        { text: "註記", value: "註記" },
        { text: "資金項目", value: "資金項目" },
        { text: "借貸", value: "借貸" },
        { text: "帳戶餘額", value: "帳戶餘額" },
        { text: "異動紀錄", value: "異動紀錄" },
      ],

      account: [],
    };
  },
  methods: {
    save() {
      this.snack = true;
      this.snackColor = "success";
      this.snackText = "Data saved";
    },
    cancel() {
      this.snack = true;
      this.snackColor = "error";
      this.snackText = "Canceled";
    },
    open() {
      this.snack = true;
      this.snackColor = "info";
      this.snackText = "Dialog opened";
    },
    close() {
      console.log("Dialog closed");
    },
  },
  mounted() {
    this.account = this.$GetAccount();
  },
};
</script>
