import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
    // ici tu ajoutes d'autres composants comme EnfantComponent, etc.
  ],
  imports: [
    BrowserModule,
    HttpClientModule
    // ici tu ajoutes d'autres modules comme FormsModule, RouterModule, etc.
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
