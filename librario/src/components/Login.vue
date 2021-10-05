<template>
    <div class="panel">
        <div>
            <h1 style="margin-top:40px;">Librario</h1>
        </div>
        <div class="inputs">
            <input v-model="username" type="text">
            <input v-model="senha" type="text">
        </div>
        <div>
            <button @click="login()">Login</button>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
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
.panel{
    width: 300px;
    height: 250px;
    background-color: blue;
    margin: auto;
    margin-top: 200px;
}

.panel>div{
    margin-top:30px;
}

.inputs>input{
    margin-bottom: 10px;
}
</style>