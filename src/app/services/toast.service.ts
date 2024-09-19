import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor(private _toast: HotToastService) {}

  error(message: string) {
    this._toast.error(message, {
      position: 'top-right',
      style: {
        borderLeft: '4px solid #fb7185',
        padding: '10px',
        color: '#e11d48',
        backgroundColor: '#ffe4e6',
        fontWeight: 400,
        fontSize: '12px',
      },
    });
  }
  
}
