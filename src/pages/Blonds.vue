<template>
  <div><Cardset :cards="cards" /></div>
</template>

<script>
import Cardset from "@/components/Cardset";

export default {
  name: "blonds",
  components: { Cardset },
  data: () => {
    return {
      cards: [
        {
          id: 0,
          photo:
            "https://images.pexels.com/photos/157728/straw-field-hair-nature-157728.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          title: "Sweden"
        },
        {
          id: 1,
          photo:
            "https://images.pexels.com/photos/128881/beautiful-girl-smiling-da-128881.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          title: "Denmark"
        },
        {
          id: 2,
          photo:
            "https://images.pexels.com/photos/769598/pexels-photo-769598.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          title: "Belarus"
        }
      ]
    };
  }
};
</script>
