import { Component, OnInit } from '@angular/core';
import { WorkspaceServiceService } from '../workspace-service.service';
import { Workspace } from '../worspace';

@Component({
  selector: 'app-workspace-selector',
  templateUrl: './workspace-selector.component.html',
  styleUrls: ['./workspace-selector.component.css'],
})
export class WorkspaceSelectorComponent implements OnInit {
  constructor(public workspaceService: WorkspaceServiceService) {}

  workspaces: Workspace[];

  ngOnInit() {
    this.workspaces = this.workspaceService.getWorkspaces();
  }
}
