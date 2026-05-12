import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Menu } from '../../components/menu/menu';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [Menu, RouterOutlet],
  templateUrl: './main.html',
  styleUrl: './main.scss',
})
export class Main {}