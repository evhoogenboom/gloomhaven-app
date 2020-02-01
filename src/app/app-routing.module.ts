import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPlayerComponent } from './add-player/add-player.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { EnterInitiativeComponent } from './enter-initiative/enter-initiative.component';

const routes: Routes = [
  { path: 'add-player', component: AddPlayerComponent },
  { path: 'player-list', component: PlayerListComponent },
  { path: 'enter-initiative', component: EnterInitiativeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }