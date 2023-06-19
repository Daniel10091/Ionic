import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ProfilePage implements OnInit {

  history: any[] = [
    {
      id: 1,
      local: 'Brasília',
      price: '20,00'
    },
    {
      id: 2,
      local: 'São Paulo',
      price: '30,00'
    },
    {
      id: 3,
      local: 'Rio de Janeiro',
      price: '40,00'
    },
    {
      id: 4,
      local: 'Belo Horizonte',
      price: '50,00'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
