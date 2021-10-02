<template>
  <div>
        <div id="nav">
            <router-link to="/login">Login</router-link> |
            <router-link to="/test">Test</router-link>
        </div>
        <router-view/>
  </div>
</template>

<script>
export default {
    name:'Main'
}
</script>