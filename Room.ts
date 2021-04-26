interface SingleRoom {
    type: "Single",
    noOfBeds: 1;
    price: 4000
};

interface DoubleRoom {
    type: "Double";
    noOfBeds: 2;
    price: 6000
};

interface ExecutiveRoom {
    type: "Executive";
    noOfBeds: 3;
    price: 10000
};

interface PresidentialRoom {
    type: "Presidential";
    noOfBeds: 4;
    price: 20000
};

type RoomTypes = SingleRoom | DoubleRoom | ExecutiveRoom |  PresidentialRoom ;



class Room {
    roomNo: number;
    type: RoomTypes;
    floor: number;
    occupied: boolean;
    // hotelId: number;//

    


    constructor(roomNo: number, type: string, floor: number){
        this.roomNo = roomNo;
        this.floor = floor;
        this.occupied = false;
        switch(type){
            case 'Single':
                this.type  = {
                    type: 'Single',
                    price: 4000,
                    noOfBeds: 1
                } as SingleRoom;
                break;

            case 'Double':
                this.type  = {
                    type: 'Double',
                    price: 6000,
                    noOfBeds: 2
                } as DoubleRoom;
                break;
        
            case 'Executive':
                this.type = {
                    type: "Executive",
                    noOfBeds: 3,
                    price: 10000
                } as ExecutiveRoom;
                break;
            
            case  'Presidential':
                this.type = {
                    type: "Presidential",
                    noOfBeds: 4,
                    price: 20000
                } as PresidentialRoom;
                break;
            default:
                this.type  = {
                    type: 'Single',
                    price: 4000,
                    noOfBeds: 1
                } as SingleRoom;
                break;
        }
    }

    allot(){
        this.occupied = true;
    }

    free(){
        this.occupied = false;
    }
}


export default Room;