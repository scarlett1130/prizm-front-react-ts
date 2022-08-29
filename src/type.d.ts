interface UserInfo {
    name: string,
    // password: string,
    email: string,
    isLogin: boolean
}

type UserState = {
    userInfo: UserInfo;
}

interface ITodo {
    name: string;
    id: number;
    createdAt: Date;
    updatedAt: Date;
    isCompleted: boolean;
    expiresAt?: Date;
}

type TodoState = {
    todos: ITodo[];
    userInfo?: { name: string, password: string }
}