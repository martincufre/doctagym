<template>
    <div>
        <select @change="selectMember" v-model="selectedMember">
            <option value="">Elegí un miembro</option>
            <option :value="pos" v-for="(miembro,pos) in miembros" :key="miembro.dni"></option>
                {{miembro.nombre}}
        </select>
        <form @submit.prevent="editarMiembro">
            <input type="text" v-model='nombre'>
            <input type="number" v-model='dni'>
            <input type="email" v-model="email">
            <input type="date" v-model='vencimiento'>
            <input type="submit"  value='Editar'>
        </form>
    </div>
</template>

<script>
export default {
    name: "FormularioEditar",

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
    methods: {
        selectMember(){
            this.nombre= this.miembros[this.selectedMember].nombre;
            this.dni= this.miembros[this.selectedMember].dni;
            this.email= this.miembros[this.selectedMember].email;
            this.vencimiento= this.miembros[this.selectedMember].vencimiento;
        },
        editarMiembro(){
            let miembroActualizado = {
                    nombre: this.nombre,
                    dni: this.dni,
                    email: this.email,
                    vencimiento: this.vencimiento,
                    }
            let datosNuevos ={
                posicion: this.selectedMember,
                miembro: miembroActualizado
            }    
            
            this.$emit("editar-usuario", datosNuevos);
        }
    },
    
}
</script>