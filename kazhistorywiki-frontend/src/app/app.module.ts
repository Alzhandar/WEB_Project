import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';  
import { CommonModule } from '@angular/common';  
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterModule } from './register/register.module'; 
import { CategoryListModule } from './components/category-list/category-list.module';
import { PersonListModule } from './components/person-list/person-list.module'; 
import { EventListModule } from './components/event-list/event-list.module';
import {HomeComponent} from "./home/home-component.component";
import {CommentListComponent} from "./components/comment-list/comment-list.component";
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        HomeComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        AppRoutingModule,
        CommonModule,
        ReactiveFormsModule,
        RegisterModule,
        CategoryListModule,
        PersonListModule,
        EventListModule,
        CommentListComponent,
    ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
