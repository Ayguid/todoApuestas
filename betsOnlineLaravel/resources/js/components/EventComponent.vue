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

<b-input-group v-on:input="bettingAmmount = $event.target.value" size="lg" prepend="$" append=".00">
  <b-form-input></b-form-input>
</b-input-group>


<p v-if="event.playerA" class="card-text">
  JugadorA: {{event.playerA}}<br>
  payoutA: {{event.payoutA}}<br>
  earn: {{(Math.round((bettingAmmount * event.payoutA) * 100) / 100)}}
</p>
<p v-if="event.playerB" class="card-text">
  JugadorB: {{event.playerB}}<br>
  payoutB: {{event.payoutB}}<br>
  earn: {{(Math.round((bettingAmmount * event.payoutB) * 100) / 100)}}
</p>
<p v-if="event.payoutDraw" class="card-text">
  Empate: {{event.payoutDraw}}
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
  mounted() {
    console.log('this.events')
  }
}
</script>
