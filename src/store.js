import { observable, action, computed } from "mobx"

class Store {
    @observable amount = 100

    @computed get total() {
        return this.price * this.amount
    }

    @action
    increaseAmount = () => {
        this.amount = this.amount + 100;
    }
}

export default Store;