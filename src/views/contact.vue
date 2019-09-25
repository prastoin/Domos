<template>
  <div class="root">
      <h1>Contact</h1>
      <form class="vueForm" @submit.prevent="submit">
          <div class="errorMessage">
            <p v-show="!email.valid">Oh, please entere a valid email address</p>
          </div>
      </form>
  </div>
</template>

<script>
export default {
    name: 'contact',
    methods: {

    }
}
</script>

<style>
.root {
    width: 100%;
    height: 100%;
}
</style>