import { ComponentInterface } from '../../stencil-public-runtime';
import { NetworkLink } from '../../utils/models/network-link';
import { NetworkNode } from '../../utils/models/network-node';
export declare class NetworkGraph implements ComponentInterface {
    nodes: NetworkNode[];
    links: NetworkLink[];
    element: HTMLElement;
    width: number;
    height: number;
    context: CanvasRenderingContext2D;
    simulation: any;
    transform: any;
    radiusLowerLimit: number;
    radiusUpperLimit: number;
    lineWidthLowerLimit: number;
    lineWidthUpperLimit: number;
    nodeRadiusScale: any;
    linkWidthScale: any;
    componentDidLoad(): void;
    initializeScales(): void;
    draw(): void;
    drawNode(node: NetworkNode): void;
    drawLink(link: NetworkLink): void;
    render(): any;
}
