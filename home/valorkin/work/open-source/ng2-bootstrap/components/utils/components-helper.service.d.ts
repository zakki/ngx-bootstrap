import { ApplicationRef, ViewContainerRef, ComponentRef, ComponentResolver, Type, Injector } from '@angular/core';
export declare class ComponentsHelper {
    private applicationRef;
    private componentResolver;
    private injector;
    constructor(applicationRef: ApplicationRef, componentResolver: ComponentResolver, injector: Injector);
    getRootViewContainerRef(): ViewContainerRef;
    appendNextToRoot<T extends Type, N>(ComponentClass: T, ComponentOptionsClass: N, options: any, _viewContainerRef?: ViewContainerRef): Promise<ComponentRef<any>>;
}
