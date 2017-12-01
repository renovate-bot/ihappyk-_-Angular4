import {NgModule} from '@angular/core';
import { ButtonModule,
        DataTableModule, SharedModule, PanelModule, AutoCompleteModule, MultiSelectModule, PaginatorModule, 
        CheckboxModule, AccordionModule,TooltipModule, InputTextModule, OverlayPanelModule, ConfirmDialogModule, MessagesModule} from 'primeng/primeng';
@NgModule({
    imports : [ ButtonModule, DataTableModule, SharedModule, PanelModule, AutoCompleteModule, MultiSelectModule, PaginatorModule,
            CheckboxModule, AccordionModule,TooltipModule, InputTextModule, OverlayPanelModule, ConfirmDialogModule, MessagesModule],
    exports : [ ButtonModule, DataTableModule, SharedModule, PanelModule, AutoCompleteModule, MultiSelectModule, PaginatorModule,
              CheckboxModule, AccordionModule,TooltipModule, InputTextModule, OverlayPanelModule, ConfirmDialogModule, MessagesModule]
})
export class PrimeNGModule {
}