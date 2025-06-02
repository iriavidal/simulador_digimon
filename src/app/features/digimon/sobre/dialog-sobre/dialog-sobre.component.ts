import { DIALOG_DATA } from '@angular/cdk/dialog';
import { Component, Inject, Input } from '@angular/core';

@Component({
  selector: 'app-dialog-sobre',
  standalone: false,
  templateUrl: './dialog-sobre.component.html',
  styleUrl: './dialog-sobre.component.css',
})
export class DialogSobreComponent {
  @Input() carta: any = {};

  constructor(
    @Inject(DIALOG_DATA)
    public data: {
      carta: any;
    }
  ) {
    this.carta = data.carta;
  }

  ngOnInit(): void {
    console.log(this.carta);
  }
}
