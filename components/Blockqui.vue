<template>
  <div class="Blockqui">
    <div class="container-fluid bg-primary py-5 mb-5 hero-header">
      <div class="container py-5">
        <div class="row justify-content-start">
          <div class="col-lg-8 text-center text-lg-start">
            <h5
              class="d-inline-block text-primary text-uppercase border-bottom border-5"
              style="border-color: rgba(256, 256, 256, 0.3) !important"
            >
              {{ data.titel }}
            </h5>
            <h1 class="display-1 text-white mb-md-4">
              {{ data.text }}
            </h1>
            <div class="pt-2">
              <a
                href=""
                class="btn btn-light rounded-pill py-md-3 px-md-5 mx-2"
                >{{ data.link.text }}</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["data"],
};
</script>

<style>
</style>