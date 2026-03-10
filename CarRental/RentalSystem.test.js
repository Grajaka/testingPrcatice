const {RentalSystem} = require('./RentalSystem');

describe('Car rental system', () => {
    let System;
    let TestVehicle;

    beforeEach(() => {
        System = new RentalSystem();
        TestVehicle = {
            id: 1, 
            make: 'Toyota',
            dailyRate: 50
        };
        System.addVehicle(TestVehicle);
    });

    test ("Successful rental marks a vehicle as rented", () => {
        System.rentVehicle(1, '2023-10-01', '2023-10-05');
        expect(TestVehicle.rented).toBe(true);
    });

    test("Error when renting an already rented vehicle", () => {
        System.rentVehicle(1, '2023-10-01', '2023-10-05');
        expect(() => {
            System.rentVehicle(1, '2023-10-06', '2023-10-10');
        }).toThrow("Vehicle is already rented");
    });

    test("Error when dates are invalid starts>= end", () => {
        expect(() => {
            System.rentVehicle(1, '2023-10-05', '2023-10-01');
        }).toThrow("Return date must be after initial date");
    });

    test("Calculates correct cost based on full days", () => {
        const cost = System.calculateRentalCost(1, '2023-10-01', '2023-10-05');
        expect(cost).toBe(200); // 4 days * $50/day
    });

    test("Returning a vehicle frees it for a new rental", () => {
        System.rentVehicle(1, '2023-10-01', '2023-10-05');
        System.returnVehicle(1);
        expect(TestVehicle.rented).toBe(false);

        expect(() => {
            System.rentVehicle(1, '2023-10-06', '2023-10-10');
        }).not.toThrow();
    });
});    