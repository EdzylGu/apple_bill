<template>
  <div class="container">
    <div>
      <b-jumbotron
        style="background-color:#F0E5CF;color:#4B6587"
        header="How much does it cost to buy THESE Apple products?"
        lead="幫您計算即將花多少錢在蘋果產品上"
      >
        <p>Power by Edzyl</p>
        <el-button
          round
          onclick="location.href='https://linktr.ee/edzyl'"
          style="background-color:#4B6587;color:#fff"
          >More Info</el-button
        >
      </b-jumbotron>
    </div>
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="24">
        <el-card shadow="hover">
          <p>{{ model[0] }}</p>
          <el-row
            type="flex"
            class="row-bg"
            justify="center"
            style="flex-wrap: wrap"
          >
            <div>
              <p>{{ storage_capacity[0] }}</p>
              <el-tag effect="plain"
                ><i class="el-icon-price-tag"></i>{{ price[0] }}</el-tag
              ><br /><br />
              <el-input-number
                v-model="shopping_cart[0]"
                @change="Count"
                controls-position="right"
                :min="0"
              ></el-input-number>
            </div>
            <div>
              <p>{{ storage_capacity[1] }}</p>
              <el-tag effect="plain"
                ><i class="el-icon-price-tag"></i>{{ price[1] }}</el-tag
              ><br /><br />

              <el-input-number
                v-model="shopping_cart[1]"
                @change="Count"
                controls-position="right"
                :min="0"
              ></el-input-number>
            </div>
            <div>
              <p>{{ storage_capacity[2] }}</p>
              <el-tag effect="plain"
                ><i class="el-icon-price-tag"></i>{{ price[2] }}</el-tag
              ><br /><br />
              <el-input-number
                v-model="shopping_cart[2]"
                @change="Count"
                controls-position="right"
                :min="0"
              ></el-input-number>
            </div>
          </el-row>
        </el-card>

        <el-card shadow="hover">
          <p>{{ model[1] }}</p>
          <el-row
            type="flex"
            class="row-bg"
            justify="center"
            style="flex-wrap: wrap"
          >
            <div>
              <p>{{ storage_capacity[0] }}</p>
              <el-tag effect="plain"
                ><i class="el-icon-price-tag"></i>{{ price[3] }}</el-tag
              ><br /><br />

              <el-input-number
                v-model="shopping_cart[3]"
                @change="Count"
                controls-position="right"
                :min="0"
              ></el-input-number>
            </div>
            <div>
              <p>{{ storage_capacity[1] }}</p>
              <el-tag effect="plain"
                ><i class="el-icon-price-tag"></i>{{ price[4] }}</el-tag
              ><br /><br />

              <el-input-number
                v-model="shopping_cart[4]"
                @change="Count"
                controls-position="right"
                :min="0"
              ></el-input-number>
            </div>
            <div>
              <p>{{ storage_capacity[2] }}</p>
              <el-tag effect="plain"
                ><i class="el-icon-price-tag"></i>{{ price[5] }}</el-tag
              ><br /><br />

              <el-input-number
                v-model="shopping_cart[5]"
                @change="Count"
                controls-position="right"
                :min="0"
              ></el-input-number>
            </div>
          </el-row>
        </el-card>

        <el-card shadow="hover">
          <p>{{ model[2] }}</p>
          <el-row
            type="flex"
            class="row-bg"
            justify="center"
            style="flex-wrap: wrap"
          >
            <div>
              <p>{{ storage_capacity[0] }}</p>
              <el-tag effect="plain"
                ><i class="el-icon-price-tag"></i>{{ price[6] }}</el-tag
              ><br /><br />

              <el-input-number
                v-model="shopping_cart[6]"
                @change="Count"
                controls-position="right"
                :min="0"
              ></el-input-number>
            </div>
            <div>
              <p>{{ storage_capacity[1] }}</p>
              <el-tag effect="plain"
                ><i class="el-icon-price-tag"></i>{{ price[7] }}</el-tag
              ><br /><br />

              <el-input-number
                v-model="shopping_cart[7]"
                @change="Count"
                controls-position="right"
                :min="0"
              ></el-input-number>
            </div>
            <div>
              <p>{{ storage_capacity[2] }}</p>
              <el-tag effect="plain"
                ><i class="el-icon-price-tag"></i>{{ price[8] }}</el-tag
              ><br /><br />

              <el-input-number
                v-model="shopping_cart[8]"
                @change="Count"
                controls-position="right"
                :min="0"
              ></el-input-number>
            </div>
            <div>
              <p>{{ storage_capacity[3] }}</p>
              <el-tag effect="plain"
                ><i class="el-icon-price-tag"></i>{{ price[9] }}</el-tag
              ><br /><br />

              <el-input-number
                v-model="shopping_cart[9]"
                @change="Count"
                controls-position="right"
                :min="0"
              ></el-input-number>
            </div>
          </el-row>
        </el-card>

        <el-card shadow="hover">
          <p>{{ model[3] }}</p>
          <el-row
            type="flex"
            class="row-bg"
            justify="center"
            style="flex-wrap: wrap"
          >
            <div>
              <p>{{ storage_capacity[0] }}</p>
              <el-tag effect="plain"
                ><i class="el-icon-price-tag"></i>{{ price[10] }}</el-tag
              ><br /><br />

              <el-input-number
                v-model="shopping_cart[10]"
                @change="Count"
                controls-position="right"
                :min="0"
              ></el-input-number>
            </div>
            <div>
              <p>{{ storage_capacity[1] }}</p>
              <el-tag effect="plain"
                ><i class="el-icon-price-tag"></i>{{ price[11] }}</el-tag
              ><br /><br />

              <el-input-number
                v-model="shopping_cart[11]"
                @change="Count"
                controls-position="right"
                :min="0"
              ></el-input-number>
            </div>
            <div>
              <p>{{ storage_capacity[2] }}</p>
              <el-tag effect="plain"
                ><i class="el-icon-price-tag"></i>{{ price[12] }}</el-tag
              ><br /><br />

              <el-input-number
                v-model="shopping_cart[12]"
                @change="Count"
                controls-position="right"
                :min="0"
              ></el-input-number>
            </div>
            <div>
              <p>{{ storage_capacity[3] }}</p>
              <el-tag effect="plain"
                ><i class="el-icon-price-tag"></i>{{ price[13] }}</el-tag
              ><br /><br />

              <el-input-number
                v-model="shopping_cart[13]"
                @change="Count"
                controls-position="right"
                :min="0"
              ></el-input-number>
            </div>
          </el-row>
        </el-card>
        <el-card shadow="hover">
          <p>{{ model[8] }}</p>
          <el-row
            type="flex"
            class="row-bg"
            justify="center"
            style="flex-wrap: wrap"
          >
            <div>
              <p>{{ storage_capacity[4] }}</p>
              <el-tag effect="plain"
                ><i class="el-icon-price-tag"></i>{{ price[24] }}</el-tag
              ><br /><br />

              <el-input-number
                v-model="shopping_cart[24]"
                @change="Count"
                controls-position="right"
                :min="0"
              ></el-input-number>
            </div>
            <div>
              <p>{{ storage_capacity[1] }}</p>
              <el-tag effect="plain"
                ><i class="el-icon-price-tag"></i>{{ price[25] }}</el-tag
              ><br /><br />

              <el-input-number
                v-model="shopping_cart[25]"
                @change="Count"
                controls-position="right"
                :min="0"
              ></el-input-number>
            </div>
          </el-row>
        </el-card>
        <el-card shadow="hover">
          <p>{{ model[9] }}</p>
          <el-row
            type="flex"
            class="row-bg"
            justify="center"
            style="flex-wrap: wrap"
          >
            <div>
              <p>{{ storage_capacity[5] }}</p>
              <el-tag effect="plain"
                ><i class="el-icon-price-tag"></i>{{ price[26] }}</el-tag
              ><br /><br />

              <el-input-number
                v-model="shopping_cart[26]"
                @change="Count"
                controls-position="right"
                :min="0"
              ></el-input-number>
            </div>
            <div>
              <p>{{ storage_capacity[6] }}</p>
              <el-tag effect="plain"
                ><i class="el-icon-price-tag"></i>{{ price[27] }}</el-tag
              ><br /><br />

              <el-input-number
                v-model="shopping_cart[27]"
                @change="Count"
                controls-position="right"
                :min="0"
              ></el-input-number>
            </div>
          </el-row>
        </el-card>

        <div class="accordion" role="tablist">
          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button block v-b-toggle.accordion-1 variant="light"
                >查看舊機種</b-button
              >
            </b-card-header>
            <b-collapse
              id="accordion-1"
              accordion="my-accordion"
              role="tabpanel"
            >
              <b-card-body>
                <el-card shadow="hover">
                  <p>{{ model[4] }}</p>
                  <el-row
                    type="flex"
                    class="row-bg"
                    justify="center"
                    style="flex-wrap: wrap"
                  >
                    <div>
                      <p>{{ storage_capacity[4] }}</p>
                      <el-tag effect="plain"
                        ><i class="el-icon-price-tag"></i
                        >{{ price[14] }}</el-tag
                      ><br /><br />

                      <el-input-number
                        v-model="shopping_cart[14]"
                        @change="Count"
                        controls-position="right"
                        :min="0"
                      ></el-input-number>
                    </div>
                    <div>
                      <p>{{ storage_capacity[0] }}</p>
                      <el-tag effect="plain"
                        ><i class="el-icon-price-tag"></i
                        >{{ price[15] }}</el-tag
                      ><br /><br />

                      <el-input-number
                        v-model="shopping_cart[15]"
                        @change="Count"
                        controls-position="right"
                        :min="0"
                      ></el-input-number>
                    </div>
                    <div>
                      <p>{{ storage_capacity[1] }}</p>
                      <el-tag effect="plain"
                        ><i class="el-icon-price-tag"></i
                        >{{ price[16] }}</el-tag
                      ><br /><br />

                      <el-input-number
                        v-model="shopping_cart[16]"
                        @change="Count"
                        controls-position="right"
                        :min="0"
                      ></el-input-number>
                    </div>
                  </el-row>
                </el-card>
                <el-card shadow="hover">
                  <p>{{ model[5] }}</p>
                  <el-row
                    type="flex"
                    class="row-bg"
                    justify="center"
                    style="flex-wrap: wrap"
                  >
                    <div>
                      <p>{{ storage_capacity[4] }}</p>
                      <el-tag effect="plain"
                        ><i class="el-icon-price-tag"></i
                        >{{ price[17] }}</el-tag
                      ><br /><br />

                      <el-input-number
                        v-model="shopping_cart[17]"
                        @change="Count"
                        controls-position="right"
                        :min="0"
                      ></el-input-number>
                    </div>
                    <div>
                      <p>{{ storage_capacity[0] }}</p>
                      <el-tag effect="plain"
                        ><i class="el-icon-price-tag"></i
                        >{{ price[18] }}</el-tag
                      ><br /><br />

                      <el-input-number
                        v-model="shopping_cart[18]"
                        @change="Count"
                        controls-position="right"
                        :min="0"
                      ></el-input-number>
                    </div>
                    <div>
                      <p>{{ storage_capacity[1] }}</p>
                      <el-tag effect="plain"
                        ><i class="el-icon-price-tag"></i
                        >{{ price[19] }}</el-tag
                      ><br /><br />

                      <el-input-number
                        v-model="shopping_cart[19]"
                        @change="Count"
                        controls-position="right"
                        :min="0"
                      ></el-input-number>
                    </div>
                  </el-row>
                </el-card>
                <el-card shadow="hover">
                  <p>{{ model[6] }}</p>
                  <el-row
                    type="flex"
                    class="row-bg"
                    justify="center"
                    style="flex-wrap: wrap"
                  >
                    <div>
                      <p>{{ storage_capacity[4] }}</p>
                      <el-tag effect="plain"
                        ><i class="el-icon-price-tag"></i
                        >{{ price[20] }}</el-tag
                      ><br /><br />

                      <el-input-number
                        v-model="shopping_cart[20]"
                        @change="Count"
                        controls-position="right"
                        :min="0"
                      ></el-input-number>
                    </div>
                    <div>
                      <p>{{ storage_capacity[0] }}</p>
                      <el-tag effect="plain"
                        ><i class="el-icon-price-tag"></i
                        >{{ price[21] }}</el-tag
                      ><br /><br />

                      <el-input-number
                        v-model="shopping_cart[21]"
                        @change="Count"
                        controls-position="right"
                        :min="0"
                      ></el-input-number>
                    </div>
                  </el-row>
                </el-card>
                <el-card shadow="hover">
                  <p>{{ model[7] }}</p>
                  <el-row
                    type="flex"
                    class="row-bg"
                    justify="center"
                    style="flex-wrap: wrap"
                  >
                    <div>
                      <p>{{ storage_capacity[4] }}</p>
                      <el-tag effect="plain"
                        ><i class="el-icon-price-tag"></i
                        >{{ price[22] }}</el-tag
                      ><br /><br />

                      <el-input-number
                        v-model="shopping_cart[22]"
                        @change="Count"
                        controls-position="right"
                        :min="0"
                      ></el-input-number>
                    </div>
                    <div>
                      <p>{{ storage_capacity[0] }}</p>
                      <el-tag effect="plain"
                        ><i class="el-icon-price-tag"></i
                        >{{ price[23] }}</el-tag
                      ><br /><br />

                      <el-input-number
                        v-model="shopping_cart[23]"
                        @change="Count"
                        controls-position="right"
                        :min="0"
                      ></el-input-number>
                    </div>
                  </el-row>
                </el-card>
              </b-card-body>
            </b-collapse>
          </b-card>
        </div>
        <b-card header="總金額" class="text-center">
          <b-card-text
            ><h5>NTD: {{ total_price }}</h5>
          </b-card-text>
          <el-button icon="el-icon-delete" v-on:click="Clear"></el-button>
        </b-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      model: [
        "iPhone 13 Mini",
        "iPhone 13",
        "iPhone 13 Pro",
        "iPhone 13 Pro Max",
        "iPhone 12 Mini",
        "iPhone 12",
        "iPhone SE",
        "iPhone 11",
        "iPad Mini",
        "Apple Pencil",
      ],
      storage_capacity: ["128GB", "256GB", "512GB", "1TB", "64GB", "I", "II"],
      shopping_cart: [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
      ],
      price: [
        22900,
        26400,
        33400,
        25900,
        29400,
        36400,
        32900,
        36400,
        43400,
        50400,
        36900,
        40400,
        47400,
        54400,
        19900,
        21500,
        25000,
        22900,
        24500,
        28000,
        13500,
        15100,
        16500,
        18100,
        14900,
        19400,
        3090,
        4190,
      ],
      total_price: 0,
    };
  },
  methods: {
    Count() {
      this.total_price = 0;
      for (let index = 0; index < this.shopping_cart.length; index++) {
        this.total_price =
          this.total_price + this.shopping_cart[index] * this.price[index];
      }
      this.total_price = this.PriceFormat(this.total_price, 2);
    },
    Clear() {
      this.total_price = 0;
      for (let index = 0; index < this.shopping_cart.length; index++) {
        this.shopping_cart[index] = 0;
      }
    },
    PriceFormat(price, n, x) {
      var re = "\\d(?=(\\d{" + (x || 3) + "})+" + (n > 0 ? "\\." : "$") + ")";
      return price
        .toFixed(Math.max(0, ~~n))
        .replace(new RegExp(re, "g"), "$&,");
    },
  },
};
</script>

<style lang="scss">
html {
  background-color: RGBA(93, 172, 129, 0.1);
}

.contain {
  background-color: RGBA(93, 172, 129, 0.1);
  margin-top: 30px;
}

.row .col-4 {
  padding: 0px;
}
.el-card {
  background-color: #fff;
}
.card-header {
  background-color: #4b6587;
  color: #fff;
}
</style>
