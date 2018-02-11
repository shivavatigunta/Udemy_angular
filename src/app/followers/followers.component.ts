import { Component, OnInit } from '@angular/core';
import { followerService } from '../services/follower.service';

@Component({
  selector: 'followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent {

  // users: any [];

  constructor(private service: followerService) { }


  // ngOnInit() {
  //   this.service.getAll()
  //     .subscribe(users => this.users);
  //     // console.log(this.users);
  // }

  

}
