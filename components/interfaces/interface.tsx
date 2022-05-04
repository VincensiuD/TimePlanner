interface Task{
    title: string;
    time:  Date;
    commenced: boolean;
    completed: boolean;
}

interface Client {
    id: number,
    title: string;
    description: string;
    tasks: Task[];
}