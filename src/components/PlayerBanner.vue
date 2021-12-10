<template>
  <div class="player-banner">
    <img :src="this.img" alt="Player Image" width="200" />
    <div class="player-info">
      <div class="player-name margin-separated">
        <div class="title">Name</div>
        <div class="info">{{ playerInfo.fullName }}</div>
      </div>
      <div class="player-bio">
        <div class="margin-separated">
          <div class="title">Age</div>
          <div class="info">{{ playerInfo.ageDecimal }}</div>
        </div>
        <div class="margin-separated">
          <div class="title">Position</div>
          <div class="info">{{ this.parsePosition(playerInfo.position) }}</div>
        </div>
        <div class="margin-separated">
          <div class="title">Throws</div>
          <div class="info">{{ this.parseThrow(playerInfo.position) }}</div>
        </div>
      </div>
      <div class="player-contract-info">
        <div class="margin-separated">
          <div class="title">Org</div>
          <div class="info">{{ playerInfo.orgAbbr }}</div>
        </div>
        <div class="margin-separated">
          <div class="title">Service Time</div>
          <div class="info">{{ playerInfo.serviceTime }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    parseThrow: function (pos) {
      return pos[0] === "L" ? "Left" : "Right";
    },
    parsePosition: function (pos) {
      return pos[2] === "S" ? "Starter" : "Reliever";
    },
    setImage: function (imgId) {
      this.img = `https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:67:current.png/w_426,q_auto:best/v1/people/{imgid}/headshot/67/current`;
    },
  },
  data() {
    return {
      img: null,
    };
  },
  props: {
    playerInfo: Object,
  },
  watch: {
    playerId(value) {
      this.setImage(value.imgId);
    },
  },
  mounted() {
    this.setImage(this.playerInfo.imgId);
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/PlayerBanner.scss";
</style>