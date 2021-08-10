import { MoviesComponent } from './movies.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";

const routes:Routes = [
    {path: '' , component:MoviesComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MoviesRoutingModule {}