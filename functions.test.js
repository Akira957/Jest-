const functions = require("./functions");
//should equal 4
test("Adds 2 + 2 to equal 4", () => {
    expect(functions.add(2, 2)).toBe(4);
});

//should equal 16
test("Multiplies 4 * 4 to equal 16", () => {
    expect(functions.multiply(4, 4)).toBe(16);
});

//division, shold be equal 12
test("Divide 144 / 12 to equal 12", () => {
    expect(functions.divide(144, 12)).toBe(12);
});

// should not equal 5 
test("Adds 2 + 2 to NOT equal 5", () => {
    expect(functions.add(2, 2)).not.toBe(5);
});

//should not equal 15
test("Multiplies 6 * 3 to NOT equal 15", () => {
    expect(functions.multiply(6, 3)).not.toBe(15);
});

//should not equal 25 
test("Divide 225 / 12 to NOT equal 25", () => {
    expect(functions.divide(225, 12)).not.toBe(25);
});

// to be null 
test("Should be null", () => {
    expect(functions.isNull()).toBeNull();
});
// to be falsy 
test("Should be fasly", () => {
    expect(functions.checkValue(undefined)).toBeFalsy();
});

// to be true
test("should be true", () => {
    expect(functions.checkValue(0)).toBeFalsy();
});
// to equal the object
test("Should be Robert Ramirez object", () => {
    expect(functions.createUser()).toEqual({
        firstName: "Robert",
        lastName: "Ramirez"
    });
});

//less than and greater than
test("Should be under 1600", () => {
    const load1 = 800;
    const load2 = 800;
    expect(load1 + load2).toBeLessThanOrEqual(1600);
});

//greater than 
test("Should be over 2500", () => {
    const over1 = 2000;
    const over2 = 500;
    expect(over1 + over2).toBeGreaterThanOrEqual(2500);
});

//regex
test("There is not I in team", () => {
    expect("team").not.toMatch(/I/);
});

//regex number 2
test("There is not no in team", () => {
    expect("team").not.toMatch(/no/);
});

//Arrays
test("John should be in usernames", () => {
    usernames = ["john", "sam", "admin"];
    expect(usernames).toContain("john");
});

//Promise
// test("User fetched name should be Leanne Graham", () => {
//     expect.assertions(1);
//     return functions.fetchUser()
//         .then(data => {
//             expect(data.name).toEqual("Leanne Graham");
//         });
// });

// Async Await
test("User fetched name should be Leanne Graham", async () => {
    expect.assertions(1);
    const data = await functions.fetchUser()
    expect(data.name).toEqual("Leanne Graham");

});