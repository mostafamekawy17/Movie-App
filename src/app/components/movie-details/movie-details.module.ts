import { NgModule } from "@angular/core";

import { SharedModule } from './../../shared/shared.module';
import { MovieDetalsRoutingModule } from './movie-details-routing.module';
import { MovieDetailsComponent } from './movie-details.component';


@NgModule({
    declarations: [
        MovieDetailsComponent
    ],
    imports: [
        MovieDetalsRoutingModule,
        SharedModule
        
    ]
})
export class MovieDetailsModule {}