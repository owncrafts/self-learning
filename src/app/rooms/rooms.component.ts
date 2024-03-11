import { Component, OnInit } from '@angular/core';
import { Rooms } from '../interfaces/rooms';
import {
  GalleryModule,
  GalleryItem,
  ImageItem,
  VideoItem,
  YoutubeItem,
  IframeItem,
} from 'ng-gallery';
@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css',
})
export class RoomsComponent implements OnInit {
  constructor() {}
  public roomList: Rooms[] = [];
  public images = [];
  ngOnInit(): void {
    let data = [
      {
        id: 1,
        name: 'Deluxe Suite',
        city: 'Junagadh',
        price: 150, // Price per night
        capacity: 2, // Maximum guests
        availability: true, // Available for booking
        amenities: ['Wi-Fi', 'TV', 'Air Conditioning', 'Minibar'],
        description: 'Spacious suite with ocean view',
        floor: 5, // Located on the 5th floor
        bedType: 'King-size',
        view: 'Ocean',
        photos: [
          'https://img.freepik.com/free-photo/living-room-with-large-tv-large-window-with-city-view-background_188544-7693.jpg',
          'https://img.freepik.com/free-photo/modern-indoor-living-room-with-comfortable-sofa-generative-ai_188544-7695.jpg',
        ],
      },
      {
        id: 2,
        name: 'Standard Double Room',
        city: 'Junagadh',
        price: 80,
        capacity: 2,
        availability: true,
        amenities: ['Wi-Fi', 'TV', 'Air Conditioning'],
        description: 'Comfortable room with city view',
        floor: 2,
        bedType: 'Double',
        view: 'City',
        photos: [
          'https://img.freepik.com/free-photo/3d-rendering-house-model_23-2150799797.jpg',
          'https://img.freepik.com/free-photo/interior-decoration-inspired-by-mexican-folklore_23-2150711241.jpg',
        ],
      },
      {
        id: 3,
        name: 'Family Suite',
        city: 'Junagadh',
        price: 200,
        capacity: 4,
        availability: true,
        amenities: ['Wi-Fi', 'TV', 'Air Conditioning', 'Kitchenette'],
        description: 'Ideal for families with garden view',
        floor: 3,
        bedType: 'Two Queen-size',
        view: 'Garden',
        photos: [
          'https://img.freepik.com/free-photo/interior-design-with-photoframe-plant_23-2149385430.jpg',
        ],
      },
      {
        id: 4,
        name: 'Economy Single Room',
        city: 'Junagadh',
        price: 50,
        capacity: 1,
        availability: true,
        amenities: ['Wi-Fi', 'TV'],
        description: 'Compact room for solo travelers',
        floor: 1,
        bedType: 'Single',
        view: 'City',
        photos: [
          'https://img.freepik.com/premium-photo/stylish-composition-creative-spacious-apartment-interior-with-grey-sofa-coffee-table-plants-carpet-accessories_431307-506.jpg?w=900',
        ],
      },
      {
        id: 5,
        name: 'Penthouse Suite',
        city: 'Junagadh',
        price: 300,
        capacity: 2,
        availability: true,
        amenities: ['Wi-Fi', 'TV', 'Private Jacuzzi', 'Balcony'],
        description: 'Luxurious penthouse with panoramic sea view',
        floor: 10,
        bedType: 'King-size',
        view: 'Sea',
        photos: [
          'https://img.freepik.com/free-photo/comfortable-modern-living-room-illuminated-by-blue-lighting-generative-ai_188544-32128.jpg', '',
        ],
      },
    ];

    this.roomList = data.map((item) => ({
      id: item.id,
      name: item.name,
      city: item.city,
      price: item.price,
      capacity: item.capacity,
      availability: item.availability,
      amenities: item.amenities,
      description: item.description,
      floor: item.floor,
      bedType: item.bedType,
      view: item.view,
      photos: item.photos.map((url) => new ImageItem({ src: url })),
    }));
    
  }

  print = (data: any) => {

    // Convert the data to a user-friendly, indented JSON format
    var message = "🌟 Introducing our Family Suite - Ideal for a relaxing getaway! 🌳\n" +
        "--------------------------------------\n" +
        "🏠 Name: " + data.name + "\n" +
        "🌆 City: " + data.city + "\n" +
        "💰 Price: $" + data.price + " per night\n" +
        "👥 Capacity: Accommodates up to " + data.capacity + " guests\n" +
        "🛌 Bed Type: " + data.bedType + "\n" +
        "🌿 View: " + data.view + "\n" +
        "🔧 Amenities: " + data.amenities.join(", ") + "\n" +
        "📝 Description: " + data.description + "\n" +
        "🌟 Availability: " + (data.availability ? "Available" : "Currently booked") + "\n" +
        "🌐 Photos: " + data.photos[0].data.src + "\n" +
        "--------------------------------------";

        console.log(message);

    // Copy the user-friendly JSON to the clipboard
    navigator.clipboard.writeText(message).then(() => {
        // Let the user know the information has been copied
        alert("Details of the Family Suite copied to clipboard. Enjoy your stay! 🌟");
    });
}
}
