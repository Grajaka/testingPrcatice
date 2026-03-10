class RentalSystem {
    constructor() {
        this.vehicles = [];
    }

    addVehicle(vehicle) {
        vehicle.rented = false;
        this.vehicles.push(vehicle);
    }

    rentVehicle(id, initialDate, returnDate) {
        const initial = new Date(initialDate);
        const returnD = new Date(returnDate);

        if (initial >= returnD) {
            throw new Error("Return date must be after initial date");
        }
        const vehicle = this.vehicles.find(v => v.id === id);
        if (!vehicle) {
            throw new Error("Vehicle not found");
        }
        if (vehicle.rented) {
            throw new Error("Vehicle is already rented");
        }
        vehicle.rented = true;
    }

    calculateRentalCost(id, initialDate, returnDate) {
        const vehicle = this.vehicles.find(v => v.id === id);
        if (!vehicle) {
            throw new Error("Vehicle not found");
        }
        const initial = new Date(initialDate);
        const returnD = new Date(returnDate);
        if (initial >= returnD) {
            throw new Error("Return date must be after initial date");
        }

        const days = Math.ceil((returnD - initial) / (1000 * 60 * 60 * 24));
        
        return days* vehicle.dailyRate;
    }

    returnVehicle(id) {
        const vehicle = this.vehicles.find(v => v.id === id);
        if (vehicle) {
            vehicle.rented = false;
        } 

    }

}

module.exports = { RentalSystem };