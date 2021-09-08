<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="account"
      :search="search"
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
      <template v-slot:top>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          class="mx-4"
          single-line
          hide-details
        ></v-text-field>
      </template>
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
      <template v-slot:item.accountType="props">
        <v-edit-dialog
          :return-value.sync="props.item.accountType"
          large
          persistent
          @save="save"
          @cancel="cancel"
          @open="open"
          @close="close"
        >
          <div>{{ props.item.accountType }}</div>
          <template v-slot:input>
            <div class="mt-4 title">帳戶屬性</div>
            <v-select
              v-model="props.item.accountType"
              :value="props.item.accountType"
              item-text="text"
              item-value="text"
              label="帳戶屬性"
              :items="acctype"
              single-line
              counter
              autofocus
              dense
            ></v-select>
          </template>
        </v-edit-dialog>
      </template>
      <template v-slot:item.accountRepersent="props">
        <v-edit-dialog
          :return-value.sync="props.item.accountRepersent"
          large
          @save="save"
          @cancel="cancel"
          @open="open"
          @close="close"
        >
          <div>{{ props.item.accountRepersent }}</div>
          <template v-slot:input>
            <div class="mt-4 title">行庫代號</div>
            <v-select
              v-model="props.item.accountRepersent"
              :value="props.item.accountRepersent"
              item-text="text"
              item-value="text"
              label="行庫代號"
              :items="branchNumbers"
              single-line
              counter
              autofocus
              dense
            ></v-select>
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
      search: "",
      max25chars: (v) => v.length <= 25 || "Input too long!",
      pagination: {},
      acctype: [],
      branchNumbers: [],
      headers: [
        {
          text: "index",
          align: "start",
          // sortable: false,
          value: "index",
        },
        { text: "帳戶屬性", value: "accountType" },
        { text: "帳戶簡稱", value: "accountAbbrev" },
        { text: "銀行帳號", value: "accountAcc" },
        { text: "行庫代號", value: "accountRepersent" },
        { text: "分行代碼", value: "accountBranch" },
        { text: "開戶名稱", value: "accountName" },
        { text: "註記", value: "accountMoment" },
        { text: "資金項目", value: "FundFrom" },
        { text: "借貸", value: "LoanOrNot" },
        { text: "帳戶餘額", value: "FundBalance" },
        { text: "異動紀錄", value: "ModifiedDate" },
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
    this.account = this.$apis.GetAccount();
    this.acctype = this.$apis.GetAccType();
    this.branchNumbers = this.$apis.GetBranchNumber();
  },
};
</script>
