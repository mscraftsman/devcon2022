<template>
  <div class="intro__container">
    <div class="bg"></div>
    <div class="borders">
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" class="slanted">
        <polygon points="0,0 100,0 100,80, 0,100" pointer-events="none" stroke="black" fill="none" />
      </svg>
    </div>
    <div class="image">
      <img src="/intro.png" alt="Developers Conference 2021 in Mauritius" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@keyframes swirl-in-fwd {
  0% {
    transform: rotate(-540deg) scale(0);
    opacity: 0;
  }
  100% {
    transform: rotate(0) scale(1);
    opacity: 1;
  }
}

.intro__container {
  margin-top: 70px;
  // background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
  // background: var(--bronze);

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;

  .bg {
    grid-row: 1 / 2;
    grid-column: 1 / 2;

    z-index: 1;
  }

  .borders {
    grid-row: 1 / 2;
    grid-column: 1 / 2;
    z-index: 2;
    transform: scaleX(0.98) scaleY(0.95);

    svg {
      height: 680px;
      width: 100%;
      border-radius: 113% 2% 47% 2%/1% 223% 85% 27%;
      background: url("/bg.png");
      clip-path: polygon(0 0, 100% 0, 100% 82%, 0 100%);
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center center;

      fill: transparent;
      // border: 2px solid black;

      polygon {
        stroke-width: 2;
      }
    }
  }

  .image {
    grid-row: 1 / 2;
    grid-column: 1 / 2;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 3;

    img {
      max-width: 800px;
      width: 100%;
      transform: translateY(-40px);
      z-index: 100;
    }
  }

  .date {
    color: var(--platinium);
    font-size: 40px;
    text-align: center;
    text-transform: uppercase;
    font-weight: 400;
    text-shadow: 3px 5px 0 rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
  }

  .intro__text {
    font-family: var(--font-bangers);
    font-size: 80px;
    text-align: center;
    text-shadow: 5px 5px 0 rgba(0, 0, 0, 0.1);
    margin-bottom: 30px;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      max-height: 500px;
      animation: swirl-in-fwd 0.6s ease-out both;
    }
  }

  .button {
    text-align: center;
    display: flex;
    justify-content: center;

    .cta {
      height: 60px;
      line-height: 40px;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      font-size: 20px;
      margin-right: 10px;
      width: 250px;
      background: var(--silver);
      text-transform: uppercase;
      font-weight: 700;
      text-shadow: 5px 5px 0 rgba(0, 0, 0, 0.1);
      box-shadow: 10px 10px 0 rgba(0, 0, 0, 0.1);
    }
  }
}

@media (max-width: 768px) {
  .intro__container {
    .image {
      img {
        width: 80%;
      }
    }
  }
}

@media (max-width: 500px) {
  .intro__container {
    .image {
      img {
        width: 90%;
        transform: translateY(-20px);
      }
    }

    .borders {
      svg {
        height: 380px;
      }
    }
  }
}
</style>
