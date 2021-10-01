<template>
  <div class="container__fw page">
    <h1>Extras</h1>
    <div class="content">
      <h2>Caricature Artists</h2>
      <h3>Bhashnee Isnoo</h3>
      <p>
        <img class="caricature-artist" src="/images/artists/bhashnee-isnoo.jpg" />
        Hello! I’m Bhashnee Isnoo! I’m in my last year of University doing 
        a BSc (Hons) in Advertising and Visual Communication. I really enjoy 
        doing illustrations and I’m planning on doing that as a profession. 
        Wherever there is something related with Illustrations, Character 
        design or Fanarts, I’m there cuz illustration is love, illustration 
        is life!
      </p>

      <p>
        I believe that drawing and illustration is a journey, where we are 
        all constantly learning and getting better! I spend my free time watching 
        my favorites on YouTube. I enjoy watching tv shows/anime, doing miniatures 
        with clay and recently I’m enjoying the whole process of learning how to 
        tattoo.
      </p>

      <p>You can find me on <a href="https://www.instagram.com/bassart_/">Instagram.
      </a></p>

      <h2>Plush Dolls Artist</h2>
      <h3>Kyky Otaku</h3>
      <p>
        <img class="plushdoll-artist" src="/images/artists/kyky-otaku.jpg" />
        Hi, my name is Sabrina a.k.a Kyky (entrepreneur) 28 years old, art passionate 
        and owner of Kyky Otaku. 
      </p>

      <p>
        I've been studying art since secondary school till my 2 years at the M.I.E 
        for the teacher's diploma. But learning new skills never ends.
      </p>

      <p>
        Kyky Otaku came to life during my school years and officially became a 
        full time job since 5 years. Being self-employed requires a lot of work 
        but it's so rewarding in terms of personal development and from the smile, 
        love and laughter from my customers. 
      </p>

      <p>
        I create plush of all sorts, mainly human puppet (portrait doll) but 
        also illustrations, custom cards, dreamcatchers and now macrame.
      </p>

      <p>
        My aim is to help everyone in finding a unique gift to create a memorable 
        moment. 
      </p>

      <p>You can find me on <a href="https://www.facebook.com/kyky.artwork/">Facebook</a> and <a href="https://www.instagram.com/kyky_otaku/">Instagram</a>.</p>
    </div>
  </div>
</template>

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

  .caricature-artist {
    margin: 0 auto;
    padding-top: 0.5rem;
    padding-left: 0.5rem;
    max-width: 200px;
    width: 100%;
    float: right;
    display: inline;
  }

  .plushdoll-artist {
    margin: 0 auto;
    padding-top: 0.5rem;
    padding-right: 0.75rem;
    max-width: 200px;
    width: 100%;
    float: left;
    display: inline;
  }

}
</style>
