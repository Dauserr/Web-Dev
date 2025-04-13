import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../services/company.service';
import { Company } from '../models/company';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Vacancy } from '../models/vacancy';

@Component({
  selector: 'app-company-list',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
  companies: Company[] = [];
  vacanciesMap: { [key: number]: Vacancy[] } = {};

  constructor(private companyService: CompanyService) { }

  ngOnInit(): void {
    this.loadCompanies();
  }

  loadCompanies(): void {
    this.companyService.getCompanies().subscribe(
      (data: Company[]) => {
        this.companies = data;
      },
      (error) => {
        console.error('Error loading companies:', error);
      }
    );
  }

  showVacancies(companyId: number): void {
    this.companyService.getCompanyVacancies(companyId).subscribe(
      (data) => {
        this.vacanciesMap[companyId] = data;
      },
      (error) => {
        console.error('Error loading vacancies for company:', error);
      }
    );
  }
}
