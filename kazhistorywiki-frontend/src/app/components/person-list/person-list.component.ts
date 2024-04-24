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
    var swiper = new Swiper(".swiper", {
      slidesPerView: 1,
      spaceBetween: 10,
      autoplay:{
        delay:5500,
        disableOnInteraction:false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints:{
        280:{
          slidesPerView:1,
          spaceBetween: 15,
        },
        320:{
          slidesPerView:2,
          spaceBetween: 15,
        },
        510:{
          slidesPerView:3,
          spaceBetween: 15,
        }

      },
      navigation:{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }

    });

    }}

//   nextSlide() {
//     this.swiper?.swiperRef?.slideNext();
//   }
//
//   // Перейти к предыдущему слайду
//   prevSlide() {
//     this.swiper?.swiperRef?.slidePrev();
//   }
// }
