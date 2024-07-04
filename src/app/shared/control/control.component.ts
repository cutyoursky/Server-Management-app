import { AfterContentInit, Component, contentChild, ContentChild, ElementRef, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control'
  }
})
export class ControlComponent implements AfterContentInit {
  label = input.required<string>();
  // @ContentChild('input') private control: ElementRef<
  // HTMLInputElement | HTMLTextAreaElement
  // >;
  private control = contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');

  ngAfterContentInit() {
      
  }
}
