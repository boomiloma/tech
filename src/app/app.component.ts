import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angulardatatable';

  data: any;
  constructor(private http: HttpClient) {
    //get request from web api
    this.http.get('https://restcountries.com/v3.1/all').subscribe(data => {

      this.data = data;

      setTimeout(() => {
        $('#datatableexample').DataTable({
          pagingType: 'full_numbers',
          pageLength: 5,
          processing: true,
          lengthMenu: [5, 10, 25]
        });
      }, 1);
    }, error => console.error(error));
  }


  showModal(){
    alert('working');
  }


}
