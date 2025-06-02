import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogSobreComponent } from './dialog-sobre/dialog-sobre.component';

@Component({
  selector: 'app-sobre',
  standalone: false,
  templateUrl: './sobre.component.html',
  styleUrl: './sobre.component.css',
})
export class SobreComponent {
  @Input() numeroSobre!: number;
  @Input() cartas: any[] = [];

  cartaSeleccionada: any = null;
  estaAmpliado: boolean = false;

  constructor(private _dialog: MatDialog) {}

  ampliarCarta(carta: any) {
    const dialogRef = this._dialog.open(DialogSobreComponent, {
      data: { carta },
    });
  }

  onImageLoad(carta: any) {
    carta.imageLoaded = true;
  }
}
