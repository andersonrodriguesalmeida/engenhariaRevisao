import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatButtonModule, MatCheckboxModule, MatInputModule, MatFormFieldModule, MatCardModule, MatToolbarModule, MatSidenavModule, MatMenuModule, MatIconModule, MatExpansionModule, MatListModule, MatSnackBarModule, MatTableModule} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './pages/login/login.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { CadUsuarioComponent } from './pages/cadusuario/cadusuario.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PesquisaUsuarioComponent } from './pages/pesquisausuario/pesquisausuario.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PrincipalComponent,
    CadUsuarioComponent,
    PesquisaUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule,
    FormsModule, ReactiveFormsModule,
    MatInputModule, MatFormFieldModule,
    MatCardModule,HttpClientModule,
    MatToolbarModule,
    MatSidenavModule, MatMenuModule,MatIconModule,
    MatExpansionModule, MatListModule, FlexLayoutModule,
    MatSnackBarModule,MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
