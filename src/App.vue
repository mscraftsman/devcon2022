<template>
  <div id="app">
    <a class="skip-link" href="#main">Skip to main</a>
    <HeaderComponent />
    <div class="main__view">
      <main id="main">
        <transition name="fade">
          <router-view />
        </transition>
      </main>
    </div>
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from "@/components/shared/HeaderComponent.vue";
import FooterComponent from "@/components/shared/FooterComponent.vue";

export default {
  metaInfo: {
    title: "Home",
    titleTemplate: "%s - Developers Conference 2022 | MSCC",
  },
  components: {
    HeaderComponent,
    FooterComponent,
  },
};
</script>

<style lang="scss">
@import "~normalize.css/normalize";

html {
  --dark: #333;
  --black: black;
  --white: #fff;
  --background: #f0f0f0;
  --diamond: #bf8bbc;
  --titanium: #4daee2;
  --platinium: #c74b47;
  --gold: #e97f29;
  --silver: #4bb484;
  --bronze: #edb164;
  --mediapartner: #ccc;
  --happyhourpartner: #ccc;
  --speaker: #ccc;
  --daycare: #ccc;
  --gutter: 40px;
  --font-bangers: "Bangers", cursive;
  --font-poppins: "Poppins", Helvetica, Arial, sans-serif;
  --font-nunito: "Nunito", Helvetica, Arial, sans-serif;
}

#app {
  font-family: var(--font-poppins);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

*,
body,
html {
  box-sizing: border-box;
}

.main__view {
  margin-top: 65px;
}

.container__fw {
  margin: 0 auto;
  max-width: 1200px;
  width: 100%;
  padding: 0 15px;
}

.container__large__fw {
  margin: 0 auto;
  max-width: 1500px;
  width: 100%;
  padding: 0 10px;
}

.title__section {
  text-align: center;

  .sub-text {
    color: var(--platinium);
    font-weight: 400;
    text-transform: uppercase;
    font-size: 18px;
  }

  .title {
    font-size: 70px;
    margin: 0;
    font-weight: 300;
    text-transform: uppercase;
    font-family: var(--font-bangers);
  }
}

.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background: #000000;
  color: white;
  padding: 8px;
  z-index: 100;
}

.skip-link:focus {
  top: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 768px) {
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
