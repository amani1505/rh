import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StoreRootModule } from '@ngrx/store';
import { ThemeService } from '@service/theme/theme.service';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgClass, StoreRootModule],
  providers: [ThemeService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  constructor(
    public themeService: ThemeService,
    public primengConfig: PrimeNGConfig,
  ) {}
  ngOnInit() {
    this.primengConfig.ripple = true;
  }
}
