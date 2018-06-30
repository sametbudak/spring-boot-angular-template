import { Component, OnInit } from '@angular/core';
import { TemplateRole } from '../models/template-role';
import { RoleService } from '../services/role.service';
import { TemplateRoleFactory } from '../models/template-role-factory';
import { DetailMode } from '../models/detail-mode';

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html'
})
export class RoleListComponent implements OnInit {
  selectedTemplateRole: TemplateRole;
  templateRoles: TemplateRole[];
  TemplateRoleFactory = TemplateRoleFactory;
  DetailMode = DetailMode;
  detailMode: DetailMode;

  constructor(private roleService: RoleService) {}

  ngOnInit() {
    this.initAllRoles();
  }

  private initAllRoles() {
    return this.roleService
      .getAllRoles()
      .subscribe(templateRoles => (this.templateRoles = templateRoles));
  }

  detail(detailMode: DetailMode, templateRole: TemplateRole) {
    this.detailMode = detailMode;
    this.selectedTemplateRole = templateRole;
  }
}
