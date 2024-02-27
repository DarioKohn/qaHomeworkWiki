it("can tell the difference in numbers", () => {
    const small: number = 5;
    var greaterOrEqual: number = 5;
    let big: number = 1234567;

    expect(small).toBeLessThan(big); 
    expect(greaterOrEqual).toBeGreaterThanOrEqual(small);
    expect(big).not.toBeLessThan(small);
});

it('includes parts of the variables', () => {
    const hello: string = "Hello Class";
    const sentence: string = "I'm tired of Hello World";
    
    expect(hello.includes("Howdy")).toBeFalsy();
    expect(sentence.includes("Hello World")).toBeTruthy();
});

it("should compare properly", () => {
    const numberOne: number = 3.14159;
    const numberTwo: number = 3.14;
    const stringOne: string = 'Howdy';
    const stringTwo: string = 'Howdy';

    expect(numberOne).toBeCloseTo(numberTwo);
    expect(numberOne).not.toEqual(numberTwo);
    expect(stringOne).toEqual(stringTwo);
})