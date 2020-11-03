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
            
            this.nombre= '';
            this.dni=''
        }
        
        
    }
}
</script>

<style scoped>
    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        align-content: center;
        margin: 0 auto;
    }
    input{
        margin-bottom: 10px;
        border-radius: 5px;
        height: 40px;
        width: 500px;
    }

</style>