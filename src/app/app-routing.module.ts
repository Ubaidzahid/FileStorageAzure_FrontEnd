import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AuthGuard } from "./services/auth-guard.service";

import { HomeComponent } from "./components/home/home.component";
import { PostsComponent } from "./components/posts/posts.component";
import { LoginComponent } from "./components/login/login.component";
import { SignupComponent } from "./components/signup/signup.component";
import { AzureComponent } from "./components/azure/azure.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  //{ path: "home", component: AzureComponent, canActivate: [AuthGuard] },
  { path: "home", component: AzureComponent },
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  
  { path: "**", redirectTo: "" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
