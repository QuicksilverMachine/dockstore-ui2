import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { DynamicPopover } from '../dynamicPopover.model';

export interface DagState {
  validVersions: any;
  currentWorkflowId: number;
  currentVersion: any;
  dagResults: any;
}

export function createInitialState(): DagState {
  return {
    validVersions: null,
    currentWorkflowId: null,
    currentVersion: null,
    dagResults: null
  };
}

@StoreConfig({ name: 'dag' })
export class DagStore extends Store<DagState> {

  constructor() {
    super(createInitialState());
  }

}

