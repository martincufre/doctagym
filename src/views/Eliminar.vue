<template>
    <div>
      <select @change="selectMember" v-model="selectedMember">
            <option value="">Elegí un miembro</option>
            <option :value="pos" v-for="(miembro,pos) in miembros" :key="miembro.nombre" >{{miembro.nombre}}</option>
             <input type="submit">   
        </select>
        <form @submit.prevent="eliminarMiembro" @click='eliminar(key)'>
            <input type="text" v-model='nombre'>
            <input type="number" v-model='dni'>
            <input type="email" v-model="email">
            <input type="date" v-model='vencimiento'>
            <input type="submit"  value='Eliminar'>
        </form>    
    </div>
</template>

<script>
export default {
    name: "Eliminar",
    props:{
        miembros: Array
    },
    data(){
        return{
            nombre: "",
            dni: "",
            email:"",
            vencimiento: "",
            selectedMember: ""
        }
    },
    methods :{
        selectMember(){
            this.nombre= this.miembros[this.selectedMember].nombre;
            this.dni= this.miembros[this.selectedMember].dni;
            this.email= this.miembros[this.selectedMember].email;
            this.vencimiento= this.miembros[this.selectedMember].vencimiento;
        
        },
        eliminar(key){
            this.$emit('eliminar-miembro',key);
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