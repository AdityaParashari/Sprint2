import { screenResponse } from '../dto/screenResponse';

export class theaterResponse{

    theaterId:number;
    theaterName:string;
    theaterCity:string;
    movieList:number[];
    screenList:screenResponse[];
    managerName:string;
    managerContact:string;
    constructor(theaterId:number,theaterName:string,theaterCity:string,movieList:number[],screenList:screenResponse[],managerName:string, managerContact:string){

        this.theaterId=theaterId;
        this.theaterName=theaterName;
        this.theaterCity=theaterCity;
        this.movieList=movieList;
        this.screenList=screenList;
        this.managerName=managerName;
        this.managerContact=managerContact;

    }
}