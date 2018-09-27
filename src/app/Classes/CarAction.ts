export class CarAction {
    Id: any;
    actionType: string;//enum
    actionDate: Date;
    cost: number;
    pictures: string; //file[]
    milageAtThatTime: number;
    partsAffected: string; //string[]
    actionProviderId: any;

}