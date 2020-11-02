<template>
    <div>
      <select @change="selectMember" v-model="selectedMember">
            <option value="">Elegí un miembro</option>
            <option :value="pos" v-for="(miembro,pos) in miembros" :key="miembro.nombre" @click='eliminar(key)'></option>
                {{miembro.nombre}}
        </select>    
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