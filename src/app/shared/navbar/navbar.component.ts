import { Component } from '@angular/core';
import {NzMenuModule} from 'ng-zorro-antd/menu';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NzMenuModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

}
