<template>
<div class="">


<b-card :title="event.name"
tag="article"
class="mb-2">

<img v-for="team in event.teams" :src="`images/`+team.name+`.png`" alt="" width="25%">

<p v-if="event.date" class="card-text">
  Fecha: {{event.date}}
</p>


<b-input-group v-if="!modal_mode" @input="bettingAmmount = $event.target.value" size="lg" prepend="$" append="">
  <b-form-input type="number" min="0"></b-form-input>
</b-input-group>

<!-- <p v-html="eventOk.teams"></p> -->

<p v-for="team in event.teams" class="card-text">
  {{team.name}}
 <b-alert v-if="!modal_mode" show variant="primary">Ganancia: {{(Math.round((bettingAmmount * team.payout) * 100) / 100)}} $</b-alert>
</p>

<p v-if="event.draw" class="card-text">Empate
  <b-alert v-if="!modal_mode" show variant="primary">Ganancia: {{(Math.round((bettingAmmount * event.payoutDraw) * 100) / 100)}} $</b-alert>
</p>


<b-button v-if="!modal_mode" variant="primary" @click="emitEvent(event)">Ver Mas</b-button>
<b-button v-if="$root.authuser" variant="primary">Apostar</b-button>

</b-card>

<div v-if="modal_mode" class="">

  <select class="" name="">
    <option v-if="event.draw" value="">Empate</option>
    <option v-for="team in event.teams" value="">Gana: {{team.name}}</option>
  </select>


</div>

</div>
</template>




<script>
import { EventBus } from '../event-bus.js';
export default {
  props: ["event", "modal_mode"],

  data () {
    return {
      bettingAmmount:'',
    }
  },
  methods: {
    emitEvent: function(event){
      EventBus.$emit('push-event', event);
      // console.log(event);
    },
  },
  computed: {

  },
  mounted() {
    // console.log(this.event.teams.playerA);
  }
}
</script>
