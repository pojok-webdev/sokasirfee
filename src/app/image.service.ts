import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor() { }
  createImageFromBlob(image: Blob,callback) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
    }, false);
    reader.onloadend = (e)=>{
      callback(reader.result)
    }
    if (image) {
       reader.readAsText(image);
    }
  }
}
