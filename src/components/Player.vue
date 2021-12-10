<template>
  <div class="player-page">
    <div class="player-banner">
      <PlayerBanner :playerInfo="playerInfo" />
    </div>
    <div class="pitch-table">
      <PitchTable :pitches="pitches" />
    </div>
    <div>
      <Panel title="All Pitches">
        <PitchPlot :pitches="pitches" />
      </Panel>
      <div v-for="pitchType in pitchTypes" :key="pitchType">
        <Panel :title="pitchType">
          <PitchPlot
            :pitches="pitches.filter((pitch) => pitch.pitchType === pitchType)"
          />
        </Panel>
      </div>
    </div>
  </div>
</template>
<script>
import PlayerBanner from "./PlayerBanner.vue";
import Panel from "./layout/Panel.vue";
import PitchPlot from "./plots/PitchPlot.vue";
import PitchTable from "./PitchTable.vue";
import services from "../utility/services";
export default {
  components: {
    PlayerBanner,
    Panel,
    PitchPlot,
    PitchTable,
  },
  methods: {
    setPlayerData: function (playerId) {
      services
        .getPlayerInfo(playerId)
        .then((response) => response.json())
        .then((data) => (this.playerInfo = data.playerDetail))
        .catch((err) => console.log(err));
    },
    setPitches: function (playerId) {
      services
        .getPitches(playerId)
        .then((response) => response.json())
        .then((data) => {
          this.pitchTypes = [];
          this.pitches = data.pitches.map((pitch) => {
            if (!this.pitchTypes.includes(pitch.pitchType)) {
              // set the array of pitch types for this player
              this.pitchTypes.push(pitch.pitchType);
            }
            // map API data to PitchPlot format
            return {
              x: pitch.x,
              y: pitch.y,
              stroke: "black",
              strokeWidth: 0.01,
              strokeOpacity: 1,
              selectedStroke: "gold",
              selectedStrokeWidth: 2,
              fillOpacity: 1,
              fill: pitch.pitchColor,
              radius: 1.5 / 12,
              isSelected: false,
              isSelectable: true,
              isVisible: true,
              pitchNum: pitch.pitchNum,
              pitchName: pitch.pitchName,
              pitchType: pitch.pitchType,
              velo: pitch.velo,
            };
          });
        })
        .catch((err) => console.log(err));
    },
  },
  data() {
    return {
      playerInfo: {},
      pitches: [],
      pitchTypes: [],
      // TODO: Order these consistently rather than each pitcher's being ordered by the order they appear in the data
    };
  },
  props: {
    playerId: Number,
  },
  watch: {
    playerId(value) {
      this.setPlayerData(value);
      this.setPitches(value);
    },
  },
  mounted() {
    this.setPlayerData(this.playerId);
    this.setPitches(this.playerId);
  },
};
</script>
<style lang="scss" scoped>
@import "../scss/Player.scss";
</style>