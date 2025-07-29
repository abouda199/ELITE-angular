import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // ✅
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

<<<<<<< HEAD
bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(HttpClientModule, BrowserAnimationsModule), // ✅ animations
    provideRouter(routes)
  ]
});
=======
bootstrapApplication(AppComponent, appConfig)
  .catch(err => console.error(err));
>>>>>>> origin/develop
