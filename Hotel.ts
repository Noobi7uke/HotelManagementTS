import Bookings, {SingleBooking} from './Booking';
import Customer from './Customer';
import Room from './Room';
import { find } from './helper';

class Hotel {
    name: string;
    rooms: Room[];
    customers: Customer[];
    bookings: Bookings;

    constructor(name: string){
        this.name = name;
        this.rooms = [];
        this.customers = [];
        this.bookings = new Bookings();
    }

    addRoom(type: string): void;
    addRoom(type: string, floor: number): void;
    addRoom(type: string, floor?: number){
        let roomNumber = this.rooms.length>0?this.rooms[this.rooms.length-1].roomNo + 1:1;

        if(floor === undefined)
            floor = 1;

        let room = new Room(roomNumber, type, floor);
        this.rooms.push(room);
    }

    addRooms(type: string, count: number): void;
    addRooms(type: string, count: number, floor: number): void;
    addRooms(type: string, count: number, floor?: number){

        if(floor===undefined)
            floor = 1;

        for(let i=0;i<count;i++)
            this.addRoom(type, floor);
    }


    addCustomer(name: string, mobile:string, email:string, ssn:string){
        let cusId = this.customers.length>0?this.customers[this.customers.length-1].customerId + 1:1;
        let customer = new Customer(cusId, name, mobile, email, ssn);
        this.customers.push(customer);
        return customer;
    }


    // bookRoom(roomNo: number, cusId: number){
    //     this.bookings.book(c)
    // }
    
    countAvailableRooms():number;
    countAvailableRooms(type: string):number;
    countAvailableRooms(type?: string): number{
        if(type){
            switch(type){
                case 'Single':
                case 'Double':
                case 'Executive':
                case 'Presidential':
                    return this.rooms.reduce((count, room):number=>count+(room.type.type===type && !room.occupied?1:0), 0);      
                default:
                    throw Error("Invalid Room type");
            }
        }else return this.rooms.reduce((count, room):number=>count+(room.occupied?0:1), 0);
    }
    

    checkOut(bookingId: number):void;
    checkOut(bookingId: number, date: Date):void;
    checkOut(bookingId: number, date?: Date):void{
        let booking = this.bookings.getBooking(bookingId);
        
        if(booking === undefined){
            throw Error('Invalid booking-id');
            return;
        } else {

            let room = find(this.rooms, ({roomNo }: Room) => roomNo===booking.roomNo);
            let customer = find(this.customers, ({ customerId }: Customer)=> customerId===booking.customerId);

            
            if(booking === undefined || room===undefined || customer===undefined)
                throw Error("No such booking available");
            
            
            if(date===undefined)
                date = new Date();
            
            let days = Math.ceil((date.getTime() - booking.date.getTime())/(1000*60*60*24));
            
            let total = days * room.type.price;
            let balance = total - booking.advancePaid;
            booking.totalAmount = total;
            booking.balance = balance;

            customer.addBalance(balance);
            
            room.free();
        }
        
    }


    book(customer: Customer, room: Room): SingleBooking;
    book(customer: Customer, room: Room, days: number): SingleBooking;
    book(customer: Customer, room: Room, days: number, advancePaid: number): SingleBooking;
    book(customer: Customer, room: Room, days?: number, advancePaid?: number){
        if(days === undefined)
            days = 1;
        
        if(advancePaid === undefined)
            advancePaid = 0;

        return this.bookings.book(customer, room, days, advancePaid);
    }
}




export default Hotel;