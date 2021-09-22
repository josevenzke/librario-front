<template>
    <div>
        <h1>Login:</h1>
        <input v-model="login" type="text">
        <input v-model="senha" type="text">

        <button @click="loginToken()">Login</button>

        <h1>Livros:</h1>
        <ul>
            <li v-for="book in booksList" :key="book">{{book}}</li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name:'Test',
    data(){
        return{
            booksList: false,
            login: '',
            senha:'',
        }
    },
    mounted(){
      this.teste()  
    },
    methods:{
        async loginToken(){
            const x = await axios.post('http://127.0.0.1:8000/api-token/',{username:this.login, password:this.senha})
            console.log(x)
        },
        async teste(){
            let config = {
                headers: {
                    Authorization: process.env.VUE_APP_API_KEY,
                }
            }

            const x = await axios.get('http://127.0.0.1:8000/api/list-books/',config)
            console.log(x)
            const books = x.data.books
            this.booksList = books
        }
    }
}
</script>

<style scoped>

</style>