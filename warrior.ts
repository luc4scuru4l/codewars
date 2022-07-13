class Warrior{
    _level: number = 1;
    _rank: string = 'Pushover';
    _experience: number = 100;
    _achievements: Array<string> = [];

    level(): number{
        return this._level;
    }
    experience(): number{
        return this._experience;
    }
    rank(): string{
        return this._rank;
    }
    achievements(): Array<string>{
        return this._achievements;
    }
    private add_exp(exp: number){
        const ranks: Array<string> = ["Pushover", "Novice", "Fighter", "Warrior", "Veteran", "Sage", "Elite", "Conqueror", "Champion", "Master", "Greatest"];
        this._experience = Math.min(10000, this._experience + exp);
        this._rank = ranks[~~(this._experience / 1000)];
        this._level = ~~(this._experience/100);
    }
    battle(enemyLevel: number): string{
        if(enemyLevel < 1 || enemyLevel > 100){
            return 'Invalid level';
        }
        const diff: number = enemyLevel - this._level;
        if(diff < -1){
            return 'Easy fight';
        }
        if(diff < 1){
            !diff ? this.add_exp(10) : this.add_exp(5);
            return 'A good fight';
        }else{
            const enemyRank: number = ~~(enemyLevel / 10);
            const diffRank: number = enemyRank - ~~(this._level / 10);
            if((diffRank === 1 && diff < 5) || !diffRank){
                this.add_exp(20 * diff * diff);
                return 'An intense fight';
            }
            return "You've been defeated"; 
        }
    }
    training(arr: [string, number, number]): string{
        if(this._level < arr[2]){
            return 'Not strong enough';
        }
        this.add_exp(arr[1]);
        this._achievements.push(arr[0]);
        return arr[0];
    }
}
