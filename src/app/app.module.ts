import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { WorkspaceComponent } from './workspace/workspace.component';
import { MyTaskComponent } from './my-task/my-task.component';
import { ProjectComponent } from './project/project.component';
import { SettingComponent } from './setting/setting.component';
import {ProjectAddComponent} from "./project-add/project-add.component";

@NgModule({
  declarations: [
    AppComponent,
    WorkspaceComponent,
    MyTaskComponent,
    ProjectComponent,
    ProjectAddComponent,
    SettingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'workspace',
        component: WorkspaceComponent
      },
      {
        path: 'mytask',
        component: MyTaskComponent
      },
      {
        path: 'project',
        component: ProjectComponent
      },
      {
        path: 'projectadd',
        component: ProjectAddComponent
      },
      {
        path: 'setting',
        component: SettingComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
