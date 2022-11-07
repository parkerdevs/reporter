import { Component, OnInit } from '@angular/core';
import { WorkspaceServiceService } from '../workspace-service.service';
import { Workspace } from '../worspace';

@Component({
  selector: 'app-workspace-nav',
  templateUrl: './workspace-nav.component.html',
  styleUrls: ['./workspace-nav.component.css'],
})
export class WorkspaceNavComponent implements OnInit {
  constructor(public workspaceService: WorkspaceServiceService) {}
  change: boolean = false;
  ngOnInit() {}

  changeWorkspace() {
    this.change = !this.change;
  }
}
