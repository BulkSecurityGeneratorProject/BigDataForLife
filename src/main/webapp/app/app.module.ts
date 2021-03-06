import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ng2-webstorage';

import { BigDataForLifeSharedModule, UserRouteAccessService } from './shared';
import { BigDataForLifeHomeModule } from './home/home.module';
import { BigDataForLifeCityModule } from './city/city.module';
import { BigDataForLifeToolsModule } from './tools/tools.module';
import { BigDataForLifeAdminModule } from './admin/admin.module';
import { BigDataForLifeAccountModule } from './account/account.module';
import { BigDataForLifeEntityModule } from './entities/entity.module';

import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

import { BigDataForLifeAppAboutUsModule } from './about-us/about-us.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here

import {
    JhiMainComponent,
    LayoutRoutingModule,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ActiveMenuDirective,
    ErrorComponent
} from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        LayoutRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        BigDataForLifeSharedModule,
        BigDataForLifeHomeModule,
        BigDataForLifeCityModule,
        BigDataForLifeToolsModule,
        BigDataForLifeAdminModule,
        BigDataForLifeAccountModule,
        BigDataForLifeEntityModule,
        BigDataForLifeAppAboutUsModule,
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        ActiveMenuDirective,
        FooterComponent
    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class BigDataForLifeAppModule {}
