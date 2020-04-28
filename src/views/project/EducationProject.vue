<template>
  <div class="landingPage">
    <div class="education-project">
      <h1>Wisata Edukasi</h1>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.scrollToTop()
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0); 
    }
  }
}
</script>