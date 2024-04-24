import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { PersonListComponent } from './components/person-list/person-list.component';
import { CommentListComponent } from './components/comment-list/comment-list.component';
import { HistoricalPeriodListComponent } from './components/historical-period-list/historical-period-list.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home-component.component'; 
import { RegisterComponent } from './register/register.component';
import { EventListComponent } from './components/event-list/event-list.component'; 
// import { PersonListComponent } from './persons/person-list/person-list.component';



const routes: Routes = [
  { path: 'categories', component: CategoryListComponent },
  { path: 'categories/:id/persons', component: PersonListComponent },
  { path: 'persons', component: PersonListComponent },
  // { path: 'persons', component: PersonListComponent },
  { path: 'comments', component: CommentListComponent },
  { path: 'historical-periods', component: HistoricalPeriodListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', component: HomeComponent },
  { path: 'events', component: EventListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
