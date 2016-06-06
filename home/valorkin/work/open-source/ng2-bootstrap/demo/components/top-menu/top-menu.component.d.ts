import { Renderer, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';
export declare class TopMenuComponent implements AfterViewInit {
    isShown: boolean;
    private renderer;
    private document;
    private router;
    constructor(renderer: Renderer, document: any, router: Router);
    ngAfterViewInit(): any;
    toggle(isShown?: boolean): void;
}
