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
    methods:{
        login(){
            this.$emit('event-login', {'nombre':this.nombre,'dni':this.dni})
            if(this.nombre == nombre && this.dni == dni){
                <p>Ingreso con éxito.</p>
            }else{
                <p>Tu suscripción esta vencida.</p>
            }
        }
        
    }
}
</script>