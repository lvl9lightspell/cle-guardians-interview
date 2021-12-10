<template>
  <div>
    <div class="pitch-table-header">
      <div class="pitch-table-entry">Pitch Nr</div>
      <div class="pitch-table-entry">Type</div>
      <div class="pitch-table-entry">Velocity</div>
    </div>
    <div
      class="pitch-table-row"
      v-for="(pitch, index) in pitches"
      :key="index"
      @click="pitch.selected = true"
    >
      <div class="pitch-table-entry">{{ pitch.pitchNum }}</div>
      <div class="pitch-table-entry">{{ pitch.pitchType }}</div>
      <div class="pitch-table-entry">{{ pitch.velo }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pitches: Array,
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/PitchTable.scss";
</style>