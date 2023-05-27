<template>
  <div class="site">
    <Blockqui :data="getData.Blockqui" />
    <Blockliter :data="getData.Blockliter" />

    <Blcokskills :data="getData.skills" />
    <Blcokproject :data="getData.Blcokproject" />
    <Blcokcontact :data="getData.Blcokcontact" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  layout: "front",
  computed: {
    ...mapGetters({
      getData: "getData",
    }),
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {},
};
</script>
<style scoped>
</style>


