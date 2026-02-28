//optional parameter

function Optional(name: string, age: number, role?: string) {
    console.log(name, age, role);
}
Optional("mani", 22);
Optional("isac", 21, "dev");

//defalut parameter

function Default(name: string, age: number, status: string = "Single") {
    console.log("are u ", status);
}
Default("madesh", 22);

//both parameters

function User(name: string, age: number, role: string = "Software dev", gender?: string): any {
    return { name, age, role, gender }
}
console.log(User("manikandan", 22));