type person = {
    name: string
}
type contact = {
    PhNo: Number
}

type Person_Contact = person & contact;    // insertion type "&"

const details: Person_Contact = {
    name: "mani",
    PhNo: 9123453215
}
console.log(details);

