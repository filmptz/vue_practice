<template>
<div class="Info">
  <div>

  <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2"/>
  <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
    <div  v-for="(Weather,key) in Weathers.list" :key='key'  class="panel panel-info" >
        <div class="panel-heading">
          <h3 class="panel-title">{{Weather.name}}</h3>
        </div>
        <div class="panel-body">
          <div class="row">
            <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              <p><b>Location:</b> ( {{Weather.coord.lat}},{{Weather.coord.lon}})</p>
              <p><b>Pressure:</b> {{Weather.main.pressure}}</p>
              <p><b>Main Weather:</b>{{Weather.weather[0].main}}</p>
            </div>
            <div class="col-xs-86col-sm-6 col-md-6 col-lg-6">
              <p><b>Temperature:</b> {{Weather.main.temp}}</p>
              <p><b>Humidity:</b> {{Weather.main.humidity}}</p>
              <p><b>Description:</b> {{Weather.weather[0].description}}</p>
            </div>
          </div>
          <div class="row">
            <img :src="`http://openweathermap.org/img/w/${Weather.weather[0].icon}.png`" alt="symbol">
          </div>
        </div>
      </div>
  </div>

  <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2"/>
  </div>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  name: 'Weather',
  data () {
    return {
      Weathers: {},
      city: this.$route.params.city,
    }
  },
  created () {
    console.log('Info')
    axios.get('http://api.openweathermap.org/data/2.5/find?q='+this.city+'&type=accurate&appid=769dabcf096daea8242da2d678258c3a&units=metric')
        .then((response)=>{
             console.log(response.data)
             this.Weathers = response.data // .data is default prop of response
         })
         .catch((error)=>{
             console.log(error) // should have table name of msg Error
         })
  }
}
</script>
<style scoped>
p{
  text-align: left;
}
</style>