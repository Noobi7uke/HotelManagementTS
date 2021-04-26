class Customer {
    customerId: number;
    name: string;
    mobile: string;
    email: string;
    ssn: string;
    balance: number;


    constructor(customerId:number, name: string, mobile: string, email: string, ssn: string){
        this.customerId = customerId;
        this.name = name;
        this.mobile = mobile;
        this.email = email;
        this.ssn = ssn;
        this.balance = 0;
    }


    addBalance(bal: number){
        this.balance += bal;
    }

}

export default Customer;