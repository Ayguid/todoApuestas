<template>
  <div class="">


        <b-carousel id="carousel1"
        style="text-shadow: 1px 1px 2px #333;"
        controls
        indicators
        background="#ababab"
        :interval="4000"
        img-width="1024"
        img-height="480"
        v-model="slide"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
        >

        <!-- Text slides with image -->
        <b-carousel-slide caption="Aposta YA"
        text=""
        img-src="images/carousel/futbol1.jpg"
        ></b-carousel-slide>

        <!-- Slides with custom text -->
        <b-carousel-slide caption="No seas Cagon"
         img-src="images/carousel/futbol2.jpg">
          <!-- <h1>Hello world!</h1> -->
        </b-carousel-slide>

        <!-- Slides with image only -->
        <!-- <b-carousel-slide img-src="images/carousel/futbol3.jpg">
      </b-carousel-slide> -->

      <!-- Slides with image only -->
      <!-- <b-carousel-slide img-src="./storage/carouselImages/futbol4.jpg">
    </b-carousel-slide> -->

    <!-- Slides with img slot -->
    <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
    <!-- <b-carousel-slide>
    <img slot="img" class=""
    src="storage/carouselImages/futbol1.jpg" alt="image slot">
  </b-carousel-slide> -->

  <!-- Slide with blank fluid image to maintain slide aspect ratio -->
  <!-- <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
  <p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
  eros felis, tincidunt a tincidunt eget, convallis vel est. Ut pellentesque
  ut lacus vel interdum.
</p>
</b-carousel-slide> -->

</b-carousel>


<!-- <p class="mt-4">
Slide #: {{ slide }}<br>
Sliding: {{ sliding }}
</p> -->






</div>
</template>




<script>
export default {
  data () {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  }
}
</script>
