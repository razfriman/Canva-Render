import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MonacoEditorModule } from 'ngx-monaco-editor';
import { QuillModule } from 'ngx-quill';
import { AppComponent } from './app.component';
import { CanvaElementViewerComponent } from './canva-element-viewer/canva-element-viewer.component';
import { CanvaPageViewerComponent } from './canva-page-viewer/canva-page-viewer.component';
import { CanvaViewerComponent } from './canva-viewer/canva-viewer.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    CanvaViewerComponent,
    CanvaPageViewerComponent,
    CanvaElementViewerComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    QuillModule,
    ReactiveFormsModule,
    MonacoEditorModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
