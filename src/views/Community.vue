<template>
<div>
  <div class="container__fw page page--community">
    <div class="title__section">
      <div class="sub-text">Communication and exchange with others</div>
      <h2 class="title">
        Networking & Community
      </h2>
    </div>

    <div class="content">
      <p>
        Take the chance to exchange with other attendees, speakers and partners,
        have some interesting conversations about software development, latest
        information gained during one of the presentations and let others know
        about your ups & downs in your projects.
      </p>

      <p>
        Our Partners are here for existing & new talents for either recruitment
        or internship or simply for a chit chat. Make the most out of it! Our
        Happy Hour is just the right moment to maybe make a new friend, seal
        some deals in a more relaxed atmosphere. Think about it.
      </p>

      <p>
        But above all, come and enjoy this vibrant atmosphere full of technology
        & activities!
      </p>
    </div>
  </div>

  <div class="container__large__fw page page--community--listing">
    <div class="content">
      <div class="communities--listing">
        <CommunityBlockGDG />
        <CommunityBlockFrontEndCoders />
        <CommunityBlockLUGM />
        <CommunityBlockMMC />
        <CommunityBlockOpenSUSEMU />
        <CommunityBlockUbuntuMU />
        <CommunityBlockPYMUG />
        <CommunityBlockGophersMU />
      </div>
    </div>
  </div>
</div>
</template>

<script>
import CommunityBlockGDG from '@/components/communities/CommunityBlockGDG'
import CommunityBlockFrontEndCoders from '@/components/communities/CommunityBlockFrontEndCoders'
import CommunityBlockGophersMU from '@/components/communities/CommunityBlockGophersMU'
import CommunityBlockLUGM from '@/components/communities/CommunityBlockLUGM'
import CommunityBlockMMC from '@/components/communities/CommunityBlockMMC'
import CommunityBlockOpenSUSEMU from '@/components/communities/CommunityBlockOpenSUSEMU'
import CommunityBlockPYMUG from '@/components/communities/CommunityBlockPYMUG'
import CommunityBlockUbuntuMU from '@/components/communities/CommunityBlockUbuntuMU'

export default {
  components: {
    CommunityBlockGDG,
    CommunityBlockFrontEndCoders,
    CommunityBlockGophersMU,
    CommunityBlockLUGM,
    CommunityBlockMMC,
    CommunityBlockOpenSUSEMU,
    CommunityBlockPYMUG,
    CommunityBlockUbuntuMU
  }
}
</script>

<style lang="scss">

.page {
  padding: 0px 10px;

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

.page--community--listing {
  padding-bottom: 200px;
}


.page--community {
  padding-top: 50px;
}

.usergroup-wrapper {
  display: flex;
}

.usergroup-logo-wrapper {
  margin-right: 2rem;
  display: flex;
  align-content: center;
  justify-content:center;
  flex-direction: column;
}

.usergroup-logo-wrapper img {
  width: 10rem;
}

.communities--listing {
  margin-top: 50px;
}

.community-block__container {
  display: grid;
  grid-template-columns: 2fr 0.8fr;
  grid-gap: 40px;
  margin-bottom: 40px;

  &:nth-child(even) {
    grid-template-columns: 0.8fr 2fr;

    .community__description {
      order: 1;
    }

    .community__logo {
      order: 0;
    }
  }

  .community__description {
    border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
    border: 2px solid #000;
    border-color: #000;
    padding: 0 40px;
    padding-bottom: 20px;
    box-shadow: 0 10px 20px 20px rgba(0, 0, 0, 0.05);
    
    .community__title {

    }
    .community__info {
      p {
        font-size: 16px;

        a {
          color: #102A43;
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
            width: 35px;
            height: 35px;
            border-radius: 25px;
            display: flex;
            align-items: center;
            justify-content: center;

            img {
              width: 18px;
            }
          }
        }
      }

    }
  }
  .community__logo {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;

    border-radius: 255px 15px 300px 15px/15px 225px 15px 255px;
    border: 2px solid #000;
    border-color: #000;

    img {
      max-width: 250px;
    }
  }
}

@media (max-width: 768px) {
  .community-block__container {
    display: grid;
    grid-template-columns: 1fr;

    &:nth-child(even) {
      grid-template-columns: 1fr;
    }

    .community__logo {
      display: none;
    }
  }
}
</style>
