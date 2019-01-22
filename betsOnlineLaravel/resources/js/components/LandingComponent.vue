<template>
  <div class="">

    <b-container>

      <b-row >
        <b-col lg="12">
          <landingcarousel-component ></landingcarousel-component>
        </b-col>
      </b-row>

      <b-card-group columns>
        <event-component v-for="event in events" :key="event.id" :event="event "></event-component>
      </b-card-group>

    </b-container>


    <eventmodal-component id="modal" :modalevent="modalevent" ></eventmodal-component>


  </div>
</template>

<script>
import { EventBus } from '../event-bus.js';
export default {
  data () {
    return {
      modalevent:'',
      events:'',
    }
  },
  methods: {
    showEvent: function(event){
      console.log(event);
      var modal = document.getElementById('modal');
      modal.style.display = "block";
      var span = document.getElementsByClassName("close")[0];
      span.onclick = function() {
        modal.style.display = "none";
      }
      this.modalevent=event;
    },
    getEvents: function(){
      axios.get('eventList.json').then((response) => {
        this.events = response.data;
      });
    },
  },
  mounted() {
    // console.log(this.$root.authuser);
    EventBus.$on('push-event', this.showEvent);
    this.getEvents();
  }
}
</script>
