import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AsyncComponent } from './pages/pipes/async/async.component';

const router: Routes = [
  {
    path: "async",
    component: AsyncComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(router)
  ]
})
export class AppRoutingModule {}