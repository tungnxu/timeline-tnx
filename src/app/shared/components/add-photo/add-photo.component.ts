import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ModalService } from 'src/app/core/http/modal.service';
import { Image } from '../../models/post-response';

@Component({
  selector: 'app-add-photo',
  templateUrl: './add-photo.component.html',
  styleUrls: ['./add-photo.component.scss']
})
export class AddPhotoComponent implements OnInit {
  @Input() public selectedImages: Image[] = [];
  @Output() editImage = new EventEmitter<any>();
  public error: string ;
  constructor(private modalService: ModalService) { }

  ngOnInit() {
  }

  public removeImage(index): void {
    if (index > -1) {
      this.selectedImages.splice(index, 1);
    }
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
        var filesAmount = event.target.files.length;
        let listFiles : File[] = Array.from(event.target.files);
        if(listFiles.some(x => { return  x.size > 1024*1024*10 })) {
          this.error = "Please choose file less than 10MB";
          return;
        }
        for (let i = 0; i < filesAmount; i++) {
                var reader = new FileReader();

                reader.onload = (event:any) => {
                  const img: Image = {
                    height: 600,
                    width: 600,
                    thumb:  event.target.result,
                    original:  event.target.result
                  }
                   this.selectedImages.push(img); 

                }
                reader.readAsDataURL(event.target.files[i]);
        }
        this.editImage.emit(this.selectedImages);
        this.closeModal('custom-modal-1');
    }
  }


  // changeListener($event) : void {
  //   this.readThis($event.target);
  // }
  // image : any;
  // readThis(inputValue: any): void {
  //   var file:File = inputValue.files[0];
  //   var myReader:FileReader = new FileReader();
  
  //   myReader.onloadend = (e) => {
  //     this.image = myReader.result;
  //     const img: Image = {
  //       height: 600,
  //       width: 600,
  //       thumb:  this.image,
  //       original:  this.image
  //     }
  //     if (!this.selectedImages) this.selectedImages = []
  //     this.selectedImages.push(img);
      
  //   }
  //   myReader.readAsDataURL(file);
  // }


}
