export interface Person {
    id?: number;
    name: string;
    biography: string;
    categories: number[];
    photo?: string;
    birth_year?: number;
    birth_date?: Date;
    historical_period?: number;
  }