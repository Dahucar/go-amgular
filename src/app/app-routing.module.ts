import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AsyncComponent } from './pages/pipes/async/async.component';
import { DateComponent } from "./pages/pipes/date/date.component";

const router: Routes = [
  {
    path: "date",
    component: DateComponent
  },
  {
    path: "async",
    component: AsyncComponent
  },
  {
    path: "**",
    redirectTo: "date"
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(router)
  ]
})
export class AppRoutingModule {}