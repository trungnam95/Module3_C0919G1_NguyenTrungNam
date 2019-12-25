import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../youtube.service';
@Component({
  selector: 'app-youtubeplaylist',
  templateUrl: './youtubeplaylist.component.html',
  styleUrls: ['./youtubeplaylist.component.css']
})
export class YoutubeplaylistComponent implements OnInit {

  constructor(public youtubeService: YoutubeService) { }

  ngOnInit() {
  }

}
