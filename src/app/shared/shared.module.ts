import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddPhotoComponent } from './components/add-photo/add-photo.component';
import { ModalTemplateComponent } from './components/modal-template/modal-template.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [AddPhotoComponent, ModalTemplateComponent],
  imports: [
    CommonModule,
    FormsModule 
  ],
  exports: [AddPhotoComponent],
  entryComponents: [AddPhotoComponent, ModalTemplateComponent]
})
export class SharedModule { }
