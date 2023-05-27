<template>
  <div
    :dir="this.$i18n.locale == 'ar' ? 'rtl' : 'ltr'"
    :class="this.$i18n.locale"
  >
    <Mune />
    <Nuxt />
    <Blockfooter />
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
