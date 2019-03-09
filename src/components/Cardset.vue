<template>
  <div class="cardset">
    <Card
      v-for="{ id, photo, title } in cards"
      :key="id"
      :photo="photo"
      :title="title"
    />
  </div>
</template>

<script>
import Card from "./Card";

export default {
  name: "cardset",
  props: ["cards"],
  components: { Card }
};
</script>

<style>
.cardset {
  display: grid;
  grid-template-columns: auto auto;
}
</style>
