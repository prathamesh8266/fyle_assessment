import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../../../app/components/home/home.component';
import { TrendingSubjectsComponent } from '../../../app/components/trending-subjects/trending-subjects.component';
import { TableViewComponent } from '../../shared/table-view/table-view.component';

const routes: Routes = [  
  {
    path: 'trending-subject/:name/:routeId',
    component: TrendingSubjectsComponent,
    title: 'Trending Subjects',
  },
  {path : 'tabview', component: TableViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
