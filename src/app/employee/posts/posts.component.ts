import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts = [] as any[];

  constructor(private _dataService: DataService) { }

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts() {
    this._dataService.getData("https://jsonplaceholder.typicode.com/posts").subscribe({
      next: (data) => {
        this.posts = data as any[];
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log("Complete");
      }
    });
  }

}
