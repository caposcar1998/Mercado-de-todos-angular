import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})

export class SearchBarComponent implements OnInit {

  @Input() searchTerm: Term;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSearchTerm() {
    this.searchTerm = this.SearchForm.get('term').value;
    console.log("Search: " + this.searchTerm);
    this.SearchForm.reset();
    this.router.navigate(['mostrar-producto'], { queryParams: { search: this.searchTerm} });
  }

  SearchForm = new FormGroup({
    term: new FormControl('')
  });

}

export interface Term {
  term: string
}