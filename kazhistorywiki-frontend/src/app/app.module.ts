import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';  

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent  // Убедитесь, что все компоненты здесь правильно объявлены
  ],
  imports: [
    BrowserModule, // Импорт BrowserModule, который уже включает CommonModule
    HttpClientModule, // Для отправки HTTP запросов
    FormsModule, // Для использования [(ngModel)]
    AppRoutingModule // Роутинг вашего приложения
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
