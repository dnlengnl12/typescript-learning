{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    }
    class CoffeeMachine {
        private static readonly BEANS_GRAMM_PER_SHOT: number =  7;
        private coffeeBeans: number = 0;

        private constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans
        }
        
        static makeMachine(coffeeBeans: number): CoffeeMachine {
            return new CoffeeMachine(coffeeBeans)
        }

        fillCoffeeBeans(beans: number) {
            if(beans < 0) {
                throw new Error('value for beans should be greater than 0');
            }

            this.coffeeBeans += beans;
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

    const maker = CoffeeMachine.makeMachine(32);

    console.log(maker.makeCoffee(3));

    class user {
        get fullName(): string {
            return `${this.firstName} ${this.lastName}`
        }
        private internalAge = 4;
        get age(): number {
            return this.internalAge;
        }
        set age(num: number) {
            this.internalAge = num;
        }
        constructor(private firstName: string, private lastName: string) {
        }
    }
}