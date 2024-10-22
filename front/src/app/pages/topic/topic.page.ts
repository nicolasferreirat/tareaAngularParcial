import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Topic } from '../../interface/topic';
import { FetchService } from '../../services/fetch.service';

@Component({
  selector: 'app-topic',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './topic.page.html',
  styleUrl: './topic.page.css',
})
export class TopicPage implements OnInit {
  private fetchService = inject(FetchService);
  topicList: Topic[] = [];
  async ngOnInit() {
    const temas = await this.fetchService.get('temas/');
    this.topicList = temas;
    console.log(temas);
  }
}
