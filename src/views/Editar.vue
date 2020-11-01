<template>
    <div>
        <formulario-editar @editar-usuario="actualizar" :miembros="miembros"></formulario-editar>
    </div>
</template>

<script>
import FormularioEditar from "@/components/FormularioEditar"
export default {
    name: "Editar",

    components:{
    FormularioEditar
    },
    props:{
        miembros: Array
    },
    methods: {
        actualizar(datosNuevos){
            this.$emit("actualizar-miembro", datosNuevos);
        }
    },
}
</script>