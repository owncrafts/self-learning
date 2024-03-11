import { GalleryItem } from 'ng-gallery';

export interface Rooms {
    id: number;
    name: string;
    city: string;
    price: number; // Cost of booking per night
    capacity: number; // Maximum number of guests
    availability: boolean; // Is the room currently available
    amenities: string[]; // List of amenities (e.g., Wi-Fi, TV, air conditioning)
    description: string; // Brief description of the room
    floor: number; // Floor number where the room is located
    bedType: string; // Type of bed(s) in the room (e.g., single, double, king-size)
    view: string; // View from the room (e.g., city view, garden view, sea view)
    photos: GalleryItem[]; // Array of photo URLs representing the room
}
