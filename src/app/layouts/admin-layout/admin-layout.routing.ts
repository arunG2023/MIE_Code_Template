import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';



// New Componenets
import { NewEventRequestComponent } from 'app/new-event-request/new-event-request.component';
import { HonarariumPaymentRequestComponent } from 'app/honararium-payment-request/honararium-payment-request.component';
import { PostEventSettlementComponent } from 'app/post-event-settlement/post-event-settlement.component';
import { EventListComponent } from 'app/event-list/event-list.component';
import { HonarariumListComponent } from 'app/honararium-list/honararium-list.component';
import { PostEventListComponent } from 'app/post-event-list/post-event-list.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'new-event-request', component: NewEventRequestComponent },
    { path: 'honararium-payment-request', component: HonarariumPaymentRequestComponent },
    { path: 'post-event-settlement', component: PostEventSettlementComponent  },
    { path: 'view-event-list', component: EventListComponent  },
    { path: 'view-honararium-list', component: HonarariumListComponent },
    { path: 'post-event-list', component: PostEventListComponent }
  

];
