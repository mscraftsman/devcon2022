<template>
  <footer class="global__footer">
    <div class="slanted__svg">
      <svg
        data-v-71f627fa
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        class="slanted"
      >
        <polygon
          data-v-71f627fa
          points="0,0 100,100 100,100, 0,100"
          pointer-events="none"
        />
      </svg>
      <img class="building" src="/buildings.png" alt />
    </div>
    <div class="footer__container">
      <div class="container__fw">
        <div class="footer__content">
          <div class="top__wrapper">
            <div class="image">
              <a href="https://mscc.mu"
                ><img src="/mscc-logo-inverted.svg" alt="MSCC"
              /></a>
              <div class="mscc">Mauritius Software Craftsmanship Community</div>
            </div>
            <div class="social">
              <a
                href="https://www.facebook.com/MauritiusSoftwareCraftsmanshipCommunity/"
                class="social__icon"
              >
                <img src="/icon/facebook.svg" alt="MSCC on Facebook" />
              </a>
              <a href="https://twitter.com/mscraftsman" class="social__icon">
                <img src="/icon/twitter.svg" alt="MSCC on Twitter" />
              </a>
              <a
                href="https://www.linkedin.com/groups/5033639"
                class="social__icon"
              >
                <img src="/icon/linkedin.svg" alt="MSCC on LinkedIn" />
              </a>
              <a href="https://github.com/mscraftsman" class="social__icon">
                <img src="/icon/github.svg" alt="MSCC on Github" />
              </a>
            </div>
          </div>
          <div class="bottom__wrapper">
            <ul>
              <li>
                <router-link :to="{ name: 'Code' }"
                  >Code of Conduct</router-link
                >
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/1OESX2x2KuVcD322ds5ZXwQWhQfRilAwb/view"
                  >Become a sponsor</a
                >
              </li>
              <li>
                <router-link :to="{ name: 'Extras' }">Extras</router-link>
              </li>
              <li>
                <a class="false--anchor" @click="displayCredits()">Credits</a>
              </li>

              <!-- <li>
                <a href="https://bit.ly/RegDevCon" target="_blank" rel="noopener noreferrer" class="header__button">Register</a>
              </li> -->
            </ul>
          </div>
        </div>
      </div>
    </div>
    <CreditsModal />
  </footer>
</template>

<script>
import CreditsModal from "@/components/shared/CreditsModal";
export default {
  components: {
    CreditsModal
  },
  methods: {
    displayCredits() {
      this.$modal.show("credits__modal");
    },
    closeModal() {
      this.$modal.hide("credits__modal");
    }
  }
};
</script>

<style lang="scss" scoped>
.slanted__svg {
  position: relative;

  .building {
    position: absolute;
    width: 500px;
    right: 0;
    bottom: -30px;
    z-index: -1;
  }
}

.slanted {
  height: 152px;
  width: 100%;
}

.footer__container {
  background: black;
  padding: 10px 0 50px 0;
}

.global__footer {
  line-height: 0;

  .footer__content {
    .top__wrapper {
      text-align: center;

      .image {
        img {
          width: 60px;
          margin-bottom: 40px;
        }

        .mscc {
          color: white;
          font-size: 22px;
          text-transform: uppercase;
          font-weight: 700;
          color: var(--bronze);
          font-family: var(--font-bangers);
          letter-spacing: 1px;
          margin-bottom: 40px;
        }
      }
    }

    .social {
      margin-top: 30px;
      margin-bottom: 40px;

      .social__icon {
        margin-right: 30px;

        &:last-child {
          margin-right: 0;
        }

        img {
          width: 25px;
        }
      }
    }

    .bottom__wrapper {
      border-top: 1px solid rgba(255, 255, 255, 0.2);
      ul {
        display: inline-block;
        text-align: center;
        margin: 0;
        padding: 0;
        width: 100%;
        margin-top: 30px;
        padding-top: 10px;

        li {
          display: inline-block;
          margin-right: 20px;

          a {
            text-transform: uppercase;
            font-weight: 700;
            text-decoration: none;
            color: #aabbc3;

            &.false--anchor {
              &:hover {
                cursor: pointer;
              }
            }
          }
        }
      }
    }
  }

  p {
    color: white;
    font-family: var(--font-noto);
    font-size: 12px;
    line-height: 18px;

    &.bold {
      font-weight: 900;
    }
  }

  a {
    margin: 0;
    color: white;
  }
}

@media (max-width: 768px) {
  .slanted__svg {
    .building {
      width: 300px;
    }
  }

  .slanted__svg {
    background-size: 300px;
    background-position: 30px right;
  }

  .slanted {
    height: 100px;
    width: 100%;
  }

  .global__footer {
    line-height: 0;

    .footer__content {
      .top__wrapper {
        .mscc {
          line-height: 30px;
        }
      }

      .bottom__wrapper {
        ul {
          width: auto;
          display: flex;
          justify-content: space-evenly;
          padding-top: 30px;
          li {
            margin-right: 0;
          }
        }
      }
    }
  }
}

@media (max-width: 500px) {
  .global__footer {
    .footer__container {
      .bottom__wrapper {
        ul {
          width: auto;
          display: flex;
          flex-direction: column;
          gap: 40px;
          margin-top: 30px;
          li {
            margin-right: 0;
          }
        }
      }
    }
  }

  .slanted__svg {
    .building {
      width: 180px;
    }
  }

  .slanted__svg {
    background-size: 200px;
    background-position: 40px right;
  }

  .slanted {
    height: 60px;
    width: 100%;
  }
}
</style>
