{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    }
    interface CoffeeMachine {
        makeCoffee(shots: number): CoffeeCup;
    }

    class CoffeeMachineImpl implements CoffeeMachine {
        private static readonly BEANS_GRAMM_PER_SHOT: number =  7;
        private coffeeBeans: number = 0;

        public constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans
        }
        
        static makeMachine(coffeeBeans: number): CoffeeMachineImpl {
            return new CoffeeMachineImpl(coffeeBeans)
        }

        fillCoffeeBeans(beans: number) {
            if(beans < 0) {
                throw new Error('value for beans should be greater than 0');
            }

            this.coffeeBeans += beans;
        }

        clean() {
            console.log('cleaning...');
        }

        private grindBeans(shots: number) {
            console.log(`grinding beans for ${shots}`);
            if(this.coffeeBeans < shots * CoffeeMachineImpl.BEANS_GRAMM_PER_SHOT) {
                throw new Error('Not enough coffee beans!');
            }
            this.coffeeBeans -= shots * CoffeeMachineImpl.BEANS_GRAMM_PER_SHOT;
        }

        private preheat(): void {
            console.log('heating up...');
        }

        private extract(shots: number): CoffeeCup {
            console.log(`Pulling ${shots} shots...`);
            return {
                shots,
                hasMilk: false
            }
        }

        makeCoffee(shots: number): CoffeeCup {
            this.grindBeans(shots);
            this.preheat();
            return this.extract(shots);
            // if(this.coffeeBeans < CoffeeMachineImpl.BEANS_GRAMM_PER_SHOT * shots) {
            //     throw new Error('not enough Coffee Beans');
            // }

            // this.coffeeBeans -= CoffeeMachineImpl.BEANS_GRAMM_PER_SHOT * shots;

            // return {
            //     shots,
            //     hasMilk: false
            // }
        }
    }
    class CaffeLatteMachine extends CoffeeMachineImpl {
        constructor(coffeeBeans: number, public readonly code: string) {
            super(coffeeBeans);
        }
        private steamMilk(): void {
            console.log('Steaming some milk...');
        }
        makeCoffee(shots: number): CoffeeCup {
            const coffee = super.makeCoffee(shots);
            this.steamMilk();
            return {
                ...coffee,
                hasMilk: true
            }
        }
    }

    class SweetCoffeeMaker extends CoffeeMachineImpl {
        constructor(coffeeBeans: number, private sugar: number) {
            super(coffeeBeans);
        } 

        private addSugar(shots: number) {
            console.log(`${shots} add sugar...`);
        }

        makeCoffee(shots: number): CoffeeCup {
            const coffee = super.makeCoffee(shots);
            this.addSugar(shots);
            return coffee
        }
    }
    const machine = CoffeeMachineImpl.makeMachine(300);
    const latteMachine = new CaffeLatteMachine(300, 'AAAA');
    const coffee = latteMachine.makeCoffee(1);
    console.log(coffee);
    console.log(latteMachine.code);
}