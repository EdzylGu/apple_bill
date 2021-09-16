<template>
  <div class="container">
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
              <el-input-number
                v-model="shopping_cart[0]"
                @change="Count"
                controls-position="right"
                :min="0"
              ></el-input-number>
            </div>
            <div>
              <p>{{ storage_capacity[1] }}</p>
              <el-input-number
                v-model="shopping_cart[1]"
                @change="Count"
                controls-position="right"
                :min="0"
              ></el-input-number>
            </div>
            <div>
              <p>{{ storage_capacity[2] }}</p>
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
              <el-input-number
                v-model="shopping_cart[3]"
                @change="Count"
                controls-position="right"
                :min="0"
              ></el-input-number>
            </div>
            <div>
              <p>{{ storage_capacity[1] }}</p>
              <el-input-number
                v-model="shopping_cart[4]"
                @change="Count"
                controls-position="right"
                :min="0"
              ></el-input-number>
            </div>
            <div>
              <p>{{ storage_capacity[2] }}</p>
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
              <el-input-number
                v-model="shopping_cart[6]"
                @change="Count"
                controls-position="right"
                :min="0"
              ></el-input-number>
            </div>
            <div>
              <p>{{ storage_capacity[1] }}</p>
              <el-input-number
                v-model="shopping_cart[7]"
                @change="Count"
                controls-position="right"
                :min="0"
              ></el-input-number>
            </div>
            <div>
              <p>{{ storage_capacity[2] }}</p>
              <el-input-number
                v-model="shopping_cart[8]"
                @change="Count"
                controls-position="right"
                :min="0"
              ></el-input-number>
            </div>
            <div>
              <p>{{ storage_capacity[3] }}</p>
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
              <el-input-number
                v-model="shopping_cart[10]"
                @change="Count"
                controls-position="right"
                :min="0"
              ></el-input-number>
            </div>
            <div>
              <p>{{ storage_capacity[1] }}</p>
              <el-input-number
                v-model="shopping_cart[11]"
                @change="Count"
                controls-position="right"
                :min="0"
              ></el-input-number>
            </div>
            <div>
              <p>{{ storage_capacity[2] }}</p>
              <el-input-number
                v-model="shopping_cart[12]"
                @change="Count"
                controls-position="right"
                :min="0"
              ></el-input-number>
            </div>
            <div>
              <p>{{ storage_capacity[3] }}</p>
              <el-input-number
                v-model="shopping_cart[13]"
                @change="Count"
                controls-position="right"
                :min="0"
              ></el-input-number>
            </div>
          </el-row>
        </el-card>
        <el-collapse v-model="activeNames">
          <el-collapse-item title="舊機種" name="1">
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
                  <el-input-number
                    v-model="shopping_cart[14]"
                    @change="Count"
                    controls-position="right"
                    :min="0"
                  ></el-input-number>
                </div>
                <div>
                  <p>{{ storage_capacity[0] }}</p>
                  <el-input-number
                    v-model="shopping_cart[15]"
                    @change="Count"
                    controls-position="right"
                    :min="0"
                  ></el-input-number>
                </div>
                <div>
                  <p>{{ storage_capacity[1] }}</p>
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
                  <el-input-number
                    v-model="shopping_cart[17]"
                    @change="Count"
                    controls-position="right"
                    :min="0"
                  ></el-input-number>
                </div>
                <div>
                  <p>{{ storage_capacity[0] }}</p>
                  <el-input-number
                    v-model="shopping_cart[18]"
                    @change="Count"
                    controls-position="right"
                    :min="0"
                  ></el-input-number>
                </div>
                <div>
                  <p>{{ storage_capacity[1] }}</p>
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
                  <el-input-number
                    v-model="shopping_cart[20]"
                    @change="Count"
                    controls-position="right"
                    :min="0"
                  ></el-input-number>
                </div>
                <div>
                  <p>{{ storage_capacity[0] }}</p>
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
                  <el-input-number
                    v-model="shopping_cart[22]"
                    @change="Count"
                    controls-position="right"
                    :min="0"
                  ></el-input-number>
                </div>
                <div>
                  <p>{{ storage_capacity[0] }}</p>
                  <el-input-number
                    v-model="shopping_cart[23]"
                    @change="Count"
                    controls-position="right"
                    :min="0"
                  ></el-input-number>
                </div>
              </el-row>
            </el-card>
          </el-collapse-item>
        </el-collapse>
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
              <el-input-number
                v-model="shopping_cart[24]"
                @change="Count"
                controls-position="right"
                :min="0"
              ></el-input-number>
            </div>
            <div>
              <p>{{ storage_capacity[1] }}</p>
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
              <el-input-number
                v-model="shopping_cart[26]"
                @change="Count"
                controls-position="right"
                :min="0"
              ></el-input-number>
            </div>
            <div>
              <p>{{ storage_capacity[6] }}</p>
              <el-input-number
                v-model="shopping_cart[27]"
                @change="Count"
                controls-position="right"
                :min="0"
              ></el-input-number>
            </div>
          </el-row>
        </el-card>

        <h5>NTD:{{ total_price }}</h5>
        <el-button icon="el-icon-delete" v-on:click="Clear"></el-button>
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
        0,0,0
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
        19400,3090,4190
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
    },
    Clear() {
      this.total_price = 0;
      for (let index = 0; index < this.shopping_cart.length; index++) {
        this.shopping_cart[index] = 0;
      }
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
</style>
