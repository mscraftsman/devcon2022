<template>
  <modal
    name="credits__modal"
    class="credits__modal"
    :width="1100"
    height="auto"
    :adaptive="true"
    :clickToClose="false"
    :scrollable="true"
  >
    <div class="close__button">
      <button @click="closeModal()">
        <img src="/close.svg" alt="close" />
      </button>
    </div>
    <div class="content">
      <div class="left__wrapper">
        <img src="/images/credits3.png" alt="" />
      </div>
      <div class="right__wrapper">
        <h3>Credit to our contributors</h3>
        <p>
          The Mauritius Software Craftsmanship Community exists thanks to all
          its members. Since the beginning of the Developers Conference, lots of
          members have shown their passion and drive in making this conference
          what it is. This year we have a list of all these talented people that
          help to make the Developers Conference successful…
        </p>
        <p>
          Here on this page we would like to give credit and thank all the
          contributors.
        </p>
        <p>
          Thank you for going above and beyond:
        </p>
        <p>
          Jade Marine Ng Tat Mew, Sandeep Ramgolam, Cedric Poilly, Neil Arwin
          Baichoo, Emmy Ng Tat Mew, Pajanilingum Renghen, Vidush Namah, Aditya
          Bholah, Chitesh Sham, Kushul Soomaree, Chervine Bhiwoo, Girish
          Mahabir, Chanakya Tiger Jheengut (Pritvi), Vanessa V. Chellen, Ish
          Sookun, Nirvan Pagooah.
        </p>
      </div>
    </div>
  </modal>
</template>

<script>
export default {
  methods: {
    openModal() {
      this.$modal.show("credits__modal");
    },
    closeModal() {
      this.$modal.hide("credits__modal");
    },
  },
};
</script>

<style lang="scss">
.credits__modal {
  --red: #f53f32;
  --blue: #14a0c7;
  --yellow: #fed02b;
  --green: #45b656;

  .close__button {
    height: 50px;
    width: 50px;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    position: absolute;
    right: 0;
    top: 0;
    margin-right: 35px;

    button {
      height: 40px;
      width: 40px;
      margin-right: 30px;
      background: none;
      border: 0;
      cursor: pointer;
      display: block;
      position: relative;
      outline: none;
      img {
        height: 30px;
        width: 30px;
        position: fixed;
      }
    }
  }
  .vm--modal {
    border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
    border: 2px solid #000;
    border-color: #000;
    max-height: 90vh;
    overflow: scroll;
    background: #febf00;

    .content {
      display: grid;
      grid-template-columns: 20% 20% 60%;
      grid-template-rows: 1fr;

      .left__wrapper {
        grid-column: 1 / 3;
        grid-row: 1 / 2;
        display: flex;
        align-items: flex-start;
        img {
          width: 100%;
        }
      }

      .right__wrapper {
        grid-column: 2 / 4;
        grid-row: 1 / 2;
        padding: 40px;
        padding-top: 150px;

        h3 {
          text-transform: uppercase;
          font-size: 45px;
          font-family: var(--font-bangers);
          letter-spacing: 1px;
          text-align: center;
          padding: 10px 20px;
          margin: 20px 0;
          margin-top: 30px;
          margin-bottom: 20px;
          line-height: 55px;
        }

        p {
          line-height: 30px;
          font-weight: 300;
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .credits__modal {
    .vm--modal {
      .content {
        grid-template-columns: 100%;

        .left__wrapper {
          display: none;
        }

        .right__wrapper {
          grid-column: 1 / 2;
          padding-top: 20px;
          h3 {
            font-size: 30px;
            line-height: 40px;
          }
        }
      }
    }
  }
}
</style>
