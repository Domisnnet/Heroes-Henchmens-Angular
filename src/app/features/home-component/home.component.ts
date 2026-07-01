import { Component } from '@angular/core';
import { Router } from '@angular/router'; 
import { UI_MESSAGES } from '@shared/constants/ui.constants';
import { HeaderComponent } from '@shared/components/header-component/header.component';
import { FooterComponent } from '@shared/components/footer-component/footer.component';

@Component({
    selector: 'app-home-component',
    standalone: true,
    imports: [
      HeaderComponent,
      FooterComponent
    ],
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  readonly headerMessage = UI_MESSAGES.HEADER.HOME; 
  readonly footerMessage = UI_MESSAGES.FOOTER.HOME;
  constructor(private readonly router: Router) { }
  startQuiz(): void { this.router.navigate(['/quiz']); }
}