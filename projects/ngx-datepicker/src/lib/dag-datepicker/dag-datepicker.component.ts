import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import * as moment from 'moment';

@Component({
    selector: 'dag-date-picker',
    templateUrl: './dag-date-picker.component.html',
    styleUrls: ['./dag-date-picker.component.scss']
})
export class DagDatepickerComponent implements OnChanges {
    /** variabile che comunica con il component di Material */
    public materialDate: moment.Moment;

    /** variabile locale per il two-way binding */
    private dateVal: number;
    // implementazione del two way bindings
    @Output() dateChange = new EventEmitter<number>();
    @Input() get date(): number { return this.dateVal };
    set date(val) {
        this.dateVal = val;
        this.dateChange.emit(this.dateVal)
    }


    /** altre opzioni */
    @Input() disabled: boolean;
    @Input() placeholder: string;

    constructor() { }



    ngOnChanges() {
        /** ogni volta che il valore estero vien cambiato passa l'iniformazione al material */
        this.materialDate = moment(this.date);
    }



    public change(e) {
        /** trasforma il valore emesso da material */
        this.date = this.materialDate.valueOf();
    }


    /**
     * trasforma il valore dell'input quando viene selezionato
     * in modo da trasformare la data nel formato accettato dall'Input
     * diversamente da quello mostrato
     */
    public handleTyping(e) {
        const months = {
            "gen": "01",
            "feb": "02",
            "mar": "03",
            "apr": "04",
            "mag": "05",
            "giu": "06",
            "lug": "07",
            "ago": "08",
            "set": "09",
            "ott": "10",
            "nov": "11",
            "dic": "12",
        }

        const origin: string = e.target.value;
        let elements = origin.split(' ');

        /** controlla che sia stato scritto correttamente */
        if (elements.length !== 3) return;

        /** verifica che sia presente il mese nell'elenco*/
        elements[1] = months[elements[1]] ? months[elements[1]] : elements[1];

        const newFormat = elements.join('/');
        e.target.value = newFormat;
    }
}

