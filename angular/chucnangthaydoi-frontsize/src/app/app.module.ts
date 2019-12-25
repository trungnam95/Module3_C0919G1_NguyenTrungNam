import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontSizeEditorComponent } from './font-size-editor/font-size-editor.component';
import { TodoComponent } from './todo/todo.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TimelinesComponent } from './timelines/timelines.component';
import { YoutubeplaylistComponent } from './youtubeplaylist/youtubeplaylist.component';
import { YoutubeplayerComponent } from './youtubeplayer/youtubeplayer.component';
import { DictionaryDetailComponent } from './dictionary-detail/dictionary-detail.component';
import { DictionaryPageComponent } from './dictionary-page/dictionary-page.component';
import { DictionaryComponent } from './dictionary/dictionary.component';

@NgModule({
  declarations: [
    AppComponent,
    FontSizeEditorComponent,
    TodoComponent,
    LoginComponent,
    RegisterComponent,
    TimelinesComponent,
    YoutubeplaylistComponent,
    YoutubeplayerComponent,
    DictionaryDetailComponent,
    DictionaryPageComponent,
    DictionaryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
