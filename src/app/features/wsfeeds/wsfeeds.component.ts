import { Component, OnInit } from '@angular/core';
import { WsFeed } from '../../model/ws-feeds';
import { WsFeedsService } from '../../services/ws-feeds.service';

@Component({
  selector: 'ws-feeds',
  templateUrl: './wsfeeds.component.html',
  styleUrls: ['./wsfeeds.component.css'],
  providers:[ WsFeedsService ]
})
export class WsfeedsComponent implements OnInit {

  WsFeeds : WsFeed[];
  constructor(private wsFeedsService: WsFeedsService ) { }

  ngOnInit() {
    console.log("ngOnInit inside WsFeeds" );
    this.wsFeedsService.getWsFeeds().then(WsFeeds => this.WsFeeds = WsFeeds)
  }
}
