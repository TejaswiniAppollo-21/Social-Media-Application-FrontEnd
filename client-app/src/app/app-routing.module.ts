import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ErrorComponent } from "./views/public/error/error.component";

const routes: Routes = [
    {
        path: '',
        loadChildren: () => 
        import('./views/public/authentication/authentication.module').then(
            (module) => module.AuthenticationModule
        ), 
    },
    {
        path: '**',
        component: ErrorComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}