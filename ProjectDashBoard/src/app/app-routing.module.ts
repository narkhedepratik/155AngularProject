import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './entry/home/home.component';
import { AboutUsComponent } from './template/about-us/about-us.component';
import { ContactUsComponent } from './template/contact-us/contact-us.component';
import { LoginComponent } from './entry/login/login.component';
import { AppDashBoardComponent } from './entry/app-dash-board/app-dash-board.component';

const routes: Routes = [
{path:'', component:HomeComponent ,children:[
                                              {path:'about',component:AboutUsComponent},
                                              {path:'contact',component:ContactUsComponent},
                                              {path:'login',component:LoginComponent}
                                            ]
},
{
  path:'dash' , component:AppDashBoardComponent ,children:[
 
    {path:'oe' , loadChildren:()=>import('src/app/modules/oe/oe.module').then(e=>e.OeModule)}
    

  ]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
