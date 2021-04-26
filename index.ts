import Customer from './Customer';
import Hotel from './Hotel';

function main(): void{
    let hotel = new Hotel("Taj");

    console.log('Room Count: ', hotel.countAvailableRooms());

    hotel.addRooms('Single', 15);
    hotel.addRooms('Double', 15, 2);
    hotel.addRooms('Executive', 5, 3);
    hotel.addRooms('Presidential', 2, 4);


    console.log('Room Count: ', hotel.countAvailableRooms());
    console.log('Presidential Room Count: ', hotel.countAvailableRooms('Presidential'));


    let customer1 = hotel.addCustomer("Suraj", "1234567890", "suraj@mail.cin", "22212131");

    let booking = hotel.book(customer1, hotel.rooms[1]);

    
    console.log(booking);
    console.log(customer1);
    console.log(hotel.rooms[1]);
    
    hotel.checkOut(booking.bookingId);


    console.log(booking);
    console.log(customer1);
    console.log(hotel.rooms[1]);
    

    console.log('Room Count: ', hotel.countAvailableRooms());
}


main();