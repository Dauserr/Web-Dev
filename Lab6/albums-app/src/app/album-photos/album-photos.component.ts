import { Component, OnInit, inject} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumsService } from '../albums.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-album-photos',
  imports: [CommonModule],
  templateUrl: './album-photos.component.html',
  styleUrl: './album-photos.component.css'
})
export class AlbumPhotosComponent implements OnInit {
  photos: any[] = [];

  private route = inject(ActivatedRoute);
  private albumsService = inject(AlbumsService);
  private router = inject(Router);


  ngOnInit(): void {
    const albumId = Number(this.route.snapshot.paramMap.get('id'));
    this.albumsService.getPhotosByAlbumId(albumId).subscribe(data => {
      this.photos = data;
    });
  }

  goBack() {
    this.router.navigate([`/albums`]);
  }
}
