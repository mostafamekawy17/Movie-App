import { NgModule } from "@angular/core";

import { TvDetailsRoutingModule } from './tv-details-routing.module';
import { TvDetailsComponent } from "./tv-details.component";
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
    declarations: [
        TvDetailsComponent
    ],
    imports: [
        TvDetailsRoutingModule,
        SharedModule
    ]
})
export class TvDetailsModule {}