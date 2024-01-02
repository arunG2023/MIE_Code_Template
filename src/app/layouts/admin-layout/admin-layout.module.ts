import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';


import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';




// New Componenets
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { NewEventRequestComponent } from 'app/new-event-request/new-event-request.component';
import { HonarariumPaymentRequestComponent } from 'app/honararium-payment-request/honararium-payment-request.component';
import { PostEventSettlementComponent } from 'app/post-event-settlement/post-event-settlement.component';
import { EventListComponent } from 'app/event-list/event-list.component';
import { HonarariumListComponent } from 'app/honararium-list/honararium-list.component';
import { PostEventListComponent } from 'app/post-event-list/post-event-list.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
  ],
  declarations: [
    DashboardComponent,
    NewEventRequestComponent,
    HonarariumPaymentRequestComponent,
    PostEventSettlementComponent,
    EventListComponent,
    HonarariumListComponent,
    PostEventListComponent
  ]
})

export class AdminLayoutModule {}
