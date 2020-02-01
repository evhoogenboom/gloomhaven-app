import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AddPlayerComponent } from './add-player/add-player.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'
import { FormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule, MatButton} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { PlayerListComponent } from './player-list/player-list.component';
import {MatDividerModule, MatIconModule, MatTabsModule} from '@angular/material';
import { EnterInitiativeComponent } from './enter-initiative/enter-initiative.component';



@NgModule({
  declarations: [
    AppComponent,
    AddPlayerComponent,
    PlayerListComponent,
    EnterInitiativeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatButtonModule,
    MatToolbarModule,
    MatDividerModule,
    MatIconModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
