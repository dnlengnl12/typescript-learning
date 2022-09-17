{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    }
    interface CoffeeMachine {
        makeCoffee(shots: number): CoffeeCup;
    }

    interface CommercialCoffeeMaker {
        makeCoffee(shots: number): CoffeeCup;
        fillCoffeeBeans(beans:number) : void;
        clean(): void;
    }
    class CoffeeMachineImpl implements CoffeeMachine, CommercialCoffeeMaker {
        private static readonly BEANS_GRAMM_PER_SHOT: number =  7;
        private coffeeBeans: number = 0;

        private constructor(coffeeBeans: number) {
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

    const maker = CoffeeMachineImpl.makeMachine(32);

    console.log(maker.makeCoffee(3));

    class AmateurUser {
        constructor(private machine: CoffeeMachine) {}

        makeCoffee() {
            const coffee = this.machine.makeCoffee(3);
            console.log(coffee);
        }
    }

    class ProBarista {
        constructor(private machine: CommercialCoffeeMaker) {}

        makeCoffee() {
            const coffee  = this.machine.makeCoffee(3);
            this.machine.fillCoffeeBeans(45);
            this.machine.clean();
        }
    }

    const ama = new AmateurUser(maker);
    const pro = new ProBarista(maker);
    console.log(pro.makeCoffee())
}