import { YoutubeplaylistComponent } from "./youtubeplaylist/youtubeplaylist.component";
import { YoutubeplayerComponent } from "./youtubeplayer/youtubeplayer.component";
import { TimelinesComponent } from "./timelines/timelines.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
import { DictionaryPageComponent } from './dictionary-page/dictionary-page.component';
import { DictionaryDetailComponent } from './dictionary-detail/dictionary-detail.component';

const routes: Routes = [
  {
    path: "time",
    component: TimelinesComponent
  },
  {
    path: "youtube",
    component: YoutubeplaylistComponent,
    children: [
      {
        path: ":id",
        component: YoutubeplayerComponent
      }
    ]
  },
  {
    path: 'dictionary',
    component: DictionaryPageComponent,
    children: [
      {
        path: ':key',
        component: DictionaryDetailComponent
      }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
