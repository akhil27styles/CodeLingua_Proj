import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {MainSectionComponent} from './components/main-section/main-section.component';
import {HeaderComponent} from './components/header/header.component';
import {FormsModule} from "@angular/forms";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {MonacoEditorModule} from "ngx-monaco-editor";
import { CodeMigrationComponent } from './components/code-migration/code-migration.component';
import { CodeTranslateComponent } from './components/code-translate/code-translate.component';

@NgModule({
  declarations: [
    AppComponent,
    MainSectionComponent,
    HeaderComponent,
    CodeMigrationComponent,
    CodeTranslateComponent
  ],
  imports: [
    BrowserModule,
    MonacoEditorModule.forRoot(),
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule {
}
