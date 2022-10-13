<template>
  <div class="speakers__container">
    <div class="container__fw">
      <div class="title__section">
        <div class="sub-text">Meet those who drive the change.</div>
        <h2 class="title">
          Speakers
        </h2>
      </div>
    </div>
    <div class="container__large__fw">
      <div class="page-all-speakers">
        <article class="comic">
          <transition name="fade" mode="out-in">
            <div
              class="speakers__listing"
              key="loader"
              v-if="speakers.length == 0"
            >
              <div class="loader">LOADING SPEAKERS</div>
            </div>
            <div class="speakers__listing" key="listing" v-else>
              <router-link
                class="panel"
                v-for="speaker in speakers"
                :key="speaker.id"
                :to="{ name: 'Speaker', params: { id: speaker.id } }"
                :alt="speaker.fullName"
                :title="speaker.fullName + ', ' + speaker.tagLine"
              >
                <p class="text top-left">{{ speaker.tagLine }}</p>
                <!--          <p class="text bottom-left">{{ speaker.sessions.length }}</p>-->

                <p class="text bottom-right">{{ speaker.fullName }}</p>
                <img
                  class=" border-2 border-black"
                  :src="speaker.profilePicture"
                  alt
                />
              </router-link>
            </div>
          </transition>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
import SpeakerBox from "@/components/speaker-box.vue";
import { mapActions, mapGetters } from "vuex";
import { time as timeHelper, getDay as getDayHelper } from "@/helpers";

export default {
  metaInfo: {
    title: "Speakers",
  },
  methods: {
    ...mapActions(["FETCH_SESSIONS", "FETCH_SPEAKERS"]),
    getSpeaker(id) {
      if (this.speakers.length === 0) {
        this.FETCH_SPEAKERS();
      }
      let theSpeaker = this.speakers.find((speaker) => speaker.id === id);
      return theSpeaker.profilePicture;
    },
    time: timeHelper,
    getDay: getDayHelper,
  },
  computed: {
    ...mapGetters({
      sessions: "getSessions",
      speakers: "getSpeakers",
    }),
  },
  mounted: function() {
    this.FETCH_SESSIONS();
    this.FETCH_SPEAKERS();
  },
  components: {
    SpeakerBox,
  },
};
</script>

<style lang="scss" scoped>
.speakers__container {
  padding: 60px 0 200px;
}

.speakers-wrapper {
  display: grid;
  padding: 60px 0 200px;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
}

.loader {
  font-size: 25px;
  padding: 80px 0;
}

/*  COMIC BOOK LAYOUT*/
/* CREDITS TO chris22smith : https://codepen.io/chris22smith/pen/MyBBOe*/
.comic {
  .speakers__listing {
    display: flex;
    flex-wrap: wrap;
    /*font-family: "Comic Sans", cursive;*/
    padding: 1vmin;
    justify-content: center;

    a {
      color: var(--black);
    }

    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
      /*filter: saturate(0);*/
    }
  }
}

.panel {
  background-color: #fff;
  border: solid 2px #000;
  box-shadow: 0 6px 15px -6px #000;
  display: inline-block;
  flex: 1 1;
  height: 300px;
  margin: 1vmin;
  overflow: hidden;
  position: relative;
  flex-basis: 200px;
  max-width: 300px;
}

.text {
  background-color: #fff;
  border: solid 2px var(--black);
  margin: 0;
  padding: 10px 10px 0px;
}

.top-left {
  left: -7px;
  position: absolute;
  top: -10px;
  transform: skew(-15deg);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 40px;
  max-width: 90%;
  padding-right: 10px;
  transition: all 0.4s ease-out;

  &:hover {
    height: auto;
    white-space: normal;
    transform: skew(0deg);
    transition: all 0.1s ease-in;
  }
}

.bottom-right {
  bottom: -2px;
  position: absolute;
  right: -6px;
  transform: skew(-15deg);
  /*font: "Comic Sans MS";*/
  padding: 5px 10px 2px 10px;
  background: var(--black);
  color: var(--white);
  font-family: var(--font-bangers);
  font-size: 21px;
}

.speech {
  background-color: #fff;
  border: solid 2px #000;
  border-radius: 12px;
  display: inline-block;
  margin: 0.1em;
  padding: 0.5em 1em;
  width: 50%;
  position: absolute;
}

.speech:before {
  border: solid 12px transparent;
  border-left: solid 12px #000;
  border-top: solid 12px #000;
  bottom: -24px;
  content: "";
  height: 0;
  left: 24px;
  position: absolute;
  transform: skew(-15deg);
  width: 0;
}

.speech:after {
  border: solid 10px transparent;
  border-left: solid 10px #fff;
  border-top: solid 10px #fff;
  bottom: -19px;
  content: "";
  height: 0;
  left: 27px;
  position: absolute;
  transform: skew(-15deg);
  width: 0;
}

.panel:nth-child(1) {
  flex-basis: 180px;
}
.panel:nth-child(2n + 1) {
  flex-basis: 200px;
}
.panel:nth-child(4n + 1) {
  flex-basis: 300px;
}

.panel:nth-child(3n + 1) {
  flex-basis: 220px;
}

/* background colours */

.panel:nth-child(4n + 1) {
  background-image: radial-gradient(circle, yellow, orange);
}

.panel:nth-child(4n + 2) {
  background-image: radial-gradient(circle, lightblue, deepskyblue);
}

.panel:nth-child(4n + 3) {
  background-image: radial-gradient(circle, palegreen, yellowgreen);
}

.panel:nth-child(4n + 4) {
  background-image: radial-gradient(circle, lightcoral, tomato);
}

@media (max-width: 414px) {
  .comic {
    justify-content: center;
  }
  .panel {
    max-width: 47%;
  }
}
</style>
