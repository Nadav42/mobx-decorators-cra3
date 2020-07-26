import { observable, action, computed } from "mobx"

class Store {
    @observable amount = 100

    @computed get mult() {
        return this.amount * 2;
    }

    @action
    increaseAmount = () => {
        this.amount = this.amount + 100;
    }

    @action
    decreaseAmount = () => {
        this.amount = Math.max(this.amount - 100, 0);
    }
}

export default Store;