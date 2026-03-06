
//named export

export namespace Fun {   // namespace
    export const sub = (a: number, b: number): number => {
        return a - b;
    }

    export const mul = (a: number, b: number): number => {
        return a * b;
    }

    export const div = (a: number, b: number): number => {
        return a / b;
    }
}

// default export

function add (a:number,b:number):number{
    return a+b;
} 

export default add 