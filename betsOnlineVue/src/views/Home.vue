<template>
  <div class="container">
    <h2>Home</h2>



    <b-container>
      <b-card-group columns>
        <event-component v-for="event in events" :key="event.id" :event="event "></event-component>
      </b-card-group>
    </b-container>


  </div>
</template>

<script>


export default {

  data () {
    return {
      events:''
    }
  },


  methods: {
    getEvents: function(){
      axios.get('http://localhost:8000/eventList.json').then((response) => {
            this.events = response.data;
            // console.log(response);
      });
    },
  },



  mounted() {
    this.getEvents();
  }




}
</script>
