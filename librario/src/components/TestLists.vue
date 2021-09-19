<template>
    <div>
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
            booksList: false
        }
    },
    mounted(){
      this.teste()  
    },
    methods:{
        async teste(){
            let config = {
                headers: {
                    Authorization: 'Token d3e6a85d4b10ec2940821d7c41c52859ac6b3f82',
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