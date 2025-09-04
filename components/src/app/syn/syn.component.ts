import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-syn',
  standalone: true,
  imports: [],
  templateUrl: './syn.component.html',
  styleUrl: './syn.component.css'
})
export class SynComponent {
  @Input() zmiennaimport!: string[];
}
