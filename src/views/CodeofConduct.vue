<template>
  <div class="container__fw page">
    <h1>Code of Conduct</h1>
    <div class="content">
      <p>
        All attendees, speakers, sponsors and volunteers at our conference are
        required to agree with the following code of conduct. Organisers will
        enforce this code throughout the event. We expect cooperation from all
        participants to help ensure a safe environment for everybody.
      </p>

      <h2>Be excellent to each other.</h2>
      <img
        src="https://www.mscc.mu/content/images/2018/12/be-excellent-to-each-other.jpg"
        alt="Be excellent to each other"
      />
      <p>You have our contact details in the emails we've sent.</p>

      <h2>The Quick Version</h2>
      <p>
        Our conference is dedicated to providing a harassment-free conference
        experience for everyone, regardless of gender, gender identity and
        expression, age, sexual orientation, disability, physical appearance,
        body size, race, ethnicity, religion (or lack thereof), or technology
        choices. We do not tolerate harassment of conference participants in any
        form. Sexual language and imagery is not appropriate for any conference
        venue, including talks, workshops, parties, Twitter and other online
        media. Conference participants violating these rules may be sanctioned
        or expelled from the conference at the discretion of the conference
        organisers.
      </p>

      <h2>The Less Quick Version</h2>
      <p>
        Harassment includes offensive verbal comments related to gender, gender
        identity and expression, age, sexual orientation, disability, physical
        appearance, body size, race, ethnicity, religion, technology choices,
        sexual images in public spaces, deliberate intimidation, stalking,
        following, harassing photography or recording, sustained disruption of
        talks or other events, inappropriate physical contact, and unwelcome
        sexual attention.
      </p>
      <p>
        Participants asked to stop any harassing behavior are expected to comply
        immediately.
      </p>
      <p>
        Sponsors are also subject to the anti-harassment policy. In particular,
        sponsors should not use sexualized images, activities, or other
        material. Booth staff (including volunteers) should not use sexualized
        clothing/uniforms/costumes, or otherwise create a sexualized
        environment.
      </p>
      <p>
        If a participant engages in harassing behavior, the conference
        organisers may take any action they deem appropriate, including warning
        the offender or expulsion from the conference with no refund.
      </p>
      <p>
        If you are being harassed, notice that someone else is being harassed,
        or have any other concerns, please contact a member of conference staff
        immediately. Conference staff can be identified as they'll be wearing
        branded t-shirts.
      </p>
      <p>
        Conference staff will be happy to help participants contact hotel/venue
        security or local law enforcement, provide escorts, or otherwise assist
        those experiencing harassment to feel safe for the duration of the
        conference. We value your attendance.
      </p>
      <p>
        We expect participants to follow these rules at conference and workshop
        venues and conference-related social events
      </p>
      <p>
        Original source and credit:
        <a href="http://2012.jsconf.us/#/about"
          >http://2012.jsconf.us/#/about</a
        >
        &
        <a
          href="http://geekfeminism.wikia.com/wiki/Conference_anti-harassment/Policy"
          >The Ada Initiative</a
        >
      </p>
    </div>
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: "Code of Conduct",
  },
};
</script>

<style lang="scss" scoped>
.page {
  padding: 40px 10px;

  h1 {
    text-align: center;
    font-family: var(--font-bangers);
    font-size: 60px;
    letter-spacing: 2px;
  }

  h2 {
    font-family: var(--font-bangers);
    letter-spacing: 1px;
    font-size: 40px;
  }

  img {
    margin: 0 auto;
    max-width: 600px;
    width: 100%;
    display: block;
  }

  p {
    font-weight: 300;
    line-height: 28px;
    font-size: 18px;

    a {
      color: var(--titanium);
    }
  }
}
</style>
