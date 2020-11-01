<template>
    <div>
    <form @submit.prevent="login">
        <input type="text" v-model='nombre'>
        <input type="number" v-model='dni'>
        <input type="submit" value='Ingresar'>
    </form>  
    </div>
</template>

<script>
export default {
    name:'Login',
    data() {
        return {
            nombre: '',
            dni: '',
        }
    },
    props:{
        listaMiembros: Array
    },
    methods:{
        login(){
            this.$emit('event-login', this.nombre, this.dni)
            
            this.nombre= '';
            this.dni='';
        }
        
        
    }
}
</script>