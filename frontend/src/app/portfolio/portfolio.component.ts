import { Component } from '@angular/core';
import { PortfolioService } from './portfolio.service';
import { Portfolio } from './portfolio';
import { NavbarComponent } from '../navbar/navbar.component';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [NavbarComponent,HomeComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  portfolio: Portfolio[] | undefined;
  constructor(private portfolioService: PortfolioService) { }

  ngOnInit() {
    this.fetchPortfolioData();
  }

  private fetchPortfolioData(): void {
    this.portfolioService.getPortfolio().subscribe(portfolio => {
      this.portfolio = portfolio;
      console.log(this.portfolio, "portfolio");

    });
  }
}
