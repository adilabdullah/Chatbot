import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs/internal/Observable';
@Injectable({
  providedIn: 'root'
})
export class PythonApisService {

  constructor(private http: HttpClient) { }


sourceSave(sourceId:any){
  sessionStorage.setItem('sourceId', sourceId);
}
getSource(){
  return sessionStorage.getItem('sourceId');
}

callTestService()
{
  //  let body = new URLSearchParams();
  //  body.set('questions',questions);

  let url="http://18.203.160.124:8000/test"; 
  return this.http.get(url);
}


  callPythonService(questions:any)
  {
  //  let body = new URLSearchParams();
  //  body.set('questions',questions);
    const body = {'questions':questions};
    let url="http://18.203.160.124:8000/chat"; 
    return this.http.post(url,body);
  }




  uploads(event:any) {
    const formData: FormData = new FormData();
    const httpHeaders: HttpHeaders = new HttpHeaders({
      'x-api-key':'sec_aqyqlWcZ4GoYjGY7l1ZZLb3AYcDkHo5n',
      'Access-Control-Allow-Origin':'*'
  });
    
      formData.append("file",event.target.files[0]);
    this.http.post('https://api.chatpdf.com/v1/sources/add-file', formData,{ headers: httpHeaders })
    .subscribe(data => {
      console.log(data);
      this.sourceSave(JSON.parse(JSON.stringify(data)).sourceId);
    },err=>{
      // ret_result=err.toString; 
      console.log(err);
      });  
    
  }


  getMsg(question:any) {
      const body = {
        "sourceId":"src_8iY3bCuTJ2ddv235Wc8Lf",
        "question":question
        }
      let url="http://18.203.160.124:8000/msg"; 
      return this.http.post(url,body);
  }


  callCreateAccountService(username:any,email:any,userid:any)
  {
    const body = {
      "user_id":userid,
      "username":username,
      "user_email":email
  }
    let url="http://18.203.160.124:8000/insert"; 
    return this.http.post(url,body);
  }

  callUploadImageService(events:any,userid:any)
  {
  const formData: FormData = new FormData();

    let url="http://18.203.160.124:8000/upload_image/"+userid; 
    console.log("UserId::"+userid);
    console.log(events);
    formData.append("files",events);
    this.http.post(url, formData)
    .subscribe(data => {
      console.log(data);
      this.sourceSave(JSON.parse(JSON.stringify(data)).sourceId);
    },err=>{
      // ret_result=err.toString; 
      console.log(err);
      });  
   
  }


  callFileTrain(event:any)
  {
    
  //  let body = new URLSearchParams();
  //  body.set('questions',questions);
  const formData: FormData = new FormData();

    let url="http://18.203.160.124:8000/uploading"; 
    formData.append("files",event.target.files[0]);
    return this.http.post(url, formData)
  /*  .subscribe(data => {
      console.log(data);
      this.sourceSave(JSON.parse(JSON.stringify(data)).sourceId);
    },err=>{
      // ret_result=err.toString; 
      console.log(err);
      }); */
  }


  callURLTrain(url:any)
  {
  //  let body = new URLSearchParams();
  //  body.set('questions',questions);
    const body = {
      "url":url
  }
    let urls="http://18.203.160.124:8000/scrap"; 
    return this.http.post(urls,body);
  }
}
