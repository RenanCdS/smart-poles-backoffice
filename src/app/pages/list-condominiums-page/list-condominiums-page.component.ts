import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-condominiums-page',
  templateUrl: './list-condominiums-page.component.html',
  styleUrls: ['./list-condominiums-page.component.scss']
})
export class ListCondominiumsPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['id', 'name', 'add'];
  dataSource = [
    {
      id: '123',
      name: 'Condominio teste'
    }
  ];

}
