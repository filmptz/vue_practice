<template>
    <div class="row">
        <h2>Sign In</h2>
        <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-md-offset-3"/>
        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-md-offset-3">
            <input type="email" class="form-control" placeholder="email" v-model="formData.email">
            <br>
            <input type="password" class="form-control" placeholder="password" @keyup.enter="signIn()" v-model="formData.password">
            <br>
            <button class="btn btn-success btn-block full-width" @click="signIn()" >Signin</button>
        </div>
    </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'SignIn',
  data () {
    return {
      formData: {
        email: '',
        password: ''
      },
        errorMessgae: '',
        succeessMessage: ''
    }
  },
  methods: {
    signIn () {
      console.log('Signin')
       firebase.auth().signInWithEmailAndPassword(this.formData.email, this.formData.password)
                .then( user =>{
                   this.$router.replace('/cities')
                    this.succeessMessage = "Success" 
                })
                .catch(error =>{
                    alert(error.message)
                    this.errorMessgae = error.message
                })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>