class stack {
    constructor() {
        this.items = [];
    }

    // add elements to the stack
    add(element) {
        return this.items.push(element);
    }

    // remove elements
    remove() {
        if (this.items.length > 0) {
            return this.items.pop();
        }
    }

    // for accessing peek element
    peek() {
        return this.items[this.items.length - 1];
    }

    // check if stack is empty
    isEmpty() {
        return this.items.length == 0;
    }

    // size of the stack
    size() {
        return this.items.length;
    }

    // empty a stack
    empty() {
        this.items = [];
    }
}

let st = new stack();
st.add(1);
console.log(st);
console.log(st.size())
console.log(st.empty())
console.log(st.isEmpty())
console.log(st);