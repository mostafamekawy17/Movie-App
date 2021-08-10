import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-trailer',
  templateUrl: './trailer.component.html',
  styleUrls: ['./trailer.component.css'],
})
export class TrailerComponent implements OnInit {
  @Input() key;
  @Output() close = new EventEmitter<void>();
  baseUrl = 'https://www.youtube.com/embed/';
  autoplay = '?rel=0;&autoplay=1&mute=0';


  constructor(private sanitizer: DomSanitizer) {

  }

  ngOnInit(): void {
  }
  playTrailer() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.baseUrl+this.key+this.autoplay);
  }

  onClose() {
    this.close.emit();
  }
}
