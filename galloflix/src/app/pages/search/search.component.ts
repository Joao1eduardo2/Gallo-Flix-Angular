import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  searchForm = new FormGroup({
    'movieName' : new FormControl(null)
  });

  submitForm(){
    console.log(this.searchForm.value, 'searchForm#');
  }

}
