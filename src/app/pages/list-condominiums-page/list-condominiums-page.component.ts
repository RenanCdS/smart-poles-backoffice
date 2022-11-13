import { ChangeDetectorRef, Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { DeleteCondominiumComponent } from 'src/app/components/delete-condominium/delete-condominium.component';
import { InsertCondominiumComponent } from 'src/app/components/insert-condominium/insert-condominium.component';
import { UpdateCondominiumComponent } from 'src/app/components/update-condominium/update-condominium.component';
import { Condominium } from 'src/app/models/condominium';
import { CondominiumsService } from 'src/app/services/condominiums.service';

@Component({
  selector: 'app-list-condominiums-page',
  templateUrl: './list-condominiums-page.component.html',
  styleUrls: ['./list-condominiums-page.component.scss']
})
export class ListCondominiumsPageComponent implements OnInit, OnDestroy {

  constructor(private readonly condominiumsService: CondominiumsService,
              private readonly matDialog: MatDialog,
              private readonly matSnackBar: MatSnackBar) { }

  subscriptions: Subscription[] = [];

  ngOnInit(): void {
    const condominiumSubscription = this.condominiumsService.getCondominiums().subscribe(condominiums => {
      this.dataSource = condominiums;
    });

    this.subscriptions.push(condominiumSubscription);
  }

  displayedColumns: string[] = ['code', 'name', 'add'];
  dataSource: Condominium[] = [];

  openEditModal(condominiumCode: number, condominiumName: string)
  {
    const dialogRef = this.matDialog.open(UpdateCondominiumComponent, {
      width: '400px',
      data: {code: condominiumCode, name: condominiumName},
    });

    const dialogSubscription = dialogRef.afterClosed().subscribe(result => {
      const condominium: Condominium = {
        code: result.code,
        name: result.name
      };
      const updateCondominiumSubscription = this.condominiumsService.updateCondominium(condominium).subscribe(() => {
        this.dataSource = this.dataSource.map(condominiumResponse => {

          if (condominium.code === condominiumResponse.code) {
            return condominium;
          }
          return condominiumResponse;
        });
      }, error => {
        this.matSnackBar.open('Erro ao atualizar o condomínio', '', {
          duration: 4000
        });
      });
      this.subscriptions.push(updateCondominiumSubscription);
    });

    this.subscriptions.push(dialogSubscription);
  }

  openDeleteConfirmation(condominiumCode: number)
  {
    const dialogRef = this.matDialog.open(DeleteCondominiumComponent, {
      width: '400px',
      data: {code: condominiumCode},
    });

    const dialogSubscription = dialogRef.afterClosed().subscribe(result => {
      const deleteCondominiumSubscription = this.condominiumsService.deleteCondominium(result.code).subscribe(() => {
        this.dataSource = this.dataSource.filter(condominium => condominium.code !== result.code);
      }, err => {
        this.matSnackBar.open('Erro ao deletar o condomínio', '', {
          duration: 4000
        });
      });
      this.subscriptions.push(deleteCondominiumSubscription);
    });

    this.subscriptions.push(dialogSubscription);
  }

  openInsertModal() {
    const dialogRef = this.matDialog.open(InsertCondominiumComponent, {
      width: '400px'
    });

    const dialogSubscription = dialogRef.afterClosed().subscribe(result => {
      const condominium: Condominium = {
        code: result.code,
        name: result.name
      };
      const insertCondominiumSubscription = this.condominiumsService.insertCondominium(condominium).subscribe(() => {
        this.dataSource.push({code: result.code, name: result.name});
        this.dataSource = this.dataSource.map(condominiumResponse => condominiumResponse)
      }, error => {
        this.matSnackBar.open('Erro ao inserir o condomínio', '', {
          duration: 4000
        });
      });
      this.subscriptions.push(insertCondominiumSubscription);
    });

    this.subscriptions.push(dialogSubscription);
  }

  ngOnDestroy(): void {
    this.subscriptions.map(subscription => subscription.unsubscribe());
  }
}

