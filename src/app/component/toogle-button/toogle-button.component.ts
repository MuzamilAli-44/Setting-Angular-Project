import { Component, EventEmitter, Input, Output} from '@angular/core';


@Component({
  selector: 'app-toogle-button',
  standalone: true,
  imports: [],
  templateUrl: './toogle-button.component.html',
  styleUrl: './toogle-button.component.scss'
})

export class ToogleButtonComponent {

  @Input() slider: boolean = false;
  
  @Output() valueChange: EventEmitter<boolean> = new EventEmitter<boolean>(false);

  toogle()  {
    //this.slider = !this.slider;
    this.valueChange.emit(this.slider)
  }

}

