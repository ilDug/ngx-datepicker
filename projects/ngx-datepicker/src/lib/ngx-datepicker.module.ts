import { NgModule } from '@angular/core';
import { DagDatepickerComponent } from './dag-datepicker/dag-datepicker.component';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter, MatMomentDateModule } from '@angular/material-moment-adapter';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from "@angular/material/datepicker";
// import { MatDatepickerModule, MatInputModule, MatFormFieldModule } from '@angular/material';

// See the Moment.js docs for the meaning of these formats:
// https://momentjs.com/docs/#/displaying/format/
const DAG_DATE_FORMATS = {
    parse: {
        dateInput: 'DD MM YYYY',
    },
    display: {
        dateInput: 'DD MMM YYYY',
        monthYearLabel: 'MMM YYYY',
        dateA11yLabel: 'DD MMM YYYY',
        monthYearA11yLabel: 'MMMM YYYY',
    },
}


@NgModule({
    imports: [
        CommonModule,
        MatDatepickerModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatFormFieldModule,
        MatMomentDateModule
    ],
    declarations: [DagDatepickerComponent],
    exports: [DagDatepickerComponent],
    providers: [
        { provide: MAT_DATE_LOCALE, useValue: 'it-IT' },
        { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
        { provide: MAT_DATE_FORMATS, useValue: DAG_DATE_FORMATS },
    ],
})
export class NgxDatepickerModule { }
