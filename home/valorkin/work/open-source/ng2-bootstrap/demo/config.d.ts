import { GettingStartedSectionComponent } from './components/getting-started/getting-started';
import { AccordionSectionComponent } from './components/accordion-section';
export declare const routes: ({
    path: string;
    name: string;
    component: typeof GettingStartedSectionComponent;
    useAsDefault: boolean;
} | {
    path: string;
    name: string;
    component: typeof AccordionSectionComponent;
})[];
