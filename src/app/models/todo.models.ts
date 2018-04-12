export default class Todo {
    _id: string;
    title: string;
    description: string;
    data: Date;
    status: string;

    constructor(
    ){
        this.title = ""
        this.description = ""
        this.date = new Date()
        this.state = ""
    }

    static generateMockTodo() : Todo {
        return {
            _id: "new",
            title: "",
            description: "",
            date: new Date(),
            status: ""
        }
     }
}

// model