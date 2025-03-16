import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../albums.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-albums',
  imports: [CommonModule, FormsModule],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent implements OnInit {
  albums: any[] = [];
  newAlbumTitle: string = '';

  constructor(private albumsService: AlbumsService, private router: Router) {}

  ngOnInit(): void {
    this.albumsService.getAlbums().subscribe(data => {
      this.albums = data;
    });
  }

  viewAlbum(id: number) {
    this.router.navigate([`/albums/${id}`]);
  }


  deleteAlbum(id: number) {
    this.albumsService.deleteAlbum(id).subscribe(() => {
      this.albums = this.albums.filter(album => album.id !== id);
    });
  }
  addAlbum() {
    if (this.newAlbumTitle.trim()) {
      const newAlbum = { title: this.newAlbumTitle, userId: 1 };
      this.albumsService.addAlbum(newAlbum).subscribe(album => {
        this.albums.push(album);
        this.newAlbumTitle = ''; // Очищаем поле
      });
    } else {
      alert('Album title cannot be empty!');
    }
  }
}
