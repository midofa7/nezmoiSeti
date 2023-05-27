<template>
  <div class="Blockliter">
    <div class="container-fluid py-5">
      <div class="container">
        <div class="row gx-5">
          <div class="col-lg-5 mb-5 mb-lg-0" style="min-height: 500px">
            <div class="position-relative h-100">
              <img
                class="position-absolute w-100 h-100 rounded"
                src="./img/about.jpg"
                style="object-fit: cover"
              />
            </div>
          </div>
          <div class="col-lg-7">
            <div class="mb-4">
              <h5
                class="d-inline-block text-primary text-uppercase border-bottom border-5"
              >
                {{ data.tag }}
              </h5>
              <h1 class="display-4">
                {{ data.titel }}
              </h1>
            </div>
            <p>
              {{ data.text }}
            </p>
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