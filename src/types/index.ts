interface Todo{
    id: string;
    title: string;
    completed: boolean;
    description?: string;
}

export type TodoDTO = Todo;
