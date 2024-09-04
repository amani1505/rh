import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
  selector: 'app-image-uploader',
  standalone: true,
  imports: [CommonModule,AngularSvgIconModule],
  templateUrl: './image-uploader.component.html',
  styleUrl: './image-uploader.component.scss',
})
export class ImageUploaderComponent {
  @Input() width: string = '200px';
  @Input() height: string = '200px';
  @Output() imageSelected = new EventEmitter<File>();

  currentImage: string | ArrayBuffer | null = null;
  isDragOver: boolean = false;

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      this.handleFile(input.files[0]);
    }
  }

  onDrop(event: DragEvent): void {
    event.preventDefault();
    this.isDragOver = false;
    if (event.dataTransfer?.files && event.dataTransfer.files[0]) {
      this.handleFile(event.dataTransfer.files[0]);
    }
  }

  handleFile(file: File): void {
    this.imageSelected.emit(file);
    const reader = new FileReader();
    reader.onload = (e) => (this.currentImage = reader.result);
    reader.readAsDataURL(file);
  }
  deleteImage(): void {
    this.currentImage = null;
    this.imageSelected.emit(null as unknown as File); // Notify parent that image is removed
  }

  @HostListener('dragover', ['$event'])
  onDragOver(event: DragEvent): void {
    event.preventDefault();
    this.isDragOver = true;
  }

  @HostListener('dragleave', ['$event'])
  onDragLeave(event: DragEvent): void {
    event.preventDefault();
    this.isDragOver = false;
  }
}
