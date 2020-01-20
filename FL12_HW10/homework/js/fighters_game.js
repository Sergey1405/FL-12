class Fighter {
    constructor(object) {
        let maxHp = 100;
        let minHp = 0;
        let wins = 0;
        let lose = 0;
        let currhp = object.hp;
        this.getName = () => object.name,
            this.getStrength = () => object.strength,
            this.getDamage = () => object.damage,
            this.getAgility = () => object.agility,
            this.gethp = () => currhp,
            this.addWin = function() {
                wins += 1;
            }, this.addLose = function() {
                lose += 1;
            }
        this.heal = function(healpoints) {
            if (currhp >= maxHp) {
                currhp = maxHp;
            } else {
                currhp += healpoints;
            }
        }
        this.attack = (fighterAttack) => {
            let percent = 100;
            let probability = percent -
                (fighterAttack.getAgility() +
                    fighterAttack.getStrength());
            if (Math.random() * percent < probability) {
                let damageValue = object.damage;
                console.log(this.getName() +
                    ' give ' + this.getDamage() + ' damage ' +
                    'to ' + fighterAttack.getName());
                fighterAttack.dealDamage(damageValue);
            } else {
                console.log(this.getName() + ' missed');
            }
        }
        this.dealDamage = function(damage1) {
            if (this.gethp() <= minHp) {
                currhp = minHp;
            } else {
                currhp -= damage1
            }
        }
        this.logCombatHistory = function() {
            console.log(`Name: ${this.getName()} Wins: ${wins} Lose:${lose}`);
        }
    }
}
let battle = (Fighter1, Fighter2) => {
    Fighter1.attack(Fighter2);
    Fighter2.attack(Fighter1);
    if (Fighter1.gethp() === 0) {
        Fighter2.addWin();
        Fighter1.addLose();
        console.log(`You lose ${Fighter1.getName()}`);
    } else if (Fighter2.gethp() === 0) {
        Fighter1.addWin();
        Fighter2.addLose();
        console.log(`You lose ${Fighter2.getName()}`);
    } else {
        battle(Fighter1, Fighter2);
    }
}
const Fighter1 = new Fighter({
    name: 'Maximus',
    damage: 20,
    strength: 20,
    agility: 70,
    hp: 100
});
const Fighter2 = new Fighter({
    name: 'Comodus',
    damage: 25,
    stength: 25,
    agility: 20,
    hp: 90
});
battle(Fighter1, Fighter2);