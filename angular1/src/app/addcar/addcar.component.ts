import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { Service1Service} from '../service1.service'
const URL = 'http://localhost:8080/cardata';


class ImageSnippet {
  constructor(public src: string, public file: File) {}
}
@Component({
  selector: 'app-addcar',
  templateUrl: './addcar.component.html',
  styleUrls: ['./addcar.component.css']
})
export class AddcarComponent implements OnInit {
  selectedFile: ImageSnippet;
  fileData: File = null;
  cname:string;
  company:string;
  year:string;
  colour:String;
  num:String;
  price;
  image;
  filename;
  //public uploader: FileUploader = new FileUploader({ url: URL, itemAlias: 'image' });
  constructor(private s:Service1Service) { }
  /* processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {

      this.selectedFile = new ImageSnippet(event.target.result, file); */

      
    /* }); */

    /* reader.readAsDataURL(file); */
 /*  } */
public addcar()
{
  this.s.cardata(this.cname,this.company,this.year,this.colour,this.num,this.price).subscribe()
}
  ngOnInit() {
   
    //this.uploader.onAfterAddingFile = (image) => { image.withCredentials = false; };
    //this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
     // console.log('ImageUpload:uploaded:', item, status, response);
    //};
   // this.filename = this.image.slice(12);
    //this.s.cardata(this.cname,this.company,this.year,this.colour,this.num,this.price,this.filename).subscribe(
      //(res) => {
      
     // },
      //(err) => {
      
      //})
  }
 

}
