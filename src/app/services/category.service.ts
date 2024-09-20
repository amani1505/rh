import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateCategoryDto } from '@dtos/category/create-category.dto';
import { UpdateCategoryDto } from '@dtos/category/update-category.dto';
import { CategoryInterface } from '@model/category.interface';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private _httpClient: HttpClient) {}

  create(payload: CreateCategoryDto) {
    return this._httpClient.post<CategoryInterface>(
      `${environment.apiUrl}category`,
      payload,
    );
  }
  getAll({
    page = 1,
    limit = 1,
    search = '',
    sortOrder = 'ASC',
    relations = ['sub_categories'],
  }: {
    page?: number;
    limit?: number;
    search?: string;
    sortOrder?: string;
    relations?: string[];
  }) {
    try {
      let params = new HttpParams()
        .set('page', page.toString())
        .set('limit', limit.toString())
        .set('sortOrder', sortOrder)
        .set('relations[]', relations.join(','));

      if (search) {
        params = params.set('search', search);
      }
      return this._httpClient.get<CategoryInterface>(
        `${environment.apiUrl}category`,

        {
          params,
        },
      );
    } catch (error) {
      throw error;
    }
  }
  update(id: string, payload: UpdateCategoryDto) {
    return this._httpClient.patch(
      `${environment.apiUrl}category/${id}`,
      payload,
    );
  }

  delete(id: string) {
    return this._httpClient.delete(`${environment.apiUrl}category/${id}`);
  }
}
