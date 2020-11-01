<template>
  <div id="app">
    <encabezado-gim>DoctaGYM</encabezado-gim>
    <router-view :miembros="listaMiembros" @actualizar-miembro="actualizar" @agregar-dato="addMember" />

    {{listaMiembros}}
  
  
  <div>
    <p>{{mesajeLogin}}</p>
  
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
      let fecha;
      
      let vencimiento; 
      
      if(vencimiento >= fecha && this.logueado == login.nombre && this.logueado == login.dni){
                this.logueado = true;
                this.mesajeLogin= "Ingreso con éxito.";
            }else{
                this.logueado = false;
                this.mesajeLogin = "Tu suscripcion está vencida.";
                
            }

    },
    
    actualizar(datosNuevos){
      this.listaMiembros.splice(datosNuevos.posicion,1,datosNuevos.miembro);

    }
  },
 
  data() {
        return{
          logueado: false,
          fecha : new Date(),
          vencimiento: new Date(`${this.login.vencimiento} 00:00`),
           
              listaMiembros : [{
                                    "nombre": "Juan Pérez",
                                    "dni": 12312312,
                                    "email": "juanperez@gmail.com",
                                    "vencimiento": "2021-09-10"
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
