import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ping',
  templateUrl: './ping.component.html',
  styleUrls: ['./ping.component.css']
})
export class PingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("***********Ping To Intel Works*********");
  }

}
