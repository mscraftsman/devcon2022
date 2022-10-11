<template>
  <div class="speaker__container">
    <div class="container__fw">
      <div class="breadcrumbs__container">
        <ul>
          <li>
            <router-link :to="{ name: 'Agenda' }" class="speaker--anchor">
              Back to Agenda
            </router-link>
          </li>
          <li>/</li>
          <li v-if="session">
            {{ session.title }}
          </li>
        </ul>
      </div>
      <div class="session__wrapper" v-if="session">
        <div class="content">
          <div class="left__wrapper">
            <h3>{{ session.title }}</h3>
            <div class="location__time">
              <div class="location">
                <span class="icon">
                  <img src="/location.svg" alt="Location" />
                </span>
                <span class="data">{{ session.room }}</span>
              </div>
              <div class="time">
                <span class="icon">
                  <img src="/time.svg" alt="Time" />
                </span>
                <span class="data">
                  {{ getDay(session.startsAt) }}
                  {{ time(session.startsAt) }} -
                  {{ time(session.endsAt) }}
                </span>
              </div>
            </div>
            <div class="description">
              <p v-html="session.description"></p>
            </div>
          </div>
          <div class="right__wrapper">
            <div
              :class="[
                'author__information',
                {
                  multiple: session.speakers && session.speakers.length > 1,
                },
              ]"
            >
              <div
                class="speaker"
                v-for="(speaker, index) in session.speakers"
                :key="index"
              >
                <div class="profile__name">
                  <div
                    class="image"
                    v-if="
                      speakersById[speaker.id] &&
                        speakersById[speaker.id].profilePicture
                    "
                  >
                    <img
                      :src="speakersById[speaker.id].profilePicture"
                      :alt="speaker.name"
                    />
                  </div>
                  <div class="info">
                    <div class="name">{{ speaker.name }}</div>
                    <div
                      class="profession"
                      v-if="speakersById[speaker.id].tagLine"
                    >
                      {{ speakersById[speaker.id].tagLine }}
                    </div>
                  </div>
                </div>
                <div class="bio">
                  <p v-html="speakersById[speaker.id].bio"></p>
                </div>
                <div class="social">
                  <template
                    v-for="(social, index) in speakersById[speaker.id].links"
                  >
                    <a
                      :href="social.url"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="social__icon"
                      :key="'twitter-' + index"
                      v-if="social.title == 'Twitter'"
                    >
                      <img src="/icon/twitter.svg" alt="Twitter" />
                    </a>
                    <a
                      :href="social.url"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="social__icon"
                      :key="'twitter-' + index"
                      v-if="social.title == 'Facebook'"
                    >
                      <img src="/icon/facebook.svg" alt="Facebook" />
                    </a>
                    <a
                      :href="social.url"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="social__icon"
                      :key="'twitter-' + index"
                      v-if="social.title == 'LinkedIn'"
                    >
                      <img src="/icon/linkedin.svg" alt="LinkedIn" />
                    </a>
                    <a
                      :href="social.url"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="social__icon"
                      :key="'twitter-' + index"
                      v-if="social.title == 'Instagram'"
                    >
                      <img src="/icon/instagram.svg" alt="Instagram" />
                    </a>
                    <a
                      :href="social.url"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="social__icon"
                      :key="'twitter-' + index"
                      v-if="social.title == 'GitHub'"
                    >
                      <img src="/icon/github.svg" alt="Github" />
                    </a>
                    <a
                      :href="social.url"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="social__icon"
                      :key="'twitter-' + index"
                      v-if="social.title == 'Blog'"
                    >
                      <img src="/icon/website.svg" alt="Website" />
                    </a>
                  </template>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { time as timeHelper, getDay as getDayHelper } from "@/helpers";

export default {
  data() {
    return {
      session_id: null,
      page: {
        title: "MSCC",
      },
      session: null,
    };
  },
  metaInfo() {
    return {
      title: this.page.title,
    };
  },
  methods: {
    time: timeHelper,
    getDay: getDayHelper,
    ...mapActions(["FETCH_SESSIONS", "FETCH_SPEAKERS"]),
    getSession(id) {
      if (this.sessions.length === 0) {
        this.FETCH_SESSIONS();
      }
      let session = this.sessionsById[this.session_id];
      return session;
    },
    processSession(id) {
      this.session = this.getSession(id);

      this.page.title = this.session.title;
    },
    getSocialIcon(obj) {
      if (obj.title == "LinkedIn") {
        return "linkedin";
      } else if (obj.title == "Website") {
        return "website";
      } else if (obj.title == "Twitter") {
        return "twitter";
      } else if (obj.title == "Facebook") {
        return "facebook";
      } else if (obj.title == "Blog") {
        return "website";
      } else {
        return "website";
      }
    },
    shortenify(text) {
      return text.length > 11 ? text.substring(0, 11) + ".." : text;
    },
  },
  computed: {
    ...mapGetters({
      sessions: "getSessions",
      sessionsById: "getSessionsById",
      speakersById: "getSpeakersById",
      speakers: "getSpeakers",
    }),
  },
  mounted() {
    this.session_id = this.$route.params.id;

    let sessions;
    let speakers;

    if (this.sessions.length === 0) {
      sessions = this.FETCH_SESSIONS();
      speakers = this.FETCH_SPEAKERS();

      sessions.then((results) => {
        this.processSession(this.session_id);
      });
    } else {
      this.processSession(this.session_id);
    }
  },
};
</script>

