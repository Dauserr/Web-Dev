import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumsService } from '../albums.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-album-detail',
  imports: [CommonModule, FormsModule],
  templateUrl: './album-detail.component.html',
  styleUrl: './album-detail.component.css'
})
export class AlbumDetailComponent implements OnInit {
  album: any;

  private route= inject(ActivatedRoute);
  private albumsService= inject(AlbumsService);
  private router= inject(Router);


  ngOnInit(): void {
    const albumId = Number(this.route.snapshot.paramMap.get('id'));
    this.albumsService.getAlbumById(albumId).subscribe(data => {
      this.album = data;
    });
  }

  saveChanges() {
    this.albumsService.updateAlbum(this.album).subscribe();
  }

  goBack() {
    this.router.navigate(['/albums']);
  }

  goToPhotos() {
    this.router.navigate([`/albums/${this.album.id}/photos`]);
  }
}
