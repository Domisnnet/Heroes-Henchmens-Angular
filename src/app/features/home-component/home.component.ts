import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
    constructor(private readonly router: Router) { }
    startQuiz(): void { this.router.navigate(['/quiz']); }
}