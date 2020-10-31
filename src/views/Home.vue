<template>
    <div>
       <formulario-registro @agregar-miembro="enviarDato"></formulario-registro> 
    </div>
</template>

<script>
import FormularioRegristro from "@/components/FormularioRegristro";

export default {
    name: "Home",
    components: {
        FormularioRegristro
    },

    methods: {
        enviarDato(nuevoMiembro){
            this.$emit("agregar-dato",nuevoMiembro);
        }
    },
}
</script>