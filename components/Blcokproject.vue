<template>
  <div class="Blcokproject">
    <div class="container-fluid py-5">
      <div class="container">
        <div class="text-center mx-auto mb-5" style="max-width: 500px">
          <h5
            class="d-inline-block text-primary text-uppercase border-bottom border-5"
          >
            {{ data.titel }}
          </h5>
          <h1 class="display-4">
            {{ data.text }}
          </h1>
        </div>
        <div class="crousel">
          <VueSlickCarousel
            :centerMode="true"
            :arrows="true"
            :centerPadding="3 + '%'"
            :slidesToShow="3"
            :responsive="[
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                },
              },
            ]"
          >
            <div v-for="(item, index) in data.preject" :key="index">
              <div class="item">
                <div class="">
                  <div class="bg-light rounded overflow-hidden">
                    <img
                      class="img-fluid w-100"
                      src="./img/blog-2.jpg"
                      alt=""
                    />
                    <div class="p-4">
                      <a class="h3 d-block mb-3" href="">
                        {{ item.titel }}
                      </a>
                      <p class="m-0">
                        {{ item.text }}
                      </p>
                    </div>
                    <div class="d-flex justify-content-between border-top p-4">
                      <div class="d-flex align-items-center">
                        <img
                          class="rounded-circle me-2"
                          src="./img/user.jpg"
                          width="25"
                          height="25"
                          alt=""
                        />
                        <small>{{ item.link.text }}</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </VueSlickCarousel>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  props: ["data"],
  components: { VueSlickCarousel },
};
</script>
<style scoped>
.Blcokproject .item {
  padding: 20px;
}
</style>