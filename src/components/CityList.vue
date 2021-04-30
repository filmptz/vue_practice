<template>
  <div class="citylist">
    <h4>{{msg}}</h4>
    <br>
    <div class="row">
    <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2"/>
    <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
    <div class="panel panel-info" >
      <div class="panel-heading">
        <h3 class="panel-title">List of Cities</h3>
      </div>
      <div class="panel-body" >
        <div class="row">
      <div class="col-sm-2 col-md-4" v-for="(cityName,key) in cities" :key='key'  >
        <div class="thumbnail">
         <img :src="`/src/assets/${cityName.image}`">
          <div class="caption">
            <p><b>{{cityName.name}}</b></p>
            <p class="citydetail">{{cityName.detail}}</p>
            <router-link :to="{ path:'info', name: 'Info' , params:{city: cityName.name} }">
                <button class="btn btn-success" role="button">Detail</button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
      </div>
    </div>
    </div>
    <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2"/>
    </div>
    <div class="row">
    <div class="container">
      <button class="btn btn-default" @click="logout()"><span class="glyphicon glyphicon-log-out" ></span> Logout</button>
    </div>
    </div>
    <br>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'CityList',
  data () {
    return {
      msg: 'EGCI427 Practice',
      city: null,
      cities: {},
      editName: [],
      errorMessgae: '',
      succeessMessage: ''
    }
  },
  created () {
    console.log('City List')
    firebase.database().ref('cities').on('value', (snapshot) => {
      this.cities = snapshot.val()
    })
  },
  methods: {
    logout() {
      console.log('logout')
       firebase.auth().signOut()
        .then(() => {
            this.$router.replace('/signin')
        })
        .catch(error => {
            alert(error.message)
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  /* display: inline-block; */
  margin: 0 10px;
}
a {
  color: #ffffff;
}
p.citydetail{
  text-align: justify;
}
</style>