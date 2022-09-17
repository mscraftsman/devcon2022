<template>
  <div class="speaker__container">
    <div class="container__fw">
      <div class="speaker__wrapper">
        SPEAKER SINGLE

        {{ speaker }}
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
    console.log(this.$route.params.id);

    if (this.$route.params.id == null) {
      console.error("Error");
    } else {
      this.speaker_id = this.$route.params.id;
      this.processSpeaker(this.speaker_id);
    }

    if (this.speakers.length === 0) {
      this.FETCH_SESSIONS();
      this.FETCH_SPEAKERS();
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
