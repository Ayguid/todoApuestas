<template>
  <div class="container">
    Home Landing Pages


    <!-- {{events}} -->

    <b-container>



      <b-card-group columns>
        <event-component v-for="event in events" :key="event.id" :event="event "></event-component>
      </b-card-group>

    </b-container>


  </div>
</template>

<script>


export default {
  name: 'Home',
  data () {
    return {
      events:''
    }
  },


  methods: {

    getEvents: function(){
      axios.get('http://localhost:8000/eventList.json').then((response) => {
            // console.log(response);
            this.events = response.data;
      });
    },
  },



  mounted() {
    this.getEvents();
  }




}
</script>
