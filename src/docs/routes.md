la finalidad de estas es poder acceder a los diferentes componentes que definimos.
Uno de los problemas que pueden surguir es que debido a la gran cantidad de componentes
es posible que nuestro archivo de rutas cresca considerablemente. Por lo que las rutas hijas deben
estar centralizadas en su propio sistema de rutas.
Para ello podemos usar una fubncionalida llamada forChile.

Para crear mi sistema de rutas de forma manual lo primero que debo hacer es crear un archivo llamado
nombreDescriptivo.routes.ts de forma que este tenga un sentido logico dentro de la estructura de directorios.
aun que no influye el nombre que se le de a este.

La estrucuta que tiene un fichero de rutas de angular luse de la siguiente forma.
Donde sera una clase la cual con directivas de angular permitira definir los path y
los respectivos componentes que correspondan a cada una de ellas.
~~~
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

// Components.
import { SomeComponent } from './somepath';


const routes: Routes = [
  {
    path: 'some-path',
    component: PagesComponent,
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SomeComponentRouting {}
~~~

Ahora como la finalidad de estas rutas es que poder tener centralizadas las rutas acorde a su funcionalidad
es decir, las rutas de login, las rutas de autenticacion y las que correspondan. Para poder usarlas
y que estas sean accedibles desde la aplicacion, es necesario que sea importado este modulo desde nuestro
archivo de rutas principal. De la siguiente forma. Donde en el array de "imports" se agregar este nuevo
modulo.

~~~
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot( routes ),
    PagesRouting
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
~~~
