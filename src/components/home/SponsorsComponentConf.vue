<template>
  <section class="sponsor-section-wrapper mb-24 pb-32">
    <!-- title -->
    <div class="title__container pt-32 mb-24">
      <div class="title__section">
        <div class="sub-text">Become one of our sponsors</div>
        <h2 class="title">Sponsorship</h2>
        <div class="content">
          <p>
            Text coming up
          </p>
        </div>
      </div>
    </div>

    <div class="button-wrapper flex">
      <a
        href="https://sessionize.com/developers-conference-2022---mauritius/"
        target="_blank"
        class="meta-title__sub"
      >
        Call for papers
      </a>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";

import { groupBy, sortBy } from "@/helpers";

// import SponsorList from "@/components/sponsor-list.vue";
export default {
  components: {
    // SponsorList
  },

  computed: {
    ...mapState(["sponsors"]),

    displayedSponsors() {
      return this.sponsors.filter(({ support }) => !!Number(support) || false);
    },

    sponsorsGroups() {
      const unOrderedGroups = groupBy(this.displayedSponsors, "level");

      const keys = Object.keys(unOrderedGroups);
      const hasNoKeys = !keys.length;
      if (hasNoKeys) {
        return unOrderedGroups;
      }

      const ORDER_RULES = {
        Diamond: 1,
        Titanium: 2,
        Platinium: 3,
        Gold: 4,
        Silver: 5,
        Bronze: 6,
        "Happy Hour Partner": 7,
        Speaker: 8,
        "Media Partner": 9,
        "Day Care": 10
      };
      const orderedGroups = sortBy(unOrderedGroups, ORDER_RULES);
      return orderedGroups;
    }
  }
};
</script>

<style lang="scss" scoped>
.home-component {
  // padding: $section-spacer 0;
}
.mega-rainbow {
  padding-bottom: 30px;
}

.view-more {
  // padding: $gutter * 2 0;
  padding: 1rem * 2 0;
}
.button-center {
  // width: 300px;
  // margin: $gutter auto;
  margin: 1rem auto;
}

.sponsor-section-wrapper {
  --size: 50px;
  --side-padding: 9%;
  --right-padding: calc(100% - var(--side-padding));

  --power-y: 7%;
  --space-y: 18%;
  --reality-y: 27%;
  --soul-y: 44%;
  --time-y: 55%;
  --mind-y: 66%;

  @media screen and (max-width: 767px) {
    background: none;
  }

  @media screen and (min-width: 769px) {
    --size: 50px;
    --side-padding: 1%;

    --power-y: 11%;
    --space-y: 18%;
    --reality-y: 27%;
    --soul-y: 44%;
    --time-y: 55%;
    --mind-y: 66%;

    background: url("/images/home-sponsors/powerstone.png"),
      url("/images/home-sponsors/spacestone.png"),
      url("/images/home-sponsors/realitystone.png"),
      url("/images/home-sponsors/soulstone.png"),
      url("/images/home-sponsors/timestone.png"),
      url("/images/home-sponsors/mindstone.png");

    background-position: var(--side-padding) var(--power-y),
      var(--right-padding) var(--space-y), var(--side-padding) var(--reality-y),
      var(--right-padding) var(--soul-y), var(--side-padding) var(--time-y),
      var(--right-padding) var(--mind-y);

    background-repeat: no-repeat, no-repeat, no-repeat, no-repeat, no-repeat,
      no-repeat;
    background-size: var(--size), var(--size), var(--size), var(--size),
      var(--size), var(--size);
  }

  @media screen and (max-width: 1024px) {
    --size: 300px;
    --side-padding: 1%;

    --power-y: 5%;
    --space-y: 23%;
    --reality-y: 43%;
    --soul-y: 57%;
    --time-y: 71%;
    --mind-y: 87%;
  }

  @media screen and (min-width: 1025px) {
    --size: 350px;
    --side-padding: 3%;

    --power-y: 3%;
    --space-y: 23%;
    --reality-y: 43%;
    --soul-y: 57%;
    --time-y: 71%;
    --mind-y: 91%;
  }

  @media screen and (min-width: 1400px) {
    --size: 500px;
    --side-padding: 3%;

    --power-y: 3%;
    --space-y: 23%;
    --reality-y: 43%;
    --soul-y: 57%;
    --time-y: 71%;
    --mind-y: 91%;
  }
}

.button-wrapper a {
  transform: skewX(-10deg);
  box-shadow: 4px 4px 0 0px #000;
}

.section-title {
  position: relative;
}

// .section-title:after {
//   content: "";
//   position: absolute;
//   left: 0;
//   right: 0;
//   top: 0;
//   bottom: 0;
//   width: 125%;
//   height: 125%;
//   transform: translate(-9.5%, -9.5%) skew(-7deg);
//   border: 0.25rem solid black;
//   border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
//   padding: 0.5rem 2rem;
// }

// .title__container {
//   position: relative;
//   width: 100%;
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   grid-template-rows: 1fr;

//   .bg__asset {
//     grid-row: 1 / 1;
//     grid-column: 1 / 3;
//     text-align: center;
//     z-index: 1;

//     img {
//       margin: 0 auto;
//       width: 500px;
//       transform: rotate(-10deg);
//     }
//   }

//   .title__wrapper {
//     text-align: center;
//     grid-row: 1 / 1;
//     grid-column: 1 / 3;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     flex-direction: column;
//     margin-top: -50px;
//     z-index: 2;

//     .title {
//       // font-size: 60px;
//       // line-height: 60px;
//       margin: 0;
//       // color: white;
//       // text-shadow: 3px 3px 0 rgba(0, 0, 0, 1);
//       margin-bottom: 5px;
//       letter-spacing: -0.2px;
//       @apply text-6xl;
//     }

//     .title__sub {
//       color: rgb(255, 236, 126);
//       // @apply font-robotocondensed;
//       @apply font-hairline;
//       font-style: italic;
//       font-weight: bold;
//       font-size: 25px;
//       letter-spacing: 2px;
//       line-height: 26px;
//       text-align: center;
//       text-transform: uppercase;
//       text-shadow: 2px 2px 0px #000000;
//     }
//   }
// }

.become__sponsor__container {
  .become__sponsor__button {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    width: 300px;
    margin: 0 auto;
    transition: all 0.2s ease-in-out;

    &:hover {
      transform: scale(1.05);

      .text {
        transform: scale(1.2) rotate(-10deg);
      }
    }
  }

  .bg__asset {
    grid-row: 1 / 1;
    grid-column: 1 / 3;
    text-align: center;

    img {
      margin: 0 auto;
      width: 300px;
    }
  }

  .text {
    @apply font-hulksmash;
    text-align: center;
    grid-row: 1 / 1;
    grid-column: 1 / 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease-in-out;

    font-size: 40px;
    margin-top: 10px;
    transform: rotate(-10deg);
    margin: 0;
    color: black;
    text-shadow: 3px 3px 0 rgba(255, 255, 255, 1);
  }
}

@media (max-width: 768px) {
  .sponsor-section-wrapper {
    background-size: /*200px,*/ cover, /*200px,*/ 200px, 200px;
  }
}

@media (max-width: 480px) {
  .title__container {
    .bg__asset {
      img {
        width: 300px;
      }
    }

    .title__wrapper {
      .title {
        font-size: 30px;
        line-height: 30px;
      }

      .title__sub {
        font-size: 18px;
        line-height: 15px;
      }
    }
  }
}
</style>
