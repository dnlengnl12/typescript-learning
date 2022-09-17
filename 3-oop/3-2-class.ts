type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
}
class CoffeeMachine {
    static BEANS_GRAMM_PER_SHOT: number =  7;
    private coffeeBeans: number = 0;

    constructor(coffeeBeans: number) {
        this.coffeeBeans = coffeeBeans
    }
    
    static makeMachine(coffeeBeans: number): CoffeeMachine {
        return new CoffeeMachine(coffeeBeans)
    }

    makeCoffee(shots: number): CoffeeCup {
        if(this.coffeeBeans < CoffeeMachine.BEANS_GRAMM_PER_SHOT * shots) {
            throw new Error('not enough Coffee Beans');
        }

        this.coffeeBeans -= CoffeeMachine.BEANS_GRAMM_PER_SHOT * shots;

        return {
            shots,
            hasMilk: false
        }
    }
}

const maker = new CoffeeMachine(300);

console.log(maker.makeCoffee(3));