<template>
    <div>
    <form @submit.prevent="agregarMiembro">
        <input type="text" v-model='nombre'>
        <input type="number" v-model='dni'>
        <input type="email" v-model="email">
        <input type="date" v-model='vencimiento'>
        <input type="submit"  value='Registrar'>
    </form>
       <p>{{mensaje}}</p> 
    </div>
</template>

<script>
export default {
    name:'FormularioRegistro',
    data(){
            return {
                nombre: "",
                dni: "",
                email: "",
                vencimiento: "",
                nuevoMiembro: {},
                }
            },

    methods: {
            agregarMiembro(){
               let nuevoMiembro = {
                    nombre: this.nombre,
                    dni: this.dni,
                    email: this.email,
                    vencimiento: this.vencimiento,
                    };
                    
                    
                    this.$emit("agregar-miembro",nuevoMiembro);
                    
                    this.nombre = "";
                    this.dni = "";
                    this.email = "";
                    this.vencimiento = "";
                   
                    this.mensaje = "El miembro se agrego correctamente.";

                    
                
                }
            
        },

            
    }
    

</script>