Modulos en Angular.

Los modulos nos permiten empaquetar mejor toda nuestra logia. de forma que
esta este más centralizada y sea mucho más facil de acceder a ella.
Por ello una de sus principales funciones que mediante la carga peresosa
vamos a solicitar archivos (funcionalidades/estilos) y estos serán usados
solo cuan sea necesario.

Para generar un modulo podemos valernos del siguiente comando.
--
ng g m pages/pages --flat
--
De esa forma Angular creara un nuevo archivo llamado "pages.module.ts"

El contenido de este nuevo modulo es el siguiente. Donde por defecto vamos a encontrara el
- CommonModule: El cual contiene las directivas de angular.
~~~
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
~~~

Ahora que tengo mi primer modulo. Debo de centralizar toda la logica que necesito abstraer del
app module. ya sea por mero orden de componentes o bien por la necesidad de implementar Lazy Loading.

Para completar la funcionalidad del modulo, vamos agregar los componentes al array de declaraciones.
~~~
  declarations: [
    ComponentOne,
    ComponentTwo
  ],
~~~

De la manera antertior le indicamos que seran los componentes que de forma interna usara el modulo.
para poder usarlos fuera de este, ya sea durante una importacion, sera necesario agregar un nuevo array.
El cual sera de exports. de forma que al importar el modulo actual en nuevo modulo, se agregaran automaticamente las importaciones de los componentes definidos en el.
~~~
  declarations: [
    ComponentOne,
    ComponentTwo
  ],
~~~