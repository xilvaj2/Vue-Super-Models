<template>
  <div><Cardset :cards="cards" /></div>
</template>

<script>
import Cardset from "@/components/Cardset";

export default {
  name: "asians",
  components: { Cardset },
  data: () => {
    return {
      cards: [
        {
          id: 0,
          photo:
            "https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=250",
          title: "Japan"
        },
        {
          id: 1,
          photo:
            "https://images.pexels.com/photos/1372134/pexels-photo-1372134.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=250",
          title: "Taiwan"
        },
        {
          id: 2,
          photo:
            "https://images.pexels.com/photos/921646/pexels-photo-921646.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=250",
          title: "Korea"
        },
        {
          id: 3,
          photo:
            "https://images.pexels.com/photos/1406764/pexels-photo-1406764.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=250",
          title: "Thailand"
        }
      ]
    };
  }
};
</script>
