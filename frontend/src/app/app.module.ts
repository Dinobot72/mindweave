// app.module.ts

import { NgModule, ApplicationConfig } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Required for Angular Material animations

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// --- Import MatIconModule here ---
import { MatIconModule } from '@angular/material/icon';
// --- End MatIconModule import ---

@NgModule({
  declarations: [
    AppComponent
    // ... any other components, directives, pipes
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, // Required for Angular Material
    MatIconModule,           // <--- Add MatIconModule here
    // ... any other Angular modules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }