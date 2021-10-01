<template>
  <div class="home">
    <IntroAnimationComponent />
    <TextComponent />
    <!-- <ScheduleComponent /> -->
    <FundingComponent />
  </div>
</template>

<script>
// import IntroComponent from "@/components/home/IntroComponent";
import IntroAnimationComponent from "@/components/home/IntroAnimationComponent";
// import ScheduleComponent from "@/components/home/ScheduleComponent";
import FundingComponent from "@/components/home/SponsorsComponent";
// import SponsorsComponent from "@/components/home/SponsorsComponentConf";
// import SpeakersComponent from "@/components/home/SpeakersComponent";
import TextComponent from "@/components/home/TextComponent";
// import RegisterComponent from "@/components/home/RegisterComponent";

export default {
  name: "Home",
  components: {
    // IntroComponent,
    IntroAnimationComponent,
    FundingComponent,
    TextComponent,
    // ScheduleComponent,
    // RegisterComponent
    // SpeakersComponent
  }
}

</script>
