import Customer from './Customer';
import { find } from './helper';
import Room from './Room';

interface SingleBooking{
    bookingId: number;
    roomNo: number;
    customerId: number;
    days: number;
    totalAmount: number;
    advancePaid: number;
    balance: number;
    date: Date;
};


class Bookings{
    bookings: Array<SingleBooking>;
    nextBookingId: number;  
    

    constructor(){
        this.bookings = [];
        this.nextBookingId = 1;
    }

    getBooking(bookingId: number):SingleBooking|undefined{
        return find(this.bookings, (booking:SingleBooking)=>booking.bookingId===bookingId);
    }

    book(customer: Customer, room: Room, days: number, advancePaid: number): SingleBooking{
        

        let booking: SingleBooking = {
            bookingId: this.nextBookingId,
            roomNo: room.roomNo,
            customerId: customer.customerId,
            days: days,
            advancePaid: advancePaid,
            totalAmount: 0,
            balance: 0,
            date: new Date()
        };

        this.bookings.push(booking);
        this.nextBookingId++;
        room.allot();

        return booking;
    }

}


export { SingleBooking };
export default Bookings;