<template>
  <div class="Blcokskills">
    <div class="container-fluid py-5">
      <div class="container">
        <div class="text-center mx-auto mb-5" style="max-width: 640px">
          <h5
            class="d-inline-block text-primary text-uppercase border-bottom border-5"
          >
           {{data.titel}}
          </h5>
          <h1 class="display-4">
            {{data.sutitel}}
          </h1>
        </div>
        <div
          class="owl-carousel team-carousel position-relative owl-loaded owl-drag"
        >
          <div class="owl-stage-outer">
            <div
              class="owl-stage"
              style="
                transform: translate3d(-2682px, 0px, 0px);
                transition: all 1s ease 0s;
                width: 4694px;
              "
            >
              <div class="crousel">
                <VueSlickCarousel
                  :centerMode="true"
                  :arrows="true"
                  :centerPadding="3 + '%'"
                  :slidesToShow="2"
                  :responsive="[
                    {
                      breakpoint: 600,
                      settings: {
                        slidesToShow: 2,
                      },
                    },
                  ]"
                >
                  <div v-for="(item, index) in data.logane" :key="index">
                    <div class="item">
                      <div
                        class="owl-item cloned"
                        style="width: 625.5px; margin-right: 45px"
                      >
                        <div class="team-item">
                          <div class="row g-0 bg-light rounded overflow-hidden">
                            <div class="col-12 col-sm-5 h-100">
                              <img
                                class="img-fluid h-100"
                                src="./img/team-2.jpg"
                                style="object-fit: cover"
                              />
                            </div>
                            <div
                              class="col-12 col-sm-7 h-100 d-flex flex-column"
                            >
                              <div class="mt-auto p-4">
                                <h3> {{item.titel}} </h3>
                                <h6
                                  class="fw-normal fst-italic text-primary mb-4"
                                >
                               {{item.sutitel}}
                                </h6>
                                <p class="m-0">
                              {{item.text}}
                                </p>
                              </div>
                              <div class="d-flex mt-auto border-top p-4">
                                <a
                                  class="btn btn-lg btn-primary btn-lg-square rounded-circle me-3"
                                  href="#"
                                  ><i class="fab fa-twitter"></i
                                ></a>
                                <a
                                  class="btn btn-lg btn-primary btn-lg-square rounded-circle me-3"
                                  href="#"
                                  ><i class="fab fa-facebook-f"></i
                                ></a>
                                <a
                                  class="btn btn-lg btn-primary btn-lg-square rounded-circle"
                                  href="#"
                                  ><i class="fab fa-linkedin-in"></i
                                ></a>
                              </div>
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
      </div>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  props:["data"],
  components: { VueSlickCarousel },
};
</script>
<style scoped>
.Blcokskills .item {
  padding: 20px;
}
</style>