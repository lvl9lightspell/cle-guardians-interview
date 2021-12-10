<template>
  <div id="app" v-if="playerData.length > 0">
    <Player
      v-if="selectedIndex !== null"
      :playerId="playerData[selectedIndex].playerId"
    />
    <div
      class="player-list"
      @mouseover="selectionDropdownOpen = true"
      @mouseleave="selectionDropdownOpen = false"
    >
      <div v-if="!selectionDropdownOpen">
        <PlayerList :playerInfo="playerData[selectedIndex]" />
      </div>
      <div v-if="selectionDropdownOpen">
        <PlayerList
          v-for="(player, index) in playerData"
          :key="player.playerId"
          :playerInfo="player"
          @click.native="
            selectedIndex = index;
            selectionDropdownOpen = false;
          "
        />
      </div>
    </div>
  </div>
</template>

<script>
import Player from "./components/Player";
import PlayerList from "./components/PlayerList";
import services from "./utility/services";
import { sortBy } from "lodash";

export default {
  name: "App",
  components: {
    Player,
    PlayerList,
  },
  data() {
    return {
      playerData: [],
      selectedIndex: null,
      selectionDropdownOpen: true,
    };
  },
  mounted() {
    services
      .getPlayerList()
      .then((response) => response.json())
      .then(
        (data) =>
          (this.playerData = sortBy(data.players, (player) => player.fullName))
      )
      .catch((err) => console.log(err));
  },
};
</script>

<style lang="scss">
@import "./scss/App.scss";
/* background: red; */
</style>
