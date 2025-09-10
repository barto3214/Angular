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
  isHighlighted = true;
  isDisabled = true;
  loggedIn = false;
  isadmin = false;

  jakiklawisz(event : KeyboardEvent) {
    console.log("Wciśnięto klawisz: " + event.key);
  }

  jestenter(){
    console.log("Wciśnięto enter");
  }

  jestenter2(){
    console.log("Wciśnięto shift + enter");
  }

  login(){
    this.loggedIn = true;
  }

  // obiekt literalny
  user={
    name: 'Jan Kowalski',
    age: 30
    }

  //lista
  owoce = ['jabłko', 'banan', 'gruszka'];
  
  //tablica obiektów
  samochody = [
    { marka: 'Toyota', model: 'Corolla', rok: 2020 },
    { marka: 'Honda', model: 'Civic', rok: 2019 },
    { marka: 'Ford', model: 'Focus', rok: 2018 }
  ];

  //tablica liczb
  numbers = [1, 2, 3, 4, 5];
}
