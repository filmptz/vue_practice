// src/compnents/SignUp.vue
<template>
    <div class="row">
        <h2>Sign Up</h2>
        <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-md-offset-3"/>
        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-md-offset-3">

            <input type="email" class="form-control" placeholder="email" v-model="formData.email">
            <br>
            <input type="password" class="form-control" placeholder="password" v-model="formData.password">
            <br>
            <button class="btn btn-success"  @click="signUp()">SignUp</button>
        </div>
    </div>
</template>
<script>
import firebase from 'firebase'

export default {
  name: 'SignUp',
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
    signUp () {
         firebase.auth().createUserWithEmailAndPassword(this.formData.email,this.this.formData.password)
        .then( user => {
          this.$router.replace('/cities')
          this.successMessage = 'Success'
        })
        .catch(error => {
          alert(error.message)
          this.errorMessage=error.message
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