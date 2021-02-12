export default class Task{
    private __name: string;
    private __startDate: number;
    private __endDate: number;
    private __colour: string;
    private __finished: boolean;

    get Name(): string{
        return this.__name;
    }
    get Start(): number{
        return this.__startDate;
    }
    get End(): number{
        return this.__endDate;
    }
    get Colour(): string{
        return this.__colour;
    }
    get Finished(): boolean{
        return this.__finished;
    }
    set Name(name: string){
        this.__name = name;
    }
    set Start(start: number){
        this.__startDate = start;
    }
    set End(end: number){
        this.__endDate = end;
    }
    set Colour(colour: string){
        this.__colour = colour;
    }
    set Finished(finished){
        this.__finished = finished;
    }

    constructor(name: string, start: number, end: number) {
        this.__name = name;
        this.__startDate = start;
        this.__endDate = end;
        this.__colour = "#f0c";
    }
}