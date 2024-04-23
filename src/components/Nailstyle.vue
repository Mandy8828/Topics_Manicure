<template>
  <div>
    <div class="frame">
      <div class="left" @click="goToHomepage"></div>
      <div class="right">
        <div class="item">
          <router-link to="/Nailstyle-0">美甲款式</router-link>
        </div>
        <div class="item">
          <router-link to="/Storeguide">店家導覽</router-link>
        </div>
        <div class="item">
          <router-link to="/Appointmentform">預約表單</router-link>
        </div>
        <div class="item">
          <router-link to="/mproblem">常見問題</router-link>
        </div>
      </div>
      <div class="right1">
        <button class="item-right1">
          <router-link to="/member">登入 / 註冊</router-link>
        </button>
      </div>
    </div>
    <div class="title">
      <div class="text">美甲款式</div>
    </div>
    <div class="middle">
      <div class="side">
        <ul>
          熱門款式
          <li><router-link to="/Nailstyle-1">美拉德風</router-link></li>
          <li><router-link to="/Nailstyle-2">聖誕風</router-link></li>
        </ul>
        <ul>
          款式分類
          <li><router-link to="/Nailstyle-3">造型</router-link></li>
          <li><router-link to="/Nailstyle-4">單色/暈染</router-link></li>
        </ul>
      </div>
      <div class="another">
        <ul>
          <!-- 這裡的圖片和文字會動態渲染，你可以在 Vue 的 data 中設定對應的資料 -->
          <li v-for="(nail, index) in nails" :key="index">
            <img :src="nail.image" />
            <p>by {{ nail.author }}</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="footer">
      <div class="footer1">
        <div class="footer1_pic"></div>
      </div>
      <div class="footer2">
        <div>
          <p>美甲預約平台</p>
          <p>☏ 0900-000000</p>
        </div>
      </div>
      <div class="footer3">
        <div>
          <p>✉ manicure@gmail.com</p>
          <p>台中市南屯區公益路二段51號18樓</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nails: [
        {
          image: "./image/nailstyle-modeling/01-ci.nail_beauty.jpg",
          author: "ci.nail_beauty",
        },
        {
          image: "./image/nailstyle-monochrome/01-metea_.art.jpg",
          author: "metea_.art",
        },
        // ...你的其他圖片資料
      ],
    };
  },
  methods: {
    goToHomepage() {
      this.$router.push({ path: "/" });
    },
  },
};
</script>

<style scoped>
@import "@/assets/css/Homepage.css";
</style>
