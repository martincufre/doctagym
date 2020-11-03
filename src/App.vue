<template>
  <div id="app">
    <encabezado-gim>DoctaGYM</encabezado-gim>
    <router-view :miembros="listaMiembros" @event-login="ingreso" @actualizar-miembro="actualizar" @eliminar-miembro='eliminarMiembro' @agregar-dato="addMember" />
    <nav-menu></nav-menu>
    
  
  
  
  
  <div>
    <p>{{mensajelogin}}</p>
  </div>
  


  </div>


  
</template>

<script>
import EncabezadoGim from "@/components/EncabezadoGim";
import NavMenu from '@/components/NavMenu'; 

export default {
  name: 'App',
  components: {
          EncabezadoGim,
          NavMenu
        },

  methods: {
    addMember(nuevoMiembro){
      this.listaMiembros.push(nuevoMiembro);
    },

    ingreso(usuario){
      let login = this.listaMiembros.find(miembro=>{
        return usuario.nombre == miembro.nombre && usuario.dni == miembro.dni;
      })
      console.log(login);
       if(login){
         let fecha = new Date(Date.now() - 3*60*60*1000);
         let vencimiento = new Date(`${login.vencimiento} 00:00`);
         if(vencimiento >= fecha){
          this.logueado = true;
          this.mensajelogin = "Datos correctos.";
         }else{
           this.mensajelogin = "Suscripcion vencida.";
         }
      }
    },  
    
    actualizar(datosNuevos){
      this.listaMiembros.splice(datosNuevos.posicion,1,datosNuevos.miembro);
    },
    eliminarMiembro(pos){
        this.listaMiembros.splice(pos,1);
    }
  },
 
  data() {
        return{
          logueado: false,
          mensajelogin: null,
          
           
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
  body{
    font-family: Verdana;
  }
</style>