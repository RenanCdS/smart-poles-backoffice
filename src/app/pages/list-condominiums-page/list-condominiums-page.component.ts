import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Condominium } from 'src/app/models/condominium';
import { CondominiumsService } from 'src/app/services/condominiums.service';

@Component({
  selector: 'app-list-condominiums-page',
  templateUrl: './list-condominiums-page.component.html',
  styleUrls: ['./list-condominiums-page.component.scss']
})
export class ListCondominiumsPageComponent implements OnInit, OnDestroy {

  constructor(private readonly condominiumsService: CondominiumsService) { }

  subscriptions: Subscription[] = [];

  ngOnInit(): void {
    const condominiumSubscription = this.condominiumsService.getCondominiums().subscribe(condominiums => {
      this.dataSource = condominiums;
    });

    this.subscriptions.push(condominiumSubscription);
  }

  displayedColumns: string[] = ['code', 'name', 'add'];
  dataSource: Condominium[] = [];

  openEditModal(editCode: number)
  {

  }

  openDeleteConfirmation(condominiumCode: number)
  {
    
  }

  ngOnDestroy(): void {
    this.subscriptions.map(subscription => subscription.unsubscribe());
  }
}
