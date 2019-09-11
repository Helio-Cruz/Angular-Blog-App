import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  posts = [
    {
      title: 'Mon Premier Post',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. atque vitae architecto amet expedita quaerat.',
      status: 'success'
    },
    {
      title: 'Mon Deuxième Post',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. atque vitae architecto amet expedita quaerat.', 
      status: 'danger'
      
    },
    {
      title: 'Mon Troisième Post',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. atque vitae architecto amet expedita quaerat. ',
      status: 'success'

    },
    {
      title: 'Mon Quatrième Post',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. atque vitae architecto amet expedita quaerat.',
      status: 'danger'

    },
  ];

 
}
