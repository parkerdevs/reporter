import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { WorkspaceNavComponent } from './workspace-nav/workspace-nav.component';
import { WorkspaceSelectorComponent } from './workspace-selector/workspace-selector.component';
import { WorkspaceServiceService } from './workspace-service.service';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    WorkspaceNavComponent,
    WorkspaceSelectorComponent,
  ],
  bootstrap: [AppComponent],
  //providers: [WorkspaceServiceService],
})
export class AppModule {}
