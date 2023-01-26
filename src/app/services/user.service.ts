import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {UserInterface, UserModel} from "../models/User.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userModel!: UserModel
  constructor(private http: HttpClient) {
  }

  addAdherent(userModel: UserModel){
    return this.http.post(`${environment.backendHost}/hc/membre`, userModel);
  }

  updateAdherant(id:number, userModel: UserModel){
    return this.http.patch(environment.backendHost+"/hc/membre/"+id, userModel);
  }

  getMembre(id:number):Observable<UserModel>{
    return this.http.get<UserModel>(environment.backendHost+"/hc/membre/"+id);
  }

  getAllMembres():Observable<UserModel> {
    return this.http.get<UserModel>(`${environment.backendHost}/hc/membres`)
  }

  getPageMembres(pageNumber:number, pageSize:number){
    return this.http.get(`${environment.backendHost}/hc/pagemembres/${pageNumber}/${pageSize}`)
  }

  addUser(nom:string, prenom:string, email:string, password:string, confirmPassword:string){
    let body = {nom:nom, prenom:prenom, email:email, password:password, confirmPassword:confirmPassword};
    return this.http.post(environment.backendHost+"/hc/user",body);
  }


}
