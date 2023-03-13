export declare type Todo = {
    id: string;
    title: string;
    done: boolean;
};
export declare type User = {
    id: string;
    title: string;
    done: boolean;
};
import { AppSyncResolverEvent } from 'aws-lambda';
export declare function handler(event: AppSyncResolverEvent<any>): Promise<Todo | Todo[] | null>;
