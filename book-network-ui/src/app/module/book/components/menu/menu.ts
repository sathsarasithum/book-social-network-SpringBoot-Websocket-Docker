import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.html',
  styleUrl: './menu.scss',
})

export class Menu implements OnInit {

  // constructor(
  //   private keycloakService: KeycloakService
  // ) {
  // }

    ngOnInit(): void {
      const linkColor = document.querySelectorAll('.nav-link');
      linkColor.forEach(link => {
        if (window.location.href.endsWith(link.getAttribute('href') || '')) {
          link.classList.add('active');
        }
        link.addEventListener('click', () => {
          linkColor.forEach(l => l.classList.remove('active'));
          link.classList.add('active');
        });
      });
    }

  async logout() {
    //await this.keycloakService.logout();
  }
}