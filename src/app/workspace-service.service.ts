import { Injectable } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { Workspace } from './worspace';

const WORKSPACES = [
  {
    id: 1001,
    name: 'test workspace 1',
  },
  {
    id: 1002,
    name: 'Client 1 WS',
  },
  {
    id: 1004,
    name: 'workspace for optic1',
  },
];

@Injectable({
  providedIn: 'root',
})
export class WorkspaceServiceService {
  workspaces: Workspace[] = WORKSPACES;
  active_workspace: Workspace;
  constructor() {
    this.active_workspace = WORKSPACES[0];
  }

  getWorkspaces() {
    return this.workspaces;
  }

  setActiveWorkspace(workspace: Workspace) {
    this.active_workspace = workspace;
    console.log('Workspace changed', workspace);
  }
}
