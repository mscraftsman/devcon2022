<template>
  <div class="flex items-center justify-center h-screen landing-section">
    <div class="text-box">
      <div class="meta-title">
        <div class="meta-title__location">Caudan Arts Centre</div>
        <div class="meta-title__period font-black">22 - 24 November 2022</div>
      </div>
      <h1 class="title">
        Developers <span class="text-block">Conference 2022</span>
      </h1>
    </div>

    <div class="building-rotation building-landing">
      <BuildingsBottom width="100%" height="100%" />
    </div>
  </div>
</template>

<script>
import BuildingsBottom from "../../svg/earth-city.svg";
export default {
  components: {
    BuildingsBottom
  }
};
</script>

<style lang="scss" scoped>
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.landing-section {
  height: 100vh;
  overflow: hidden;
  --startColor: white;
  position: relative;
  z-index: 2;
}

.flex {
  display: flex;
}

.flex-col {
  flex-direction: column;
}

.min-h-screen {
  min-height: 100vh;
}

.snap-child {
  scroll-snap-align: start;
}

.h-screen {
  height: 100vh;
}

.justify-center {
  justify-content: center;
}

.items-center {
  align-items: center;
}

.flex {
  display: flex;
}

.building-rotation {
  /*stroke-dasharray: 500;*/
  animation: spin 111s linear infinite;
  transform-origin: center center;
}
.building-landing {
  position: absolute;
  z-index: -1;
  width: calc(100vw + 5%);
  height: calc(100vh + 5%);
}
.landing-section {
  overflow: hidden;
  --startColor: white;
  position: relative;
  z-index: 2;
  background-size: 200% auto, contain;
  background-position: center center;
  background-repeat: no-repeat, no-repeat;

  h1 {
    color: black;
    -webkit-text-stroke-width: 0px;
    -webkit-text-fill-color: currentColor;
    font-weight: bolder;
  }
}
.button-wrapper a {
  transform: skewX(-10deg);
  box-shadow: 4px 4px 0 0px #000;
}
.title {
  --landing-title-fs: calc(8vw);
  font-size: var(--landing-title-fs);
  margin: 0;
  letter-spacing: 1px;
  opacity: 1;
}
.meta-title__location {
  --landing-title-location-fs: 2vw;
  font-size: var(--landing-title-location-fs);
  font-family: var(--font-poppins);
  text-transform: uppercase;
  font-weight: 700;
  margin-bottom: 10px;
}
.meta-title__period {
  --landing-title-period-fs: 2vw;
  font-size: var(--landing-title-period-fs);
  font-family: var(--font-poppins);
  color: #e32636;
  text-transform: uppercase;
  font-weight: 700;
  margin-bottom: 10px;
}
.meta-title__sub {
  --landing-title-sub-fs: 2vw;
  font-size: var(--landing-title-sub-fs);
  color: white;
  margin: 0 auto;
  background: red;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;

  --height: 25px;
  --font-size: 14px;
  --width: 150px;
  --margin: 10px;

  height: var(--height);
  line-height: var(--height);
  font-size: var(--font-size);
  width: var(--width);
  margin-top: var(--margin);

  &:hover {
    background: #e94d4d;
    color: white;
  }
}

.register {
  background-color: #e32636;
  color: #fff;
  font-size: 2rem;
  font-family: var(--font-bangers);
  text-transform: uppercase;
  font-weight: 700;
  text-decoration: none;
  padding: 10px 50px;
  margin: 10px 0;
  display: inline-flex;
}

.register-link {
  color: #fff;
  text-decoration: none;
}

@media (max-width: 425px) {
  .postpone {
    font-size: 9px;
    margin: 4px 0;
    padding: 5px 4px;
  }
}

@media (max-width: 768px) {
  .text-block {
    transform: scale(0.95);
  }
}

