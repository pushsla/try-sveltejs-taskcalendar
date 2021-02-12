import Task from "./Task";

class CalendarEntry{
    id: number;
    task: Task;
}

export default class Calendar{
    private __tasks: CalendarEntry[];
    private __last_id: number;
    private __start_date: number;
    private __end_date: number;

    get Tasks(): CalendarEntry[]{
        return this.__tasks;
    }
    get Range(): [number, number]{
        return [this.__start_date, this.__end_date];
    }

    constructor(){
        this.__tasks = [];
        this.__last_id = 0;
        this.__start_date = 0;
        this.__end_date = 15;
    }

    addTaskObj(atask: Task){
        this.__tasks.push({id: this.__last_id, task: atask});
        this.__last_id++;

        this.__start_date = (atask.Start < this.__start_date) ? atask.Start - 5 : this.__start_date;
        this.__end_date = (atask.End >= this.__end_date) ? atask.End + 5 : this.__end_date;
    }
    addTask(name: string, start: number, end: number){
        this.addTaskObj(new Task(name, start, end));
    }
    removeTask(aid: number){
        this.__tasks = this.__tasks.filter((value) => (value.id != aid));
    }
    finishTask(aid: number){
        this.__tasks.forEach((task) => {
            if (task.id == aid){
                task.task.Finished = true;
            }
        })
    }
    colourTask(aid: number, colour: string){
        this.__tasks.forEach((task) => {
            if (task.id == aid){
                task.task.Colour = colour;
            }
        })
    }

}