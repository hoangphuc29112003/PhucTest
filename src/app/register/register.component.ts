import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Database, getDatabase, ref, set } from "firebase/database";
import {
  SocialLoginModule,
  SocialAuthServiceConfig,
  FacebookLoginProvider,
  SocialAuthService,SocialUser
} from '@abacritt/angularx-social-login';
import { GoogleLoginProvider } from '@abacritt/angularx-social-login'
import { HomeService } from '../service/Home.service';
import { Tutorial, Users } from '../models/tutorial.model';
import { AngularFireAuth } from '@angular/fire/compat/auth';
const firebaseConfig = {
  apiKey: "AIzaSyAAnanXP-mX5HGkihVGkqM0Q9gkgto9pIc",
  authDomain: "demoweb-8ddb9.firebaseapp.com",
  projectId: "demoweb-8ddb9",
  storageBucket: "demoweb-8ddb9.appspot.com",
  messagingSenderId: "670550139755",
  appId: "1:670550139755:web:2fdd4f43e0c2efd712e22e",
  measurementId: "G-YPX00M60L9"}
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
// id : string = '1323';
// name: string = 'dawd';
// email : string = 'asdwqwd@sgsg';
 users: Users = new Users()
email:any

user!: SocialUser;
loggedIn!: boolean;
loginForm:any ='';
socialUser:any="";
isLoggedIn:boolean=false;
user2!: SocialUser;
loggedIn2!: boolean;
loginForm2:any ='';
socialUser2:any="";
isLoggedIn2:boolean=false;
constructor(private formBuilder: FormBuilder,private authService: SocialAuthService,private googleAuthService: SocialAuthService, private fb : SocialAuthService,private homeservice : HomeService , public afAuth: AngularFireAuth ){

}
ngOnInit() {
  this.authService.authState.subscribe((user) => {
    this.user = user;
    this.loggedIn = (user != null);
  });
  this.fb.authState.subscribe((user) => {
    this.user2 = user;

    this.loggedIn2 = (user != null);
  });
  this.loginForm = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
});

this.googleAuthService.authState.subscribe((user) => {
    this.socialUser = user;
    this.isLoggedIn = (user != null);
    console.log(this.socialUser);
});

}
SignIn(email:any, password:any) {
  return this.afAuth
    .signInWithEmailAndPassword(email, password)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      window.alert(error.message);
    });
}
SignOut() {
  return this.afAuth.signOut().then(() => {
    window.alert('Logged out!');
  });
}



SignUp(){
this.homeservice.createusers(this.users).then(() => {
  console.log('Created new item successfully!');
  // this.submitted = true;
});

  // Kiểm tra giá trị của thuộc tính users.email
  console.log('input email: ',this.email)



}

refreshToken(): void {
  this.authService.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID);
}
signInWithGoogle(): void {
  this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
}

signInWithFB(): void {
  this.fb.signIn(FacebookLoginProvider.PROVIDER_ID);
}

signOut(): void {
  this.authService.signOut();
}
login() {
  this.signInWithFB;
}
loginWithGoogle(): void {
  console.log('log in gg')
  this.googleAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
}

logOut(): void {
  this.googleAuthService.signOut();
}

// writeUserData(database : Database, id: string, name: string, email: string) {
//   console.log('con c')
//   const db = getDatabase();
//   set(ref(db, 'users/' + id), {
//   username: name,
//   email: email,
//   });
//   }



}
