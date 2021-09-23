<template>
    <div>
        <h1>Login:</h1>
        <input v-model="login" type="text">
        <input v-model="senha" type="text">

        <button @click="loginToken()">Login</button>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name:'Test',
    data(){
        return{
            login: '',
            senha:'',
            userToken: false,
        }
    },

    methods:{
        async loginToken(){
            const x = await axios.post('http://127.0.0.1:8000/api-token/',{username:this.login, password:this.senha})
            console.log(x)
            this.userToken = x.data.token
        },
    }
}
</script>

<style>

</style>