import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import emailjs from '@emailjs/browser';
import { from } from 'rxjs';

@Component({
  selector: 'app-personal-info-contact-form',
  templateUrl: './personal-info-contact-form.component.html',
  styleUrls: ['./personal-info-contact-form.component.scss']
})
export class PersonalInfoContactFormComponent {
 @ViewChild('contentWrapper') contentWrapper: ElementRef;
constructor(private fb: FormBuilder, private toastRService: ToastrService) {
  emailjs.init('muCL_mAoGNNrT1uwk')
}
public contactForm = this.fb.group({
  name: ['', Validators.required],
  email: ['', Validators.required],
  message: ['', Validators.required]
})

public sendEmail() {
  from(emailjs.send("service_9a7k1hb","template_utaoogd",{
    from_name: this.contactForm.get('email').value,
    to_name: "Cezary",
    message: this.contactForm.get('message').value,
    })).subscribe( {
    complete: () => this.toastRService.success("Email successfuly send!"),
    error: () => this.toastRService.error('Something went wrong.')
    })
}
}
