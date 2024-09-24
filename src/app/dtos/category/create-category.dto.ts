export interface CreateCategoryDto {
  category_name: string;
  description: string;
  image: string;
  isPublished?: boolean;
}
