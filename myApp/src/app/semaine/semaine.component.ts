import { Component, OnInit } from '@angular/core';
import { RestService, Semaine, Tache } from '../rest.service' ;
import { Router } from '@angular/router';

@Component({
  selector: 'app-semaine',
  templateUrl: './semaine.component.html',
  styleUrls: ['./semaine.component.scss']
})
export class SemaineComponent implements OnInit {

  semaines: Semaine[] = [];
  semaine: Semaine = {  
    id: 0, 
    title : 'test', 
    content: 'test', 
    image:'', 
    createdAt: new Date(), 
    taches : [] };
  show = false;

  constructor(public rest:RestService, private router: Router) { }

  ngOnInit(): void {
    this.getSemaines();
  }

  getSemaines(){
    this.rest.getSemaines().subscribe(
      (resp) => {
        console.log(resp);
        this.semaines = resp;
      }
    )
  }

  add() {
    this.router.navigate(['/semaines/add']);
  }

  showDetail(semaine){
    console.log(semaine);
    this.semaine = semaine;
    this.show = true;
  }

  editSemaine(id:number){
    this.router.navigate(['/semaines/edit/' + id]);
  }

}
