import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupForm: NgForm;
  answer = '';
  user = {
    username: '',
    email: '',
    secret: ''
  };

  suggestUserName() {
    const suggestedName = 'Superuser';

    // one way to initiliaze the form
    // this.signupForm.setValue({
    //   userData: {
    //     name: suggestedName,
    //     email: 'tomgerrits@christ.de'
    //   },
    //   secret: ''
    // });

    this.signupForm.form.patchValue({
      userData: {
        name: suggestedName
      }
    });

  }

  // onSubmit(f: NgForm) {
  //   console.log('form submitted!');
  //   console.log(f);
  // }

  // another way is via viewchild
  onSubmit() {
    console.log(this.signupForm);
    this.user.username = this.signupForm.value.userData.name;
    this.user.email = this.signupForm.value.userData.email;
    this.user.secret = this.signupForm.value.secret;

    console.log('user');
    console.log(this.user);

    // restes the form. It empty the formcontrols alse .touched. inval classes it removes
    this.signupForm.reset();
  }
}
