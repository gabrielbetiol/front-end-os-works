import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from "@angular/material/select";
import { MatButtonModule } from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ClienteComponent } from './cliente/cliente.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './forms/login/login.component';
import { CadastroComponent } from './forms/cadastro/cadastro.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    HomeComponent,
    LoginComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    MatInputModule,
    MatCheckboxModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
