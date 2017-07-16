/* tslint:disable:no-unused-variable */
import { Component } from '@angular/core';
import { async, TestBed } from '@angular/core/testing';
import { Route } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { JhiMainComponent } from '../../layouts/main/main.component';
import { CoreModule } from '../../core/core.module';

@Component({
    template: ``
})
export class ContainerComponent { }

describe('App: CleanToTheCore', () => {
    const config: Route[] = [
        { path: '', component: ContainerComponent }
    ];
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule.withRoutes(config),
                CoreModule.forRoot()
            ],
            declarations: [
                JhiMainComponent,
                ContainerComponent
            ],
        });
    });

    it('should create the app', async(() => {
        const fixture = TestBed.createComponent(JhiMainComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
});
