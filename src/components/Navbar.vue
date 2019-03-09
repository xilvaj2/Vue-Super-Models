<template>
  <nav>
    <div class="nav-wrapper">
      <router-link to="/">Home</router-link>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><router-link to="/asians">Asians</router-link></li>
        <li><router-link to="/blonds">Blonds</router-link></li>
        <li><router-link to="/latinas">Latinas</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar"
};
</script>
