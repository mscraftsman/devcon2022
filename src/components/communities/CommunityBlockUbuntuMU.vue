<template>
  <div class="community-block__container">
    <div class="community__description">
      <h2 class="community__title">Ubuntu Mauritius</h2>
      <div class="community__info">
        <p>
          The Ubuntu LoCo team is undergoing a revival after being dormant for
          some years. Ubuntu users are welcomed to
          <a href="https://loco.ubuntu.com/teams/ubuntu-mu/"> join the group</a>
          on the Ubuntu loco team portal.
        </p>

        <div class="social__block">
          <div class="website__info">
            <a target="_blank" href="https://loco.ubuntu.com/teams/ubuntu-mu/">
              Website
            </a>
          </div>
          <!-- <div class="social__icons">
						<a href="" 
							target="_blank" 
							class="social__icon"
						>
							<img src="/icon/dark/twitter.svg" alt="Twitter" />
						</a>
						<a
							href="/"
							class="social__icon"
							target="_blank"
						>
							<img src="/icon/dark/linkedin.svg" alt="LinkedIn" />
						</a>
					</div> -->
        </div>
      </div>
    </div>
    <div class="community__logo">
      <img src="https://api.launchpad.net/1.0/~ubuntu-mu/logo" alt="" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.community-block__container {
  .community__description {
    background: #facdcd;
  }
  .community__logo {
    img {
      max-width: 100px;
    }
  }
}
</style>
