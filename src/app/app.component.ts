import { Component, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
//import * as feather from 'feather-icons';
const feather = require('feather-icons');   //npm i --save-dev @types/feather-icons    

import Swal from 'sweetalert2'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
 
  
})
export class AppComponent {
  ngOnInit() {
    feather.replace();

   
  
    
  }   

  constructor(private toastr: ToastrService) {}

  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr Success!');
  }

  showWarning() {
    this.toastr.warning('Warning','Toastr Warning');
  }

  showInfo() {
    this.toastr.info('Information','Toastr Info')
  }

  showError() {
    this.toastr.error('Error','Toastr Error');
  }

  showsweet()
  {
    Swal.fire('Hello from Sweet Alert')
  }

  showsweet2()
  {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong!',
      footer: '<a href="">Why do I have this issue?</a>'
    })
  }

  showsweet3()
  {
    Swal.fire({
      title: 'Sweet!',
      text: 'Modal with a custom image.',
      imageUrl: 'https://unsplash.it/400/200',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
    })
  }

  showsweet4()
  {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }


}



