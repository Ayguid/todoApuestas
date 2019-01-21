<template>
  <!--
  img-src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSu2GnYwFWcHQIuurHch4V5P5ss4m5WybO4XQ9x6wACKywij2h"
  img-alt="Image"
  img-top
  img-fluid
-->
<b-card :title="event.name"
tag="article"
class="mb-2">
<img :src="`images/`+event.playerA+`.png`" alt="" width="25%">
<img :src="`images/`+event.playerB+`.png`" alt="" width="25%">
<p v-if="event.date" class="card-text">
  Fecha: {{event.date}}
</p>

<b-input-group @input="bettingAmmount = $event.target.value" size="lg" prepend="$" append=".00">
  <b-form-input type="number" min="0"></b-form-input>
</b-input-group>


<p v-if="event.playerA" class="card-text">
  JugadorA: {{event.playerA}}<br>
  Indice: {{event.payoutA}}<br>
  <b-alert show variant="primary">Ganancia: {{(Math.round((bettingAmmount * event.payoutA) * 100) / 100)}} $</b-alert>
</p>
<p v-if="event.playerB" class="card-text">
  JugadorB: {{event.playerB}}<br>
  Indice: {{event.payoutB}}<br>
  <b-alert show variant="primary">Ganancia: {{(Math.round((bettingAmmount * event.payoutB) * 100) / 100)}} $</b-alert>
</p>


<b-button v-if="!modal_mode" variant="primary" @click="emitEvent(event)">Ver Mas</b-button>

</b-card>

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
    },

  },
//   computed: {
//   // a computed getter
//   reversedMessage: function () {
//     // `this` points to the vm instance
//     return this.message.split('').reverse().join('')
//   }
// },
  mounted() {
    console.log('this.events')
  }
}
</script>
