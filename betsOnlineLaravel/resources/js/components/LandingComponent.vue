<template>
  <div class="">



    <b-container>
      <b-row >
        
        <b-col lg="12">
          <landingcarousel-component ></landingcarousel-component>
        </b-col>

      </b-row>
    </b-container>






    <b-container>
      <b-card-group columns>
        <event-component v-for="event in events" :key="event.id" :event="event"></event-component>
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
      events:{
        what:{
          id:1,
          name:'SemiFinal Libertadores',
          date:"2019-01-01",
          time:"12:00:00",
          location:"Bombonera",
          playerA:"Boca",
          playerB:"River",
          payoutA:1.2,
          payoutB:1.4,
          payoutDraw:1.5,
          resultA:"",
          resultB:"",
          status:true,
          statusDetail:"Open for bets"
        },
        what2:{
          id:2,
          name:'Revancha Libertadores',
          date:"2019-01-08",
          time:"14:30:00",
          location:"Ferro",
          playerA:"Independiente",
          playerB:"Rosario Central",
          payoutA:1.1,
          payoutB:1.3,
          payoutDraw:1.4,
          resultA:"",
          resultB:"",
          status:true,
          statusDetail:"Open for bets"
        },
        what3:{
          id:3,
          name:'Octavos Libertadores',
          date:"2019-01-01",
          time:"18:00:00",
          location:"Estadio Unico",
          playerA:"Lanus",
          playerB:"Racing",
          payoutA:1.3,
          payoutB:1.1,
          payoutDraw:1.2,
          resultA:"",
          resultB:"",
          status:true,
          statusDetail:"Open for bets"
        },
        what4:{
          id:4,
          name:'Cuartos Libertadores',
          date:"2019-02-04",
          time:"12:00:00",
          location:"Bombonera",
          playerA:"Velez",
          playerB:"Chacarita",
          payoutA:1.1,
          payoutB:1.6,
          payoutDraw:1.5,
          resultA:"",
          resultB:"",
          status:true,
          statusDetail:"Open for bets"
        },
        what5:{
          id:5,
          name:'Final Libertadores',
          date:"2019-01-25",
          time:"12:00:00",
          location:"Monumental",
          playerA:"Gimnasia",
          playerB:"Ferro",
          payoutA:1.4,
          payoutB:1.5,
          payoutDraw:1.8,
          resultA:"",
          resultB:"",
          status:true,
          statusDetail:"Open for bets"
        },
      },

    }
  },
  methods: {
    showEvent: function(event){
      // console.log(event);
      var modal = document.getElementById('modal');
      modal.style.display = "block";
      var span = document.getElementsByClassName("close")[0];
      span.onclick = function() {
        modal.style.display = "none";
      }
      this.modalevent=event;
    },

  },
  mounted() {
    EventBus.$on('push-event', this.showEvent);
  }
}
</script>
