<template>
  <div class="landingPage">
    <div class="electric">
      <h1>Electric</h1>
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