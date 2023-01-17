import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {UserModel} from "../models/User.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  addAdherent(userModel: UserModel){
    return this.http.post(environment.backendHost+"/hc/membre", userModel);
  }

  getAllMembres():Observable<UserModel> {
    return this.http.get<UserModel>(environment.backendHost + "/hc/membres")
  }
}
