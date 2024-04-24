import { Component, OnInit,AfterViewInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PersonService } from '../../services/person.service';
import { Person } from '../../models/person.model';
import Swiper from 'swiper';


@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements AfterViewInit {
  @ViewChild('swiper') swiper: any;
  persons: any[] = [];

  constructor(private personService: PersonService) {}

  ngAfterViewInit() {
    this.personService.getAllPersons().subscribe(persons => {
      this.persons = persons;
      this.initSwiper();
    });
  }

  private initSwiper() {
    new Swiper(this.swiper.nativeElement, {
      slidesPerView: 3,
      spaceBetween: 20,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });

    }

  nextSlide() {
    this.swiper?.swiperRef?.slideNext();
  }

  // Перейти к предыдущему слайду
  prevSlide() {
    this.swiper?.swiperRef?.slidePrev();
  }
}
