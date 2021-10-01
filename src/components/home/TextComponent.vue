<template>
  <div class="text__container">
    <div class="container__fw">
      <div class="title__section">
        <div class="sub-text">Innovation. Technology. Community.</div>
        <h2 class="title">The Developers Conference 2022</h2>
        <div class="content">
<p>As you are aware, we hosted a Virtual Developers Conference in 2020 due to the COVID-19 pandemic that hit the whole world. We are blessed that the pandemic did not have as much of an impact on the IT industry as compared to other work sectors. Due to various lockdowns, travel bans and quarantine periods, we had no choice than to postpone the annual Developers Conference from March 2021 to February 2022.</p>
<p>Being the largest IT Community in Mauritius, we are so passionate about the tech world that doing the Developers Conference is a must. With the Virtual Conference, we missed the human touch where people exchange and interact with each other. Nonetheless, your safety is our main priority and we will be putting in place some precautionary measures, following our government's recommendations, to ensure that our conference can be held safely.</p>
<p>Mark your calendar, save the dates and join us for the Developers Conference 2022 with multiple sessions over 3 whole days of technical geekery as well as various evening entertainments. Come and meet our Partners for recruitment and internship opportunities at their different booths. We have some surprises also in store for you! So, come, and let’s have some fun!</p>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.text__container {
  padding: 60px 0 100px;
  text-align: left;
  // background: url("/cloud-right.svg");
  // background-position: bottom right;
  // background-repeat: no-repeat;

  // .sub-text {
  //   text-align: center;
  // }

  // .title {
  //   text-align: center;
  //   font-size: 45px;
  // }

  .content {
    text-align: center;

    p {
      font-weight: 300;
      line-height: 32px;
      font-size: 18px;
    }
  }
}

@media (max-width: 1024px) {
  .text__container {
    padding: 60px 0 100px;
  }
}

@media (max-width: 768px) {
  .text__container {
    background-size: 200px;
  }

  .title__section {
    .sub-text {
      font-size: 16px;
    }
    .title {
      font-size: 40px;
    }
  }
}
</style>
