import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Portfolio } from '../_models/portfolio';

@Injectable({ providedIn: 'root' })
export class PortfolioService {
  constructor(private http: HttpClient) { }

  createPortfolio(portfolio: Portfolio) {
    return this.http.post<Portfolio>(`api/portfolio/createportfolio`, portfolio);
  }

  updatePortfolio(portfolio: Portfolio) {
    return this.http.post<Portfolio>(`api/portfolio/updateportfolio`, portfolio);
  }

  /*getPortfolio(email: string) {
    return this.http.get<Portfolio>(`/api/portfolio/getbyemail`, email);
  }*/
}
