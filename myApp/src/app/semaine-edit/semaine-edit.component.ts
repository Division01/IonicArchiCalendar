import { Component, OnInit } from '@angular/core';
import { RestService, Semaine, Tache } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-semaine-edit',
  templateUrl: './semaine-edit.component.html',
  styleUrls: ['./semaine-edit.component.scss'],
})

export class SemaineEditComponent implements OnInit {

  semaine : Semaine ;
  taches : any[] = [] ;

  constructor(public rest: RestService, private route: ActivatedRoute, private router: Router) { 
    this.semaine = {  id: 0, title : '', content: '', image:'', createdAt: new Date(), taches : [] };
  }

  ngOnInit(): void {
    this.rest.getSemaine(this.route.snapshot.params.id).subscribe(
      (res) => {
        this.semaine = res;
        this.taches = res.taches ;
      }
    )    
  }

  updateSemaine(){
    this.rest.updateSemaine(this.semaine).subscribe(
      (result) => {
        this.router.navigate(['/semaines']);
      },
      (err) => {
        console.log(err);
      }
    )
  }

  deleteTache(id : any){
    this.rest.deleteTache(id).subscribe(
      (result) => {
        console.log("tache n° " + id + " supprimée")
        window.location.reload();
      }
    )
  }

  deleteSemaine(id:any){
    this.rest.deleteSemaine(id).subscribe(
      (result) => {
        console.log("semaine n° " + id + " supprimée")
        this.router.navigate(['/semaines']);
      }
    )
  }

}
