/*
 *    Copyright 2017 OICR
 *
 *    Licensed under the Apache License, Version 2.0 (the "License");
 *    you may not use this file except in compliance with the License.
 *    You may obtain a copy of the License at
 *
 *        http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software
 *    distributed under the License is distributed on an "AS IS" BASIS,
 *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *    See the License for the specific language governing permissions and
 *    limitations under the License.
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material';
import { CustomMaterialModule } from '../../../shared/modules/material.module';

import { OrganizationStargazersComponent } from './organization-stargazers.component';
import { StarOrganizationService } from '../../../shared/star-organization.service';
import { OrganizationStarringService } from '../organization-starring/organization-starring.service';

@NgModule({
  imports: [CommonModule, FlexLayoutModule, CustomMaterialModule],
  declarations: [OrganizationStargazersComponent],
  exports: [OrganizationStargazersComponent],
  providers: [OrganizationStarringService, StarOrganizationService]
})
export class OrganizationStargazersModule {}
