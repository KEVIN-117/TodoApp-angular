interface Todo{
    key?: string;
    id: string;
    title: string;
    completed: boolean;
    description: string;
}

interface Event {
    target: {
        value: string;
    };
}

interface TodoForm{
    title: string;
    description: string;
}

export type TodoDTO = Todo;

export type EventDTO = Event;
export type TodoFormDTO = TodoForm;
