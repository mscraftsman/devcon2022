<template>
  <div class="page--extras">
    <div class="container__fw page">
      <div class="title__section">
        <h2 class="title">
          Extras
        </h2>
      </div>
    </div>
    <div class="container__large__fw">
      <div class="extras--listing">
        <div class="extras-block__container">
          <div class="extras__description first">
            <h2 class="extras__title">
              Caricature Artist / <span>Thierry Amery</span>
            </h2>
            <div class="extras__info">
              <p>
                Thierry Amery is a visual artist, caricature and portrait artist,
                and visual arts subject leader at Northfields International High
                School. He developed a unique style of caricatures without much
                exaggeration as he sees his model through the eyes of a child in
                only five minutes, one black pen and a paper.
              </p>

              <div class="social__block">
                <div class="website__info"></div>
                <div class="social__icons">
                  <a
                    href="https://www.instagram.com/thierryamery"
                    target="_blank"
                    class="social__icon"
                  >
                    <img src="/icon/dark/instagram.svg" alt="Instagram" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            class="extras__logo"
            :style="{ background: 'url(/images/artists/thierry-amery.jpg)' }"
          ></div>
        </div>

        <div class="extras-block__container">
          <div class="extras__description second">
            <h2 class="extras__title">
              Plush Dolls Artist / <span>Kyky Otaku</span>
            </h2>
            <div class="extras__info">
              <p>
                Hi, my name is Sabrina a.k.a Kyky (entrepreneur) 29 years old,
                art passionate and owner of Kyky Otaku.
              </p>

              <p>
                I've been studying art since secondary school till my 2 years at
                the M.I.E for the teacher's diploma. But learning new skills
                never ends.
              </p>

              <p>
                Kyky Otaku came to life during my school years and officially
                became a full time job since 5 years. Being self-employed
                requires a lot of work but it's so rewarding in terms of
                personal development and from the smile, love and laughter from
                my customers.
              </p>

              <p>
                I create plush of all sorts, mainly human puppet (portrait doll)
                but also illustrations, custom cards, dreamcatchers and now
                macrame.
              </p>

              <p>
                My aim is to help everyone in finding a unique gift to create a
                memorable moment.
              </p>

              <div class="social__block">
                <div class="website__info"></div>
                <div class="social__icons">
                  <a
                    href="https://www.facebook.com/kyky.artwork/"
                    target="_blank"
                    class="social__icon"
                  >
                    <img src="/icon/dark/facebook.svg" alt="Facebook" />
                  </a>

                  <a
                    href="https://www.instagram.com/kyky_otaku/"
                    target="_blank"
                    class="social__icon"
                  >
                    <img src="/icon/dark/instagram.svg" alt="Instagram" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            class="extras__logo"
            :style="{ background: 'url(/images/artists/kyky-otaku.jpg)' }"
          ></div>
        </div>

                <div class="extras-block__container">
          <div class="extras__description first">
            <h2 class="extras__title">
              Cosplay / <span>Stefan Wong Ng</span>
            </h2>
            <div class="extras__info">
              <p>
                Cosplay is a passion, we organise gatherings, workshops and events.
                We provide superheroes for birthdays and private events.
                We make people dream and reminiscent of their childhood.
                We communicate through Cosplay Mauritius and Cosplayer for Hire
              </p>
              <p>
                Kage Bunshin Ltd promote cosplay in different ways. What started as a passion turned to be a business model.
              </p>
            </div>
          </div>
          <div
            class="extras__logo"
            :style="{ background: 'url(/images/artists/stefan-wong-ng.jpg)' }"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page {
  padding: 40px 10px;
}

.page--extras {
  padding-bottom: 200px;
}

.extras-block__container {
  display: grid;
  grid-template-columns: 2fr 0.8fr;
  grid-gap: 40px;
  margin-bottom: 40px;

  p {
    font-weight: 300;
  }

  &:nth-child(even) {
    grid-template-columns: 0.8fr 2fr;

    .extras__description {
      order: 1;
    }

    .extras__logo {
      order: 0;
    }
  }

  .extras__description {
    border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
    border: 2px solid #000;
    border-color: #000;
    padding: 0 40px;
    padding-bottom: 20px;
    box-shadow: 0 10px 20px 20px rgba(0, 0, 0, 0.095);
    background: rgb(255, 255, 255);

    &.first {
      background: #def3fd;
    }

    &.second {
      background: white;
    }

    .extras__title {
      font-family: var(--font-bangers);
      letter-spacing: 1px;
      font-size: 40px;
      margin-bottom: 0;

      span {
        color: rgba(0, 0, 0, 0.8);
      }
    }
    .extras__info {
      p {
        font-size: 16px;
        line-height: 27px;

        a {
          color: #102a43;
          font-weight: 500;
        }
      }

      .social__block {
        margin: 20px 0;
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;

        .website__info {
          transform: skewX(-10deg);
          a {
            background: var(--platinium);
            color: white;
            text-transform: uppercase;
            padding: 10px 20px;
            text-decoration: none;
            font-size: 20px;
            font-family: var(--font-bangers);
          }
        }

        .social__icons {
          display: flex;
          justify-content: flex-end;

          .social__icon {
            margin-right: 10px;
            background: var(--bronze);
            width: 40px;
            height: 40px;
            border-radius: 25px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 2px solid black;

            img {
              width: 18px;
            }
          }
        }
      }
    }
  }
  .extras__logo {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;

    border-radius: 255px 15px 300px 15px/15px 225px 15px 255px;
    border: 1px solid #000;
    border-color: #000;
    background-size: cover !important;
    background-position: center center !important;
    box-shadow: 0 20px 20px 20px rgba(0, 0, 0, 0.1) !important;

    img {
      max-width: 250px;
    }
  }
}

@media (max-width: 768px) {
  .extras-block__container {
    display: grid;
    grid-template-columns: 1fr;

    &:nth-child(even) {
      grid-template-columns: 1fr;
    }

    .extras__description {
      .extras__title {
        font-size: 28px;
      }
    }

    .extras__logo {
      display: none;
    }
  }

  .page--extras {
    padding-bottom: 40px;
  }
}
</style>
