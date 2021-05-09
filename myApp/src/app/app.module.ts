import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { SemaineComponent } from './semaine/semaine.component';
import { SemaineAddComponent } from './semaine-add/semaine-add.component';
import { SemaineDetailComponent } from './semaine-detail/semaine-detail.component';
import { SemaineEditComponent } from './semaine-edit/semaine-edit.component';
import { TacheEditComponent } from './tache-edit/tache-edit.component';
import { TacheAddComponent } from './tache-add/tache-add.component' ;
import { TacheDetailComponent } from './tache-detail/tache-detail.component';

@NgModule({
  declarations: [AppComponent, SemaineComponent, SemaineAddComponent,SemaineDetailComponent, SemaineEditComponent, TacheEditComponent,TacheAddComponent, TacheDetailComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, FormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
