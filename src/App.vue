<template lang="pug">
#nav
  p {{ $t('general.testText') }}
  router-link(to="/") Home |
  router-link(to="/about") About
  router-view
</template>

<style lang="scss">
@use "./styles/main";
</style>
