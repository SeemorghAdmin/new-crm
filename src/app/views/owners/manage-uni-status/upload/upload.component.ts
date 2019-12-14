import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpEventType,HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  public progress: number;
  public message: string;
  public t :string;
  constructor(private http: HttpClient) { }
  @Output() public onUploadFinished = new EventEmitter();
  ngOnInit() {
  }
  public uploadFile = (files) => {
    if (files.length === 0) {
      return;
    }
    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    this.onUploadFinished.emit(formData);
 this.t=fileToUpload.name;
  
  }

}
