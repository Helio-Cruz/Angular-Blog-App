import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postStatus: string;
  @Input() loveIts: number = 0;

  lastUpdate = new Promise(
     
    (resolve, reject) => {
      const date = new Date();
      setTimeout(
        () => {
          resolve(date);
        }, 2000
      )
    }
  )

  constructor() { }

  ngOnInit() {
  }

  getStatus() {
    return this.postStatus;
  }

  getColor() {
    if(this.postStatus === 'success'){
      return 'green';     
    } else if (this.postStatus === 'danger'){
      return 'red';
    }
  }


  onLikeClick() {
    this.loveIts++;
    if(this.loveIts > 0){
      this.postStatus = 'success'
    }
  }
  onDislikeClick() {
    this.loveIts--;
    if(this.loveIts < 0){
      this.postStatus = 'danger'
    }

  }

}
