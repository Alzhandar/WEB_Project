export class Event {
    id?: number;
    title: string;
    description: string;
    date: Date;
    photo?: string;
    historicalPeriodId?: number;
  
    constructor(
      title: string,
      description: string,
      date: Date,
      photo?: string,
      historicalPeriodId?: number
    ) {
      this.title = title;
      this.description = description;
      this.date = date;
      this.photo = photo;
      this.historicalPeriodId = historicalPeriodId;
    }
  }