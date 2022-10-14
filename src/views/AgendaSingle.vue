<template>
  <div class="speaker__container">
    <div class="container__fw">
      <div
        v-if="session"
        class="breadcrumbs__container"
        :data-room="session.roomId"
      >
        <ul>
          <li>
            <router-link :to="{ name: 'Agenda' }" class="speaker--anchor">
              Agenda
            </router-link>
          </li>
          <li>/</li>
          <li v-if="session">
            {{ session.title }}
          </li>
        </ul>
      </div>
      <div
        :v-if="session"
        :class="['session__wrapper']"
        :data-room="session.roomId"
      >
        <div class="content">
          <h3>{{ session.title }}</h3>

          <div
            :class="[
              'author__information',
              {
                multiple: session.speakers && session.speakers.length > 1,
              },
            ]"
          >
            <router-link
              v-for="(speaker, index) in session.speakers"
              :to="{ name: 'Speaker', params: { id: speaker.id } }"
              class="speaker"
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
                    v-if="
                      speakersById[speaker.id] &&
                        speakersById[speaker.id].tagLine
                    "
                  >
                    {{ speakersById[speaker.id].tagLine }}
                  </div>
                </div>
              </div>
            </router-link>
          </div>

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
  max-width: 800px;
  --red: #f53f32;
  --blue: #14a0c7;
  --yellow: #fed02b;
  --green: #45b656;
}

.breadcrumbs__container {
  margin-bottom: 20px;
  z-index: 10;

  &[data-room="22486"] {
    a {
      color: var(--red);
    }
  }
  &[data-room="22487"] {
    a {
      color: var(--blue);
    }
  }
  &[data-room="22488"] {
    a {
      color: var(--yellow);
    }
  }
  &[data-room="28497"] {
    a {
      color: var(--green);
    }
  }

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
    background: black;
    position: relative;
    min-height: 500px;
    margin: 0 auto;
    border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
    border: 3px solid #000;
    border-color: #000;
    padding: 50px 0;
    padding-bottom: 20px;
    box-shadow: 0 10px 40px 20px rgba(0, 0, 0, 0.2);

    &[data-room="22486"] {
      background: var(--red);
    }
    &[data-room="22487"] {
      background: var(--blue);
    }
    &[data-room="22488"] {
      background: var(--yellow);
      color: black;
    }
    &[data-room="28497"] {
      background: var(--green);
    }

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

    .author__information {
      background: black;
      padding: 20px 30px;
      display: flex;
      justify-content: center;
      text-decoration: none;

      &.multiple {
        // display: grid;
        // grid-template-columns: 1fr 1fr;
        // grid-gap: 10px;

        .speaker {
          justify-content: flex-start;
          margin-right: 15px;
        }
      }

      .speaker {
        max-width: 300px;
        text-decoration: none;

        .profile__name {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          .image {
            margin-right: 20px;
            img {
              width: 60px;
              height: 60px;
              border-radius: 100px;
            }
          }

          .info {
            color: white;

            .name {
              font-size: 18px;
              font-weight: 700;
              margin-bottom: 5px;
              text-transform: uppercase;
            }

            .profession {
              font-size: 14px;
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
      grid-template-columns: 1fr;

      h3 {
        text-transform: uppercase;
        font-size: 55px;
        font-family: var(--font-bangers);
        letter-spacing: 1px;
        text-align: center;
        padding: 10px 20px;
        margin: 0 0 40px;
        padding: 0 60px;
        // margin-top: 30px;
      }

      .location__time {
        display: flex;
        justify-content: center;

        // grid-template-columns: 1fr 1fr;
        background: black;
        padding: 0 0 20px;
        margin-bottom: 20px;
        font-size: 15px;

        .location {
          margin-right: 20px;
        }

        .location,
        .time {
          display: flex;
          align-items: center;
          justify-content: center;
          max-width: 250px;
          min-width: 200px;

          .icon {
            margin-right: 15px;
            img {
              height: 20px;
            }
          }
          .data {
            color: white;
          }
        }
      }

      .description {
        padding: 20px 30px;
        font-weight: 300;
        line-height: 26px;
        // max-height: 600px;
        // overflow: scroll;

        p {
          line-height: 25px;
          margin: 0;
          font-weight: 300;
          white-space: pre-wrap;
          text-align: left;
          word-wrap: break-word;
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .speaker__container {
    padding: 50px 0;
    .session__wrapper {
      .content {
        h3 {
          font-size: 35px;
          margin-bottom: 20px;
        }
      }

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

@media (max-width: 500px) {
  .speaker__container {
    .session__wrapper {
      .author__information {
        padding: 20px 10px;
        &.multiple {
          .speaker {
            min-width: 120px;
            max-width: 120px;
            margin-right: 0;

            .info {
              .name {
                font-size: 14px;
              }
            }
          }
        }
        .speaker {
          .profile__name {
            display: block;
            text-align: center;

            .image {
              margin-bottom: 10px;
              margin-right: 0;
            }
          }
        }
      }
      .content {
        h3 {
          font-size: 35px;
          margin-bottom: 20px;
        }
        .location__time {
          display: block;

          .location,
          .time {
            width: 100%;
            max-width: 100%;
            margin: 0;
          }
        }
        .description {
          p {
            max-width: 300px;
          }
        }
      }
    }
  }

  @media (max-width: 375px) {
    .speaker__container {
      .session__wrapper {
        .content {
          .description {
            p {
              max-width: 270px;
            }
          }
        }
      }
    }
  }
}
</style>
