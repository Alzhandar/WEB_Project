import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    // другие компоненты
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
