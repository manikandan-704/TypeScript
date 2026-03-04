type Bike = {
    brand: string;
};

type Car = {
    speed: number;
};

const findVehicle = (a: Bike | Car) => {
    if ("brand" in a) {
        console.log("Bike brand:", a.brand);
    } else {
        console.log("Car speed:", a.speed);
    }
};

// findVehicle({ brand: "Yamaha" });
findVehicle({ speed: 180 });