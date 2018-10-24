<template>
  <div id='app'>
    <header>
      <h1>Welcome to AquaBot!</h1>
    </header>
    <main>
      <ul class='uk-nav'>
        <router-link
          v-for="page in pages"
          :to='{ name: page}'>
          <a>
            {{page}}
          </a>
        </router-link>
      </ul>
      <div class='content'>
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>

<script>

  export default {
    name: 'App',
    data () {
      return {
        pages: ['dashboard', 'commands', 'timers']
      };
    }
  }
</script>

<style lang='sass'>
  @import "../node_modules/uikit/src/less/uikit.less"
</style>
