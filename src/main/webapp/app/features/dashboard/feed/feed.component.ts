import { Component, OnInit } from '@angular/core';

import { FeedService } from './feed.service';

@Component({
    selector: 'jhi-feed',
    templateUrl: './feed.component.html',
    styleUrls: ['./feed.component.scss']
})
export class Feed implements OnInit {

    public feed: Array<Object>;

    constructor(private _feedService: FeedService) {
    }

    ngOnInit() {
        this._loadFeed();
    }

    expandMessage(message) {
        message.expanded = !message.expanded;
    }

    private _loadFeed() {
        this.feed = this._feedService.getData();
    }
}
