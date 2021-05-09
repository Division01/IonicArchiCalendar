import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tache-detail',
  templateUrl: './tache-detail.component.html',
  styleUrls: ['./tache-detail.component.scss'],
})
export class TacheDetailComponent implements OnInit {

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
