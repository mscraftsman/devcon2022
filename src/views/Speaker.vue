<template>
  <div class="speaker__container">
    <div class="container__fw">
      <div class="breadcrumbs__container">
        <ul>
          <li>
            <router-link :to="{ name: 'Speakers' }" class="speaker--anchor">
              Back to Speakers
            </router-link>
          </li>
          <li>/</li>
          <li v-if="speaker">
            {{ speaker.firstName + " " + speaker.lastName }}
          </li>
        </ul>
      </div>
      <div class="speaker__wrapper">
        <div class="speaker__profile" v-if="speaker != null">
          <div class="name__block" v-if="speaker && speaker.firstName">
            {{ shortenify(speaker.firstName) }}
          </div>

          <div class="picture__bio--wrapper">
            <div class="picture" v-if="speaker.profilePicture">
              <img
                :src="speaker.profilePicture"
                :alt="speaker.firstName + ' ' + speaker.lastName"
              />
            </div>
            <div class="bio">
              <h2 class="name">
                {{ speaker.firstName }} {{ speaker.lastName }}
              </h2>
              <div class="tagline">{{ speaker.tagLine }}</div>
            </div>
          </div>
          <div class="information">
            <p v-html="speaker.bio"></p>
          </div>
        </div>

        <div class="social" v-if="speaker">
          <div class="social__icons">
            <a
              v-for="(link, index) in speaker.links"
              :key="index"
              :href="link.url"
              target="_blank"
              class="social__icon"
            >
              <img
                :src="'/icon/dark/' + getSocialIcon(link) + '.svg'"
                :alt="link.linkType"
              />
            </a>
          </div>
        </div>

        <div class="sessions__container" v-if="speaker">
          <h3>Sessions</h3>
          <ul class="session__links">
            <li v-for="(session, index) in speaker.sessions" :key="index">
              <router-link
                :to="{ name: 'AgendaSingle', params: { id: session.id } }"
                >{{ session.name }}</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      speaker_id: null,
      page: {
        title: "MSCC",
      },
      speaker: null,
    };
  },
  metaInfo() {
    return {
      title: this.page.title,
    };
  },
  methods: {
    ...mapActions(["FETCH_SESSIONS", "FETCH_SPEAKERS"]),
    getSpeaker(id) {
      if (this.speakers.length === 0) {
        this.FETCH_SPEAKERS();
      }
      let theSpeaker = this.speakers.find((speaker) => speaker.id === id);
      return theSpeaker;
    },
    processSpeaker(id) {
      this.speaker = this.getSpeaker(id);
      this.page.title = this.speaker.firstName + " " + this.speaker.lastName;
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
      speakers: "getSpeakers",
    }),
  },
  mounted() {
    this.speaker_id = this.$route.params.id;

    let sessions;
    let speakers;

    if (this.speakers.length === 0) {
      sessions = this.FETCH_SESSIONS();
      speakers = this.FETCH_SPEAKERS();

      speakers.then((results) => {
        this.processSpeaker(this.speaker_id);
      });
    } else {
      this.processSpeaker(this.speaker_id);
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

  .speaker__wrapper {
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
