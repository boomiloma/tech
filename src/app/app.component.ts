import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angulardatatable';

  data: any;
  allData: any;
  constructor(private http: HttpClient,private modalService: NgbModal) {
    //get request from web api
    this.http.get('https://restcountries.com/v3.1/all').subscribe(data => {

      this.data = data;

      setTimeout(() => {
        $('#datatableexample').DataTable({
          pagingType: 'full_numbers',
          pageLength: 25,
          processing: true,
          lengthMenu: [5, 10, 25]
        });
      }, 1);
    }, error => console.error(error));
  }


  showModal(targetModal:any,item:any):void {
    this.modalService.open(targetModal, {
      centered: true,
      backdrop: 'static',
      size: 'lg'
     });

     this.allData = item;
  }


}
