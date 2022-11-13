import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListCondominiumsPageComponent } from './pages/list-condominiums-page/list-condominiums-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { DeleteCondominiumComponent } from './components/delete-condominium/delete-condominium.component';
import { UpdateCondominiumComponent } from './components/update-condominium/update-condominium.component';
import { InsertCondominiumComponent } from './components/insert-condominium/insert-condominium.component';

@NgModule({
  declarations: [
    AppComponent,
    ListCondominiumsPageComponent,
    DeleteCondominiumComponent,
    UpdateCondominiumComponent,
    InsertCondominiumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
