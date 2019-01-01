import { Response } from "express";
import { errArr } from "./err";

class response {
    constructor(
        public code: number,
        public data?: any,
        public err?: any
    ) { }
}

export function successRes(res: Response, data: any) {
    res.json(new response(0, data))
}

export function failRes(res: Response, code: number) {
    res.json(new response(code, null, errArr[code]))
}