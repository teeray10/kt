import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BibleComponent} from 'src/app/bible/bible.component';
import {BibleRoutingModule} from 'src/app/bible/bible-routing.module';



@NgModule({
  declarations: [BibleComponent],
  imports: [
    CommonModule,
    BibleRoutingModule
  ]
})
export class BibleModule { }