@media (min-width: 425px) {
  .title {
    --landing-title-location-fs: 2vw;
  }
  .meta-title__location {
    --landing-title-location-fs: 2.1vw;
  }
  .meta-title__period {
    --landing-title-period-fs: 3.4vw;
  }
  .meta-title__sub {
    --landing-title-sub-fs: 2.7vw;
  }
}
@media (min-width: 640px) {
  .title {
    --landing-title-fs: calc(10vw - 1em);
  }
  .meta-title__location {
    --landing-title-location-fs: 2.1vw;
  }
  .meta-title__period {
    --landing-title-period-fs: 3.4vw;
  }
  .meta-title__sub {
    --landing-title-sub-fs: 2.7vw;

    --height: 50px;
    --font-size: 25px;
    --width: 150px;
    --margin: 10px;
  }
}
@media (min-width: 768px) {
  .title {
    --landing-title-fs: calc(10vw - 100%);
  }
  .meta-title__location {
    --landing-title-location-fs: 2.1vw;
  }
  .meta-title__period {
    --landing-title-period-fs: 3.4vw;
  }
  .meta-title__sub {
    --landing-title-sub-fs: 2.7vw;
  }
}
@media (min-width: 830px) {
  .title {
    --landing-title-fs: calc(9vw - 100%);
    letter-spacing: 2px;
  }
  .meta-title__location {
    --landing-title-location-fs: 2.1vw;
  }
  .meta-title__period {
    --landing-title-period-fs: 3.4vw;
  }
  .meta-title__sub {
    --landing-title-sub-fs: 2.7vw;
  }
}
@media (min-width: 930px) {
  .title {
    --landing-title-fs: calc(8vw - 100%);
  }
  .meta-title__location {
    --landing-title-location-fs: 2.1vw;
  }
  .meta-title__period {
    --landing-title-period-fs: 3.4vw;
  }
  .meta-title__sub {
    --landing-title-sub-fs: 2.7vw;
  }
}
@media (min-width: 1024px) {
  .title {
    --landing-title-fs: calc(7vw - 1em);
  }
  .meta-title__location {
    --landing-title-location-fs: 2.1vw;
  }
  .meta-title__period {
    --landing-title-period-fs: 3.4vw;
  }
  .meta-title__sub {
    --landing-title-sub-fs: 2.7vw;

    --height: 50px;
    --font-size: 25px;
    --width: 310px;
    --margin: 15px;
  }
}
@media (min-width: 1000px) {
  .title {
    --landing-title-fs: calc(7vw - 1em);
  }
  .meta-title__location {
    --landing-title-location-fs: 1.6vw;
  }
  .meta-title__period {
    --landing-title-period-fs: 2.8vw;
  }
  .meta-title__sub {
    --landing-title-sub-fs: 2.5vw;
  }
}
@media (min-width: 1170px) {
  .title {
    --landing-title-fs: calc(6vw - 1em);
  }
  .meta-title__location {
    --landing-title-location-fs: 1.3vw;
  }
  .meta-title__period {
    --landing-title-period-fs: 2.4vw;
  }
  .meta-title__sub {
    --landing-title-sub-fs: 2.1vw;
  }
}
@media (min-width: 1280px) {
  .title {
    --landing-title-fs: calc(5.7vw - 1em);
  }
  .meta-title__location {
    --landing-title-location-fs: 1.1vw;
  }
  .meta-title__period {
    --landing-title-period-fs: 1.9vw;
  }
  .meta-title__sub {
    --landing-title-sub-fs: 1.9vw;
  }
}
@media (min-width: 1400px) {
  .title {
    --landing-title-fs: calc(5.5vw - 1em);
  }
  .meta-title__location {
    --landing-title-location-fs: 1.05vw;
  }
  .meta-title__period {
    --landing-title-period-fs: 1.8vw;
  }
  .meta-title__sub {
    --landing-title-sub-fs: 1.8vw;
  }
}
@media (min-width: 1500px) {
  .title {
    --landing-title-fs: calc(5.3vw - 1em);
  }
  .meta-title__location {
    --landing-title-location-fs: 0.89vw;
  }
  .meta-title__period {
    --landing-title-period-fs: 1.7vw;
  }
  .meta-title__sub {
    --landing-title-sub-fs: 1.7vw;
  }
}
@media (min-width: 1600px) {
  .title {
    --landing-title-fs: 64px;
  }
  .meta-title__location {
    --landing-title-location-fs: 0.89vw;
  }
  .meta-title__period {
    --landing-title-period-fs: 1.7vw;
  }
  .meta-title__sub {
    --landing-title-sub-fs: 1.7vw;
  }
}
@media (min-width: 1700px) {
  .title {
    --landing-title-fs: 70px;
  }
  .meta-title__location {
    --landing-title-location-fs: 18px;
  }
  .meta-title__period {
    --landing-title-period-fs: 28px;
  }
  .meta-title__sub {
    --landing-title-sub-fs: 24px;
  }
}
.text-block {
  display: block;
}

.text-box {
  text-align: center;
  font-family: var(--font-bangers);
  transform: translateY(-15px);
}
</style>
