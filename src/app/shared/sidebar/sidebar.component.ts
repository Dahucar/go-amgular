import { Component, OnInit } from '@angular/core';
import { GifsService, tag } from '../../services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent implements OnInit {

  public gifsTag: tag[] = [];
  constructor(
    private gifService: GifsService
  ) { }

  ngOnInit(): void {}

  get gifList(): tag[]{
    return this.gifService.tagsSearchws;
  }

  public deleteTag(tagId: number): void {
    this.gifService.removeTagById(tagId);
  }

}
