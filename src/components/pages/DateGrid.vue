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
        <v-container>
          <v-row>
            <v-col md="6">
              <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="搜尋"
                class="mx-4"
                single-line
                hide-details
              ></v-text-field>
            </v-col>
            <v-col offset-md="5">
              <v-btn depressed color="primary" @click="dialog = true">
                新增
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
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

    <v-dialog v-model="dialog" persistent max-width="1100">
      <v-card style="padding:10px;">
        <v-card-title>
          <v-row>
            <v-col md="6">
              <p>新增帳戶</p>
            </v-col>
            <v-col offset-md="5">
              <v-btn color="darken-1" text @click="dialog = false">
                離開
              </v-btn>
            </v-col>
          </v-row>
        </v-card-title>
        <v-form @submit.prevent="saveNew">
          <v-container>
            <v-row>
              <v-col cols="12" md="4">
                <v-select
                  v-model="model.accountType"
                  item-text="text"
                  item-value="text"
                  label="帳戶屬性"
                  :items="acctype"
                  autosize="false"
                  required
                ></v-select>
              </v-col>

              <v-col cols="12" md="4">
                <v-text-field
                  v-model="model.accountAbbrev"
                  label="帳戶簡稱"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="4">
                <v-text-field
                  v-model="model.accountAcc"
                  label="銀行帳號"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="4">
                <v-select
                  v-model="model.accountRepersent"
                  item-text="text"
                  item-value="text"
                  label="行庫代號"
                  :items="branchNumbers"
                  required
                ></v-select>
              </v-col>
              <v-col cols="12" md="4">
                <v-text-field
                  v-model="model.accountBranch"
                  label="分行代碼"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="4">
                <v-text-field
                  v-model="model.accountName"
                  label="開戶名稱"
                  required
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="4">
                <v-text-field
                  v-model="model.FundFrom"
                  label="資金科目"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="4">
                <v-text-field
                  v-model="model.LoanOrNot"
                  label="借貸"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="4">
                <v-text-field
                  v-model="model.FundBalance"
                  label="帳戶餘額"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="12">
                <v-textarea
                  v-model="model.accountMoment"
                  label="註記"
                  rows="3"
                ></v-textarea>
              </v-col>
            </v-row>
            <v-row>
              <v-col offset-md="11">
                <v-btn type="submit" color="green darken-1" text> 送出</v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </v-card>
    </v-dialog>
    <v-dialog v-model="dialog2" max-width="300">
      <v-card>
        <v-card-title>
          <span class="text-h5">{{ model.accountAbbrev }}</span>
        </v-card-title>
        <v-card-text> 新增成功</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="dialog2 = false">
            確定
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
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
      dialog: false,
      dialog2: false,
      model: {
        accountType: "",
        accountAbbrev: "",
        accountAcc: "",
        accountRepersent: "",
        accountBranch: "",
        accountName: "",
        accountMoment: "",
        FundFrom: "",
        LoanOrNot: "",
        FundBalance: "",
        ModifiedDate: "",
      },
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
    saveNew() {
      this.dialog = false;
      this.dialog2 = true;
      console.log(this.model);
    },
  },
  mounted() {
    this.account = this.$apis.GetAccount();
    this.acctype = this.$apis.GetAccType();
    this.branchNumbers = this.$apis.GetBranchNumber();
  },
};
</script>
