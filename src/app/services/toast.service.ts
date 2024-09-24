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

  success(message: string) {
    this._toast.success(message, {
      position: 'top-right',
      style: {
        borderLeft: '4px solid #4ade80',
        padding: '10px',
        color: '#16a34a',
        backgroundColor: '#dcfce7',
        fontWeight: 400,
        fontSize: '12px',
      },
    });
  }

  warning(message: string) {
    this._toast.success(message, {
      position: 'top-right',
      style: {
        borderLeft: '4px solid #facc15',
        padding: '10px',
        color: '#ca8a04',
        backgroundColor: '#fef9c3',
        fontWeight: 400,
        fontSize: '12px',
      },
    });
  }
  
}
