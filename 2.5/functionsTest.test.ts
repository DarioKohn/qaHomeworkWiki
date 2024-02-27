// game and price are required when calling the function in order for the function to work
function gameGiver(game: string) : any {
    if (game == 'Red Dead Redemption 2') {
        return 59.99; 
    } else if (game == 'NBA 2k') {
        return 19.99; 
    } else if (game == 'PalWorld') {
        return 29.99; 
    } else if (game == 'Bioshock') {
        return 19.99; 
    } else if (game == 'Dead Space') {
        return 59.99; 
    } else {
        return `We do not have that ${game}`; 
    }
}

describe("testing gameGiver", () => {
    it("should give us rdr2", () => {
        expect(gameGiver("Red Dead Redemption 2")).toBe(59.99); 
    }); 
    it("should give use NBA 2k", () => {
        expect(gameGiver("NBA 2k")).toBe(19.99); 
    }); 
    it("should give us palworld", () => {
        expect(gameGiver("PalWorld")).toBe(29.99); 
    }); 
    it("should give us bioshock", () => {
        expect(gameGiver("Bioshock")).toBe(19.99); 
    }); 
    it("should give us dead space", () => {
        expect(gameGiver("Dead Space")).toBe(59.99); 
    }); 
})

function movieDiscountCalc(movieMems: boolean, senior: boolean, milOrEmt: boolean){
// ^ function starts the function off followed by a name that we set and parameters if needed for the function.
if(movieMems && senior && milOrEmt) return 0.40; 
// * ^ anyone who qualifies for all three discounts
if((movieMems && senior) || (movieMems && milOrEmt)) return 0.35; 
// * ^ anyone who is a senior and a member or a first responder and a member
if(senior || milOrEmt) return 0.15; 
//* ^ anyone who is a senior or a first responder
if(movieMems) return 0.10; 
//* ^ anyone who is a movie member
return 0; 
//* ^ for anyone who doesn't qualify for a discount
}

it("should give the discount for all 3", () => {
    expect(movieDiscountCalc(true, true, true)).toBe(0.40); 
}); 
it("should give the discount for seniors and movie members or mm and first responders", () => {
    expect(movieDiscountCalc(true, false, true)).toBe(0.35); 
}); 
it("should give the discount for seniors or first responder", () => {
    expect(movieDiscountCalc(false, true, false)).toBe(0.15); 
}); 
it("should give the discount for movie members", () => {
    expect(movieDiscountCalc(true, false, false)).toBe(0.10); 
}); 
it("shouldn't give back a discount", () => {
    expect(movieDiscountCalc(false,false,false)).toBe(0);
}); 