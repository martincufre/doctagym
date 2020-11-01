<template>
  <div id="app">
    <encabezado-gim>DoctaGYM</encabezado-gim>
    <router-view @agregar-dato="addMember" />

    {{listaMiembros}}
  
  
  <div>
    <p v-if="vencimiento >= fecha">Ingreso con éxito</p>
    <p v-else>Tu suscripcion esta vencida</p>
  </div>


  </div>


  
</template>

<script>
import EncabezadoGim from "@/components/EncabezadoGim";


export default {
  name: 'App',
  components: {
          EncabezadoGim,
        },

  methods: {
    addMember(nuevoMiembro){
      this.listaMiembros.push(nuevoMiembro);
    },

    ingreso(usuario){
      let login = this.listaMiembros.find(miembro=>{
        return usuario.nombre == miembro.nombre && usuario.dni == miembro.dni;
      })
      let fecha = new Date();

      let vencimiento = new Date(`${login.vencimiento} 00:00`); 

    }  
  },
 
  data() {
        return{
              listaMiembros : [{
                                    "nombre": "Juan Pérez",
                                    "dni": 12312312,
                                    "email": "juanperez@gmail.com",
                                    "vencimiento": "2020-09-10"
                                },
                                {
                                    "nombre": "Manjula Pérez",
                                    "dni": 36936936,
                                    "email": "manjulaperez@gmail.com",
                                    "vencimiento": "2020-09-10"
                                },
                                {
                                    "nombre": "Pablo Pérez",
                                    "dni": 45645645,
                                    "email": "pabloperez@gmail.com",
                                    "vencimiento": "2020-09-10"
                                },
                                {
                                    "nombre": "Cristina Pérez",
                                    "dni": 789789789,
                                    "email": "cristinaperez@gmail.com",
                                    "vencimiento": "2020-09-10"
                                },
                                {
                                    "nombre": "María Pérez",
                                    "dni": 14714714,
                                    "email": "mariaperez@gmail.com",
                                    "vencimiento": "2020-09-10"
                                }
                                ]
                }
          },
  }
  
</script>

<style>

</style>
