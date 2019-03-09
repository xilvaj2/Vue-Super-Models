<template>
  <div><Cardset :cards="cards" /></div>
</template>

<script>
import Cardset from "@/components/Cardset";

export default {
  name: "latinas",
  components: { Cardset },
  data: () => {
    return {
      cards: [
        {
          id: 0,
          photo:
            "https://images.pexels.com/photos/1784386/pexels-photo-1784386.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=250",
          title: "Brazil"
        },
        {
          id: 1,
          photo:
            "https://images.pexels.com/photos/1731303/pexels-photo-1731303.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=250",
          title: "Florida"
        },
        {
          id: 2,
          photo:
            "https://images.pexels.com/photos/1649095/pexels-photo-1649095.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=250",
          title: "California"
        },
        {
          id: 3,
          photo:
            "https://images.pexels.com/photos/949380/pexels-photo-949380.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=250",
          title: "Puerto Rico"
        }
      ]
    };
  }
};
</script>
