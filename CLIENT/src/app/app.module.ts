import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AccordionModule } from 'primeng/accordion';
import { DockModule } from 'primeng/dock';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { CommonModule } from '@angular/common';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DataViewModule } from 'primeng/dataview';
import { DialogModule } from 'primeng/dialog';
import { DividerModule } from 'primeng/divider';
import { DropdownModule } from 'primeng/dropdown';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { FileUploadModule } from 'primeng/fileupload';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputTextModule } from 'primeng/inputtext';
import { ListboxModule } from 'primeng/listbox';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { MultiSelectModule } from 'primeng/multiselect';
import { ProgressBarModule } from 'primeng/progressbar';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { ScrollTopModule } from 'primeng/scrolltop';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SliderModule } from 'primeng/slider';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { TooltipModule } from 'primeng/tooltip';

import { AppComponent } from './app.component';

import { SERVICES } from './services';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    CardModule,
    HttpClientModule,
    AccordionModule,
    DockModule,
    BadgeModule,
    ButtonModule,
    CardModule,
    CheckboxModule,
    CommonModule,
    ConfirmDialogModule,
    DataViewModule,
    DialogModule,
    DividerModule,
    DropdownModule,
    DynamicDialogModule,
    FileUploadModule,    
    FormsModule,
    InputNumberModule,
    InputTextareaModule,
    InputTextModule,
    ListboxModule,
    MessageModule,
    MessagesModule,
    MultiSelectModule,
    ProgressBarModule,
    ProgressSpinnerModule,
    ReactiveFormsModule,
    ScrollPanelModule,
    ScrollTopModule, 
    SelectButtonModule,
    SliderModule,
    TableModule,
    TabViewModule,
    ToggleButtonModule,
    TooltipModule
  ],
  providers: [...SERVICES],
  bootstrap: [AppComponent]
})
export class AppModule { }
