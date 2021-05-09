import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-semaine-detail',
  templateUrl: './semaine-detail.component.html',
  styleUrls: ['./semaine-detail.component.scss'],
})
export class SemaineDetailComponent implements OnInit {


  @Input() semaine : any = {  
    id: 0, 
    title : '', 
    content: '', 
    image:'', 
    createdAt: new Date(), 
    taches : [] };
    
    taches : any = { 
      id: 0, 
      description: '', 
      DueDate: '' , 
      Done: false};

  constructor() { }

  ngOnInit() {}

}
