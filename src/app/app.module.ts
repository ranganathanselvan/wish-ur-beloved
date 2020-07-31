import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
// services
import { InterceptorService } from './_services/interceptor.service';
import { UserService } from './_services/user.service';
import { PortfolioService } from './_services/portfolio.service';
import { DataShareService } from './_services/datashare.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PersonalInfoComponent } from './portfolio/personal-info/personal-info.component';
import { SkillsComponent } from './portfolio/skills/skills.component';
import { WorkInfoComponent } from './portfolio/work-info/work-info.component';
import { CertificationsComponent } from './portfolio/certifications/certifications.component';
import { AwardsComponent } from './portfolio/awards/awards.component';
import { LanguagesComponent } from './portfolio/languages/languages.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    PortfolioComponent,
    PersonalInfoComponent,
    SkillsComponent,
    WorkInfoComponent,
    CertificationsComponent,
    AwardsComponent,
    LanguagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot()
  ],
  providers: [
    UserService,
    PortfolioService,
    DataShareService,
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
