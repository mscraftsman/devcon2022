<template>
  <header class="global__header">
    <div class="container__fw">
      <div class="inner__grid">
        <div class="left__block">
          <router-link :to="{ name: 'Home' }" class="logo">
            <div class="mscc">
              <img src="/mscc-logo-inverted.svg" alt="MSCC logo" />
            </div>
            <h1 class="text">
              Developers Conference
              <span class="year">2022</span>
            </h1>
            <h1 class="text mobile">
              DevConMu
              <span class="year">2022</span>
            </h1>
          </router-link>
        </div>
        <div class="right__block">
          <ul>
            <li
              v-for="(item, index) in menu_items"
              :key="index"
              class="desktop--only"
            >
              <router-link
                @click.native="closeMenu()"
                :to="{ name: item.name_path }"
                >{{ item.text }}</router-link
              >
            </li>
            <li>
              <a
                href="https://forms.gle/KdMYMZtqv2GiGDte9"
                target="_blank"
                rel="noopener noreferrer"
                class="header__button"
                >Register</a
              >
            </li>
          </ul>
          <button
            class="menu__mobile"
            :class="{ closed: !menu, opened: menu }"
            @click="toggleMenu()"
          >
            <div class="burger__first"></div>
            <div class="burger__second"></div>
            <div class="burger__third"></div>
          </button>
        </div>
      </div>
    </div>

    <div class="mobile__menu--wrapper" v-if="menu">
      <div class="container__fw">
        <ul>
          <li
            v-for="(item, index) in menu_items"
            :key="index"
            class="desktop--only"
          >
            <router-link :to="{ name: item.name_path }">{{
              item.text
            }}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      menu: false,
      menu_items: [
        {
          name_path: "Community",
          text: "Community",
        },
        {
          name_path: "Extras",
          text: "Extras",
        },
      ],
    };
  },
  methods: {
    toggleMenu() {
      this.menu = !this.menu;
    },
    closeMenu() {
      this.menu = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.global__header {
  background: black;
  height: 70px;
  box-shadow: 0 0 13px rgba(0, 0, 0, 0.3);
  font-family: var(--font-bangers);
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;

  .inner__grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 70px;
  }

  .logo {
    margin: 0;
    display: inline-block;
    display: inline-flex;
    align-items: center;
    text-decoration: none;
    color: white;
    font-size: 32px;
    height: 70px;

    .year {
      color: var(--bronze);
    }

    .mscc {
      margin-right: 5px;
      width: 50px;
      height: 50px;
      display: flex;
      align-items: center;
      // border-right: 1px solid rgba(255, 255, 255, 0.3);

      img {
        height: 40px;
      }
    }

    .text {
      margin: 0;
      font-size: 32px;
      font-weight: 300;

      &.mobile {
        display: none;

        .year {
          display: block;
        }
      }
    }
  }

  .menu__mobile {
    width: 40px;
    height: 40px;
    border: 0;
    background: black;
    position: relative;
    display: none;

    &:hover {
      cursor: pointer;
    }

    &.opened {
      .burger__second {
        transform: translateX(-50px);
        opacity: 0;
      }

      .burger__first {
        transform: translateY(10px) rotate(45deg);
      }

      .burger__third {
        transform: translateY(-10px) rotate(-45deg);
      }
    }

    .burger__first,
    .burger__second,
    .burger__third {
      border-bottom: 4px solid white;
      transition: all 0.3s ease-in-out;
    }

    .burger__second {
      margin-top: 6px;
    }

    .burger__third {
      margin-top: 6px;
    }
  }

  .right__block {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 10px;

    ul {
      display: inline-flex;
      align-items: center;

      li {
        margin-right: 25px;

        &:last-child {
          margin-right: 0;
        }

        &.desktop--only {
          display: inline-flex;
        }

        a {
          text-decoration: none;
          color: white;
          font-size: 22px;
          transition: all 0.2s ease-in-out;

          &:hover {
            color: var(--bronze);
            font-size: 24px;
          }

          &.header__button {
            height: 40px;
            line-height: 40px;
            background: red;
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            text-decoration: none;
            font-size: 23px;
            width: 110px;

            &:hover {
              color: white;
            }
          }
        }
      }
    }
  }

  img {
    height: 40px;

    .st0 {
      fill: white;
    }
  }
}

.mobile__menu--wrapper {
  background: black;
  padding: 20px 0;
  display: none;

  ul {
    display: block;
    margin: 0;
    padding: 0;

    li {
      display: block;
      a {
        display: block;
        font-size: 20px;
        color: white;
        padding: 15px 0;
        text-decoration: none;
      }
    }
  }
}

@media (max-width: 768px) {
  .mobile__menu--wrapper {
    display: block;
  }
  .global__header {
    .logo {
      .text {
        font-size: 23px;
      }
    }

    .right__block {
      ul {
        li {
          &.desktop--only {
            display: none;
          }
        }
      }
    }

    .menu__mobile {
      display: block;
    }
  }
}

@media (max-width: 500px) {
  .global__header {
    .logo {
      .text {
        font-size: 20px;
        display: none;

        &.mobile {
          display: block;
        }
      }
    }

    .inner__grid {
      grid-template-columns: 1.5fr 1fr;

      .right__block {
      }
    }

    .header__button {
      font-size: 17px;
      width: 80px;
      &.light {
        width: 80px;
      }
    }
  }
}
</style>
