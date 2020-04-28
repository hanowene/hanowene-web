<template>
  <div class="about">
    <!-- <h1>This is an about page</h1> -->
    <div>
      Tentang Kami
    </div>
    <div>
      <router-link to="/our-team">
        <a href="#"  @click="this.handleInPage">
          Tim Kami
        </a>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleInPage() {
      this.$store.commit('changeInPage')
    }
  }
}
</script>