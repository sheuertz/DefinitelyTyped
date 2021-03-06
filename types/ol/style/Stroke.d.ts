import { Color } from '../color';
import { ColorLike } from '../colorlike';

export interface Options {
    color?: Color | ColorLike;
    lineCap?: string;
    lineJoin?: string;
    lineDash?: number[];
    lineDashOffset?: number;
    miterLimit?: number;
    width?: number;
}
export default class Stroke {
    constructor(opt_options?: Options);
    clone(): Stroke;
    getChecksum(): string;
    getColor(): Color | ColorLike;
    getLineCap(): string;
    getLineDash(): number[];
    getLineDashOffset(): number;
    getLineJoin(): string;
    getMiterLimit(): number;
    getWidth(): number;
    setColor(color: Color | ColorLike): void;
    setLineCap(lineCap: string | undefined): void;
    setLineDash(lineDash: number[]): void;
    setLineDashOffset(lineDashOffset: number | undefined): void;
    setLineJoin(lineJoin: string | undefined): void;
    setMiterLimit(miterLimit: number | undefined): void;
    setWidth(width: number | undefined): void;
}
