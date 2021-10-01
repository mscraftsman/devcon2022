<template>
  <div class="register__container">
    <a href="https://bit.ly/RegDevCon" target="_blank" rel="noopener noreferrer" class="register__button">
      <img src="/register.png" alt="Register" class="image__btn" />
    </a>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@keyframes animateregister {
  0% {
    transform: scale(1) rotate(0);
  }
  25% {
    transform: scale(1.1) rotate(-5deg);
  }
  50% {
    transform: scale(1.1) rotate(-5deg);
  }
  75% {
    transform: scale(1.1) rotate(-5deg);
  }
  100% {
    transform: scale(1) rotate(0);
  }
}

.register__container {
  width: 100%;
  text-align: center;

  .register__button {
    width: 100%;
    text-align: center;

    .image__btn {
      width: auto;
      margin: 0 auto;
      max-height: 320px;
      transition: all 0.2s ease-in-out;
      // animation-name: animateregister;
      // animation-iteration-count: infinite;
      // animation-duration: 1s;

      &:hover {
        transform: scale(1.1) rotate(5deg);
      }
    }
  }
}

@media (max-width: 768px) {
  .register__container {
    .register__button {
      .image__btn {
        max-height: 250px;
      }
    }
  }
}

@media (max-width: 500px) {
}
</style>
