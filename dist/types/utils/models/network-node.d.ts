export interface NetworkNode {
    id: number;
    type: NetworkNodeType;
    appearances: number;
    picture: string;
    x?: number;
    y?: number;
}
export declare enum NetworkNodeType {
    Worker = "extra",
    Employer = "establishment"
}
