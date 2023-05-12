import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerBudgetComponent } from './spinner-budget/spinner-budget.component';

@NgModule({
  declarations: [SpinnerBudgetComponent],
  imports: [CommonModule],
  exports: [SpinnerBudgetComponent],
})
export class SharedModule {}
