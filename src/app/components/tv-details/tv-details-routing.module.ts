import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { TvDetailsComponent } from './tv-details.component';

const routes:Routes = [
    {path: '', component: TvDetailsComponent}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TvDetailsRoutingModule {}