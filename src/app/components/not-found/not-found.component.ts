import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
})
export class NotFoundComponent implements OnInit {
  man: boolean = false;
  woman: boolean = false;
  title = '';
  answer = '';
  count = 5;
  ngOnInit(): void {}

  user = {
    name: 'Kirill',
    surname: 'Pluss',
  };

  // setTitle() {
  //   if (this.woman === true){
  //     title =
  //   }
  // }
}
