<template>
  <div id="app">
    <div class="frame">
      <div class="left" @click="navigateTo('/')"></div>
      <div class="right">
        <div class="item"><a href="./Nailstyle.html">美甲款式</a></div>
        <div class="item"><a href="./Storeguide.html">店家導覽</a></div>
        <div class="item"><a href="./Appointmentform.html">預約表單</a></div>
        <div class="item"><a href="./mproblem.html">常見問題</a></div>
      </div>
      <div class="right1" id="loginContainer">
        <button
          class="item-right1"
          id="loginButton"
          @click="navigateTo('/member')"
        >
          登入 / 註冊
        </button>
      </div>
    </div>

    <div class="middle">
      <div class="bigpicture"></div>
    </div>

    <div class="middletext">
      <p>♡ 快讓美美的指甲跟妳回家 ♡</p>
    </div>

    <div class="mainmenu">
      <div class="mainmenu1" @click="navigateTo('/Nailstyle-0')">
        美 甲 款 式
      </div>
      <div class="mainmenu2" @click="navigateTo('/Storeguide')">
        店 家 導 覽
      </div>
      <div class="mainmenu3" @click="navigateTo('/Appointmentform')">
        預 約 表 單
      </div>
    </div>

    <div class="shape">美甲款式 Nail Art Introduction</div>
    <div class="shapepicture">
      <!-- Add click handlers for shape pictures -->
      <div class="shapepicture1" @click="navigateTo('/Nailstyle-1')">
        美拉德風
      </div>
      <div class="shapepicture2" @click="navigateTo('/Nailstyle-2')">
        聖誕風
      </div>
      <div class="shapepicture3" @click="navigateTo('/Nailstyle-3')">造型</div>
      <div class="shapepicture4" @click="navigateTo('/Nailstyle-4')">
        單色/暈染
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
  methods: {
    navigateTo(path) {
      this.$router.push(path);
    },
  },
};
</script>

<style scoped>
@import "@/assets/css/Homepage.css";
</style>
