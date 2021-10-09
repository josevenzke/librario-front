<template>
<div class="container">
    <div class="card">
        <div class="card-header">
            Featured
        </div>
        <div class="card-body">
            <h5 class="card-title">Special title treatment</h5>
            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios'
import "bootstrap/dist/css/bootstrap.min.css";

export default {
    name:'Test',
    data(){
        return{
            username: '',
            senha:'',
        }
    },

    methods:{
        async login(){
            const x = await axios.post('http://127.0.0.1:8000/api/token/',{username:this.username, password:this.senha})
            console.log(x)
            this.$store.state.token = x.data.access
            this.$router.push({ path: '/' })
        },
    }
}
</script>

<style>

</style>