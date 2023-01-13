import {
  Component,
  Input,
  HostBinding,
} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  constructor() { }

  @Input()
  type: 'primary' | 'secondary' = 'secondary';

  @Input()
  content: string = '';

  @HostBinding('class.--primary')
  get isPrimary() {
    return this.type === 'primary';
  }
}
