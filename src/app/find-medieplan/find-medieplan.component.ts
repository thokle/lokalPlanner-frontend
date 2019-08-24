import { Component, OnInit } from '@angular/core';
import {MediePlanService} from '../services/medie-plan.service';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-find-medieplan',
  templateUrl: './find-medieplan.component.html',
  styleUrls: ['./find-medieplan.component.scss']
})
export class FindMedieplanComponent implements OnInit {


  constructor(private  ms: MediePlanService) { }

  ngOnInit() {
  }

}
