import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent implements OnInit {
  hotelName = 'Hilton Hotel';
  numberOfRooms = 10;
  hideRooms = false;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  };

  roomList: RoomList[] = [
    {
      roomNumber: 1,
      roomType: 'Double Room',
      amenities: 'ametities Double Room',
      price: 2000,
      photos:
        'https://images.unsplash.com/5/unsplash-kitsune-4.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9&s=dd060fe209b4a56733a1dcc9b5aea53a',
      checkinTime: new Date(2018, 10, 10),
      checkoutTime: new Date(2018, 10, 10),
    },
    {
      roomNumber: 2,
      roomType: 'single Room 2',
      amenities: 'ametities single Room',
      price: 1000,
      photos:
        'https://images.unsplash.com/5/unsplash-kitsune-4.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9&s=dd060fe209b4a56733a1dcc9b5aea53a',
      checkinTime: new Date('11-Nov-2018'),
      checkoutTime: new Date('13-Nov-2018'),
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  toggleRooms() {
    this.hideRooms = !this.hideRooms;
  }
}
