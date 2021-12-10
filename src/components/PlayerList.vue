<template>
  <div class="table">
    <div class="colName">
      {{ playerInfo.fullName }}
    </div>
    <div class="colPos">
      {{ playerInfo.position }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    playerInfo: Object,
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/PlayerList.scss";
</style>