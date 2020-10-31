<template>
    <div>
        <formulario-registro @agregar-miembro="enviarDato"></formulario-registro> 
    </div>
</template>

<script>
import FormularioRegistro from "@/components/FormularioRegistro";

export default {
    name: "Home",
    components: {
        FormularioRegistro
    },

    methods: {
        enviarDato(nuevoMiembro){
            this.$emit("agregar-dato",nuevoMiembro);
        }
    },
}
</script>