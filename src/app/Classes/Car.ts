import {Addon} from './Addon';

export class Car {
    Id: any;
    licensePlate: string;
    make: string;
    model: string;
    color: string;
    engineCode: string;
    registrationDate: Date;
    previousOwner: string;
    mileage: number;
    pictures: string; //files[]
    addOns: Addon[];
    category: string;
    nextAction: any; //ActionId
}