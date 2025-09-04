import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NowyComponentComponent } from "./nowy-component/nowy-component.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NowyComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projekt_kl4';
  name = 'Jan Kowalski';  
  link = 'gotowelogo.png';
  kolor = "yellow";
  jak = "center";
  aktywna:boolean = true;
  onButtonClick() {
    this.kolor = this.kolor === "yellow" ? "green" : "yellow";
  }
}
