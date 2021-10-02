<template>
    <div>
        <h1>Livros:</h1><button @click="teste()">Mostrar</button>
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
            booksList: [],
        }
    },

    methods:{
        async teste(){
            let config = {
                headers: {
                    Authorization: `Bearer ${this.userToken}`,
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