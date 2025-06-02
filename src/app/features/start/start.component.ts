import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start',
  standalone: false,
  templateUrl: './start.component.html',
  styleUrl: './start.component.css',
})
export class StartComponent {
  constructor(private _router: Router) {}

  @HostListener('document:click', ['$event'])
  handleGlobalClick(event: MouseEvent) {
    this.handleAction();
  }

  @HostListener('document:keydown.enter', ['$event'])
  handleEnterKey(event: KeyboardEvent) {
    event.preventDefault();
    this.handleAction();
  }

  private handleAction() {
    console.log('Acción ejecutada (clic o Enter)');
    this._router.navigate(['/digimon']);
  }
}
