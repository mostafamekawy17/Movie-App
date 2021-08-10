import { NgModule } from "@angular/core";

import { TvRoutingModule } from './tv-routing.module';
import { SharedModule } from './../../shared/shared.module';
import { TvComponent } from './tv.component';



@NgModule({
    declarations: [
        TvComponent
    ],
    imports: [
        SharedModule,
        TvRoutingModule
    ]
})
export class TvModule {}