<template>
  <div class="row">
    <div class="col m6">
      <div class="card">
        <div class="card-image">
          <img :src="photo" /> <span class="card-title">{{ title }}</span>
          <a class="btn-floating halfway-fab waves-effect waves-light red">
            <i class="material-icons">add</i>
          </a>
        </div>
        <div class="card-content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At illum
            impedit excepturi obcaecati, reprehenderit expedita fugit aperiam
            nam autem vitae optio dolores! Adipisci magni dolore iure placeat
            at. Ipsum, blanditiis.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "card",
  props: ["photo", "title"]
};
</script>
