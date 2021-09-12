<template>
  <v-app id="sandbox">
    <HeaderAndDrawer>
      <template v-slot:body>
        <v-main>
          <v-container fluid>
            <v-card style="margin-top: 20px">
              <v-row>
                <v-col cols="12">
                  <router-view />
                </v-col>
              </v-row>
            </v-card>
          </v-container>
        </v-main>
      </template>
    </HeaderAndDrawer>
  </v-app>
</template>

<script>
import HeaderAndDrawer from "./components/Layout/HeaderAndDrawer.vue";
export default {
  components: {
    HeaderAndDrawer,
  },
};
</script>
