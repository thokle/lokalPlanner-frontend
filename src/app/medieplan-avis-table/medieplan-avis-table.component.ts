import { Component, OnInit } from '@angular/core';
import {StamBladObserver} from '../stam-blad-observer';
import {MatTableDataSource, MatTreeNestedDataSource} from '@angular/material';
import {AktiveAviser} from '../models/aktive-aviser';
import {MediePlanAvisModel} from '../models/medie-plan-avis-model';
import {MediePlanAvisService} from '../services/medie-plan-avis.service';

@Component({
  selector: 'app-medieplan-avis-table',
  templateUrl: './medieplan-avis-table.component.html',
  styleUrls: ['./medieplan-avis-table.component.css']
})
export class MedieplanAvisTableComponent implements OnInit {

  mediePlanAviser: MediePlanAvisModel[] = [];
  datasource = new MatTableDataSource();
  columns = ['UgeavisID',
    'GeoKodeNavn',

    'RabatGruppe',
    'Mm',
    'NormalMmPris',
    'New MmPris',
    'Old MmPris',
    'New MmRabat',
    'Old MmRabat',
    'New MmTotal',
    'Old MmTotal',
    'FarveTillæg',
    'New FarvePris',
    'Old FarvePris',
    'New FarveRabat',
    'Old FarveRabat',
    'New FarveTotal',
    'Old FarveTotal',
    'New Total',
    'Old Total',
    'MåGiveFarveRabat',
    'MåGiveMmRabat',
    'New Bemærkning',
    'Old Bemærkning',
    'New BureauOrdreNr',
    'Old BureauOrdreNr',
    'RowState',
    'FejlTekst',
    'New Ansvar',
    'Old Ansvar',
    'Manueltændret',
    'SendeGruppe',
    'FarveMin',
    'FarveMax',
    'MedIGrupper',
    'Email',
    'PrisforespørgselEmails',
    'MaterialeNr',
    'MedienetKode',
    'PrislisteID',
    'Is365',
    'Ejerforhold',
    'FakturaGruppe',
    'Change Reason',
    'Faktureringsbilag',
    'UdgivelsesDag',
    'ErWeekendGruppe',
    'Webtillæ',
    'BemærkningFraPrisforespørgsel',
    'MiljøTillæg',
    'TotalInclTillæg',
    'MaterialeDeadline',
    'Oplag',
    'Læsertal',
    'KontaktprisOplag',
    'KontaktprisLæsertal',
    'PrisLåst']
  ;

  constructor(private  obs: StamBladObserver, private ms: MediePlanAvisService) {
    this.addAvisTotable();
  }

  ngOnInit() {
  }


  private  addAvisTotable() {
    this.obs.getAktivAvis().subscribe(value => {
      this.ms.getMediePlanAvis(value.bladid, value.year).subscribe( value2 => {
        this.mediePlanAviser.push(value2[0]);
      });

    });

  }

  public  removeAvisFromTable(column: string) {
    console.log('remove column ' + column );
 const newCol =    this.columns.filter(value => value !== column);

}


}
