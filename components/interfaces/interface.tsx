interface Task{
    title: string;
    time:  number;
    commenced: boolean;
    completed: boolean;
}

interface Client {
    id: number,
    title: string;
    description: string;
    tasks: Task[];
}