<style lang="scss" scoped>
.container__fw {
  max-width: 700px;
}

.breadcrumbs__container {
  margin-bottom: 20px;
  z-index: 10;

  ul {
    color: black;
    list-style: none;
    margin: 0;
    padding: 0;
    display: inline-block;
    text-transform: uppercase;
    font-size: 25px;
    font-family: var(--font-bangers);
    position: relative;
    z-index: 10;

    li {
      display: inline-block;
      margin-right: 10px;
      z-index: 10;

      a {
        text-decoration: none;
        text-transform: uppercase;
        color: var(--platinium);
        z-index: 10;
      }
    }
  }
}

.name__block {
  font-size: 140px;
  line-height: 90px;
  font-family: var(--font-bangers);
  color: var(--platinium);
  opacity: 0.2;
  position: absolute;
  height: 100px;
  top: 0;
  right: 0;
  transform: translateY(-70px);
}

.speaker__container {
  padding: 100px 0;
  color: white;
  position: relative;

  .session__wrapper {
    background: var(--platinium);
    position: relative;
    min-height: 500px;
    margin: 0 auto;
    border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
    border: 3px solid #000;
    border-color: #000;
    padding: 50px;
    padding-bottom: 20px;
    box-shadow: 0 10px 40px 20px rgba(0, 0, 0, 0.2);

    .speaker__profile {
      .picture__bio--wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .picture {
        margin-right: 30px;

        img {
          max-width: 160px;
          min-width: 160px;
          width: 100%;
          border-radius: 200px;
          border: 3px solid black;
          box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
        }
      }

      .bio {
        .name {
          text-transform: uppercase;
          font-size: 24px;
          margin: 0;
          margin-bottom: 5px;
          text-shadow: 2px 2px 0px rgba(0, 0, 0, 1);
        }
        .tagline {
          font-weight: 300;
          line-height: 24px;
          text-shadow: 3px 3px 2px rgba(0, 0, 0, 0.3);
        }
      }

      .information {
        p {
          font-weight: 300;
          line-height: 24px;
        }
      }
    }

    .sessions__container {
      h3 {
        text-transform: uppercase;
      }
      .session__links {
        margin: 0;
        padding: 0;

        li {
          margin-bottom: 10px;
          list-style-type: none;
          padding: 0;

          a {
            text-decoration: none;
            color: white;
            font-weight: 100;

            &:hover {
              text-decoration: underline;
            }
          }
        }
      }
    }

    .social {
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

    .content {
      display: grid;
      grid-template-columns: 50% 50%;

      .left__wrapper {
        border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
        border-right: 2px solid #000;

        h3 {
          text-transform: uppercase;
          font-size: 45px;
          font-family: var(--font-bangers);
          letter-spacing: 1px;
          text-align: center;
          padding: 10px 20px;
          margin: 20px 0;
          margin-top: 30px;
        }

        .location__time {
          display: grid;
          grid-template-columns: 1fr 1fr;
          background: black;
          padding: 10px;
          margin-bottom: 20px;
          font-size: 15px;

          .location,
          .time {
            display: flex;
            align-items: center;
            justify-content: center;

            .icon {
              margin-right: 15px;
              img {
                height: 30px;
              }
            }
            .data {
              color: white;
            }
          }
        }

        .description {
          padding: 10px 20px;
          font-weight: 300;
          line-height: 26px;
          // max-height: 600px;
          // overflow: scroll;

          p {
            line-height: 25px;
            font-weight: 300;
            white-space: pre-wrap;
            text-align: left;
            word-wrap: break-word;
          }
        }
      }

      .right__wrapper {
        height: 100%;
        width: 100%;
        border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
        border-left: 2px solid #000;

        .author__information {
          background: black;
          padding: 30px;

          &.multiple {
            // display: grid;
            // grid-template-columns: 1fr 1fr;
            // grid-gap: 10px;

            .speaker {
              justify-content: flex-start;
            }
          }

          .speaker {
            .profile__name {
              display: flex;
              justify-content: flex-start;
              align-items: center;
              .image {
                margin-right: 20px;
                img {
                  width: 110px;
                  height: 110px;
                  border-radius: 100px;
                }
              }

              .info {
                color: white;

                .name {
                  font-size: 26px;
                  font-weight: 700;
                  margin-bottom: 5px;
                  text-transform: uppercase;
                }

                .profession {
                  font-size: 17px;
                  font-weight: 300;
                }
              }
            }

            .bio {
              margin-bottom: 10px;
              p {
                color: white;
                line-height: 25px;
                font-weight: 300;
                white-space: pre-wrap;
                text-align: left;
              }
            }

            .social {
              display: flex;
              justify-content: flex-end;

              .social__icon {
                height: 45px;
                width: 45px;
                display: block;
                border: 2px solid white;
                border-radius: 40px;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-right: 10px;

                &:last-child {
                  margin-right: 0;
                }

                img {
                  height: 22px;
                }
              }
            }
          }
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .name__block {
    font-size: 90px;
  }
  .speaker__container {
    padding: 50px 0;
    .speaker__wrapper {
      .speaker__profile {
        .picture__bio--wrapper {
          display: block;
          text-align: center;

          .picture {
            margin: 0 0 10px;
          }
        }
      }
    }
  }
}
</style>
