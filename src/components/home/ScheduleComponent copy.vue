<template>
  <div class="schedule__container">
    <div class="schedule__superheros">
      <div class="container__fw">
        <div class="title__section">
          <div class="sub-text">What's on the menu</div>
          <div class="title">Schedule</div>
        </div>

        <div class="selection__day">
          <div class="block">
            <input type="radio" id="day-1" value="day-1" checked v-model="day">
            <label for="day-1">Day 1</label>
          </div>
          <div class="block">
            <input type="radio" id="day-2" value="day-2" v-model="day">
            <label for="day-2">Day 2</label>
          </div>
          <div class="block">
            <input type="radio" id="day-3" value="day-3" v-model="day">
            <label for="day-3">Day 3</label>
          </div>
        </div>

        <!-- <img class="schedule-wf" src="/schedule.jpg" alt /> -->
        
        <div class="day-1 day">
          <div class="time__column">
            <div class="time__slot">
              <span>09:00</span>
            </div>
            <div class="time__slot">
              <span>10:00</span>
            </div>
            <div class="time__slot">
              <span>11:00</span>
            </div>
            <div class="time__slot">
              <span>12:00</span>
            </div>
            <div class="time__slot">
              <span>13:00</span>
            </div>
            <div class="time__slot">
              <span>
                14:00
              </span>
            </div>
            <div class="time__slot">
              <span>15:00</span>
            </div>
            <div class="time__slot">
              <span>
                16:00
              </span>
            </div>
            <div class="time__slot">
              <span>17:00</span>
            </div>
          </div>
          <div class="schedules__column">
            <div class="schedule__row">
              <div class="schedule">
                <div class="schedule__data">
                  <h3>Lorem imsup dolor amet si</h3>
                </div>
                <div class="author__information">
                  <div class="image">
                    <img src="/profiles/image.jpeg" alt="">
                  </div>
                  <div class="info">Nirvan Pagooah</div>
                </div>
              </div>
              <div class="schedule"></div>
              <div class="schedule"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      day: 'day-1'
    }
  }
};
</script>

<style lang="scss" scoped>
.schedule__container {
  margin-bottom: 10vw;
  padding: 0;
  background: #fcfcfc;
  background: url("/radial.svg");
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;

  .schedule__superheros {
    width: 100%;
    background: url("/superhero-left.png"), url("/superhero-right.png");
    background-repeat: no-repeat;
    background-size: 200px, 200px;
    background-position: center left, bottom right;
  }

  .selection__day {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 70px;
    margin-bottom: 20px;
    grid-gap: 10px;

    input[type="radio"] {
      display: none;
    }

    .block {
      input[type="radio"]:checked + label {
        background: black;
        color: white;
        width: 100%;
        text-align: center;
      }

      label {
        width: 100%;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 60px;
        font-family: var(--font-bangers);
        font-size: 30px;
        border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
        border: solid #000;
        border-color: #000;

        &:hover {
          cursor: pointer;
        }
      }
    }
  }

  .title__section {
    margin-bottom: 40px;
  }

  .schedule-wf {
    width: 100%;
    margin-top: 20px;
  }
}

.day {
  display: grid;
  grid-template-columns: 50px 1fr;
  grid-template-rows: 1fr;
  grid-gap: 20px;

  .time__column {
    display: grid;
    grid-template-columns: 50px;
    grid-template-rows: repeat(9, 150px);
    grid-gap: 20px;

    .time__slot {
      background: white;
      color: black;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: var(--font-bangers);
      font-size: 24px;
      border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
      border: solid #000;
      border-color: #000;

      // &:nth-of-type(1n+0) {
      //   background: red;
      // }

      // &:nth-of-type(2n+0) {
      //   background: blue;
      // }

      // &:nth-of-type(3n+0) {
      //   background: yellow;
      // }
      // &:nth-of-type(4n+0) {
      //   background: green;
      // }

      // &:nth-of-type(3n+0) {
      //   background: yellow;
      // }
      // &:nth-of-type(3n+0) {
      //   background: green;
      // }


      span {
        transform: rotate(-90deg);
      }
    }
  }

  .schedules__column {
    width: 100%;

    .schedule__row {
      font-family: var(--font-bangers);
      width: 100%;
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 20px;
      display: grid;

      .schedule {
        padding: 15px;
        position: relative;
        height: 150px;
        border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
        border: solid #000;
        border-color: #000;

        .schedule__data {
          h3 {
            font-size: 23px;
            margin: 0;
          }
        }

        .author__information {
          display: flex;
          position: absolute;
          bottom: 30px;
          right: 0;
          width: 60%;
          background: black;
          height: 40px;

          .image {
            img {
              width: 50px;
              border-radius: 40px;
              position: relative;
              left: -20px;
              top: -5px;
            }
          }
          .info {
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
      }
    }
  }
}
</style>