import { Component, OnInit } from '@angular/core';
import { HttpEventType, HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-service-file-upload',
  templateUrl: './service-file-upload.component.html',
  styleUrls: ['./service-file-upload.component.css']
})
export class ServiceFileUploadComponent implements OnInit {
  public progress: number;
  public message: string;
  public progress1: number;
  public message1: string;
  public progress2: number;
  public message2: string;
  constructor(public http: HttpClient, private route: ActivatedRoute) { }
  ta;
  tb;
  tc;
  uNumber;
  response;
  response1;
  response2;
  ngOnInit() {
    this.uNumber = this.route.snapshot.paramMap.get('id');
  }
  public uploadFile = (files) => {
    if (files.length === 0) {
      return;
    }
    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    formData.append('type', 'final-signed-form');
    // formData.append('uNumber',this.uNumber);
    this.response = formData;
    this.ta = fileToUpload.name;
  }
  public uploadFile1 = (files) => {
    if (files.length === 0) {
      return;
    }
    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    formData.append('type', 'letter');
    // formData.append('uNumber',this.uNumber);
    this.response1 = formData;
    this.tb = fileToUpload.name;
  }
  public uploadFile2 = (files) => {
    if (files.length === 0) {
      return;
    }
    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    formData.append('type', 'post-reciept');
    // formData.append('uNumber',this.uNumber);
    this.response2 = formData;
    this.tc = fileToUpload.name;
  }
  upload() {
    this.http.post('http://localhost:58989/api/ServiceFileUpload2', this.response, { reportProgress: true, observe: 'events' })
      .subscribe(event2 => {
        if (event2.type === HttpEventType.UploadProgress)
          this.progress = Math.round(100 * event2.loaded / event2.total);
        else if (event2.type === HttpEventType.Response) {
          this.message = 'آپلود انجام شد';
          this.http.post('http://localhost:58989/api/ServiceFileUpload1', this.response1, { reportProgress: true, observe: 'events' })
            .subscribe(event2 => {
              if (event2.type === HttpEventType.UploadProgress)
                this.progress1 = Math.round(100 * event2.loaded / event2.total);
              else if (event2.type === HttpEventType.Response) {
                this.message1 = 'آپلود انجام شد';
                this.http.post('http://localhost:58989/api/ServiceFileUpload', this.response2, { reportProgress: true, observe: 'events' })
                  .subscribe(event2 => {
                    if (event2.type === HttpEventType.UploadProgress)
                      this.progress2 = Math.round(100 * event2.loaded / event2.total);
                    else if (event2.type === HttpEventType.Response) {
                      this.message2 = 'آپلود انجام شد';
                    }
                  });
              }
            });
        }
      });
  }
}