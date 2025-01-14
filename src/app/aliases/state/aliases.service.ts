import { Injectable } from '@angular/core';
import { AliasesStore } from './aliases.store';
import {
  OrganizationsService,
  Organization,
  Collection,
  DockstoreTool,
  ContainersService,
  WorkflowsService,
  Workflow
} from '../../shared/swagger';
import { transaction } from '@datorama/akita';
import { finalize } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AliasesService {
  constructor(
    private aliasesStore: AliasesStore,
    private organizationsService: OrganizationsService,
    private toolsService: ContainersService,
    private workflowsService: WorkflowsService
  ) {}

  clearState(): void {
    this.aliasesStore.setState(state => {
      return {
        ...state,
        organization: null,
        collection: null,
        tool: null,
        workflow: null
      };
    });
  }

  @transaction()
  updateOrganizationFromAlias(alias: string): void {
    this.clearState();
    this.aliasesStore.setLoading(true);
    this.organizationsService
      .getOrganizationByAlias(alias)
      .pipe(finalize(() => this.aliasesStore.setLoading(false)))
      .subscribe(
        (organization: Organization) => {
          this.aliasesStore.setError(false);
          this.updateOrganization(organization);
        },
        () => {
          this.aliasesStore.setError(true);
        }
      );
  }

  updateOrganization(organization: Organization) {
    this.aliasesStore.setState(state => {
      return {
        ...state,
        organization: organization
      };
    });
  }

  @transaction()
  updateCollectionFromAlias(alias: string): void {
    this.clearState();
    this.aliasesStore.setLoading(true);
    this.organizationsService
      .getCollectionByAlias(alias)
      .pipe(finalize(() => this.aliasesStore.setLoading(false)))
      .subscribe(
        (collection: Collection) => {
          this.aliasesStore.setError(false);
          this.updateCollection(collection);
        },
        () => {
          this.aliasesStore.setError(true);
        }
      );
  }

  updateCollection(collection: Collection) {
    this.aliasesStore.setState(state => {
      return {
        ...state,
        collection: collection
      };
    });
  }

  @transaction()
  updateToolFromAlias(alias: string): void {
    this.clearState();
    this.aliasesStore.setLoading(true);
    this.toolsService
      .getToolByAlias(alias)
      .pipe(finalize(() => this.aliasesStore.setLoading(false)))
      .subscribe(
        (tool: DockstoreTool) => {
          this.aliasesStore.setError(false);
          this.updateTool(tool);
        },
        () => {
          this.aliasesStore.setError(true);
        }
      );
  }

  updateTool(tool: DockstoreTool) {
    this.aliasesStore.setState(state => {
      return {
        ...state,
        tool: tool
      };
    });
  }

  @transaction()
  updateWorkflowFromAlias(alias: string): void {
    this.clearState();
    this.aliasesStore.setLoading(true);
    this.workflowsService
      .getWorkflowByAlias(alias)
      .pipe(finalize(() => this.aliasesStore.setLoading(false)))
      .subscribe(
        (workflow: Workflow) => {
          this.aliasesStore.setError(false);
          this.updateWorkflow(workflow);
        },
        () => {
          this.aliasesStore.setError(true);
        }
      );
  }

  updateWorkflow(workflow: Workflow) {
    this.aliasesStore.setState(state => {
      return {
        ...state,
        workflow: workflow
      };
    });
  }
}
