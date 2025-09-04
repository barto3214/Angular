import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SynComponent } from './syn/syn.component';
import { CorkaComponent } from './corka/corka.component';
import { WnukComponent } from './wnuk/wnuk.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SynComponent, CorkaComponent, WnukComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'components';
  numer = 14;
  numerek = 4;
  zmienna2 = this.numer - this.numerek;
  przywitanie = "Witaj nwm w sumie gdzie";
  zmiennaexport:string[] = ['17:00','plywalnią'];
  title2 = 'angular';
  imie = 'bartek';
  nazwisko = 'slusaez';
  obrazek1: string =  "Europa.png"
  kolor: string = "yellow";
  jak: string = "center";
  aktywna: boolean = false;

  zmienKolor(){
    this.kolor = this.kolor === "red" ? "blue" : "red";
  }

  wyswitlprzywitanie(){
    this.przywitanie.toUpperCase;
  }
}

