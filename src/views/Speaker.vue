<template>
  <div class="speaker__container">
    <div class="container__fw">
      <div class="speaker__wrapper">
        <pre>
					{{ speaker }}
				</pre
        >

        <div class="speaker__profile" v-if="speaker != null">
          <div class="picture">
            <img
              :src="speaker.profilePicture"
              :alt="speaker.firstName + ' ' + speaker.lastName"
            />
          </div>
          <div class="bio">
            <h2 class="name">{{ speaker.firstName }} {{ speaker.lastName }}</h2>
            <div class="tagline"></div>
          </div>
          <div class="information">
            <p v-html="speaker.bio"></p>
          </div>
        </div>

        <div class="social">
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
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      speaker_id: null,
      speaker: null,
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
.speaker__container {
  padding: 100px 0;

  .speaker__wrapper {
    background: var(--platinium);
    padding: 20px;
  }
}
</style>
