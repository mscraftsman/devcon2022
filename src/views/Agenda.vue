<template>
  <div class="container__fw page">
    <AgendaSessionize />
  </div>
</template>

<script>
import AgendaSessionize from '@/views/AgendaSessionize'

export default {
  components: {
    AgendaSessionize
  }
}
</script>


<style lang="scss" scoped>
.page {
  padding: 40px 10px;

  h1 {
    text-align: center;
    font-family: var(--font-bangers);
    font-size: 60px;
    letter-spacing: 2px;
  }

  h2 {
    font-family: var(--font-bangers);
    letter-spacing: 1px;
    font-size: 40px;
  }

  img {
    margin: 0 auto;
    max-width: 600px;
    width: 100%;
    display: block;
  }

  p {
    font-weight: 300;
    line-height: 28px;
    font-size: 18px;

    a {
      color: var(--titanium);
    }
  }
}
</style>
