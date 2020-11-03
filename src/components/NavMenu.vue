<template>
    <div>
        <router-link to="/" class="ruta">Home</router-link>
        <router-link to="/Login" class="ruta">Login</router-link>
        <router-link to="/Editar" class="ruta">Editar</router-link>
        <router-link to="/Eliminar" class="ruta">Eliminar</router-link>
        
    </div>
</template>

<script>

export default {
    name: 'NavMenu'
}
</script>

<style>
    .ruta{
        display: flex;
        flex-wrap: nowrap;
        margin: 0 auto;
        color: black;
        justify-content: center;
        text-decoration:none;
        flex-basis: auto;
    }
    .ruta:hover{
        color:papayawhip;
        background-color:steelblue ;
        transition:.3s;
    }
</style>