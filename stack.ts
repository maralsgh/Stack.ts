 class Stack{
    private list  : number[];
    private maxSize : number;

    constructor() {
        this.maxSize = 10;
        this.list = new Array<number>(this.maxSize);
        this.list = [55, 44, 77];

    }


    public isEmpty() : boolean {
        return this.list.length === 0;
    }

    public isFull() : boolean {
        return this.list.length === this.maxSize;
    }

    public push(newItem) {
        console.log('add to list');
        if(this.isFull()){
            throw new Error('overflow');
        }
       this.list[this.list.length++] = newItem;
        return this.list;
    }

    public pop() {
        console.log('remove from list');
        if(this.isEmpty()){
            throw new Error('list is empty')
        }
        this.list.length--;
        return this.list;
    }

    public top() {
        console.log('top of the list');
        if (this.isEmpty()) {
            throw new Error('list is empty');
        }
        return this.list[this.list.length - 1];
    }

    public stackContents() {
        console.log('Stack contents');
        for (let i = 0; i < this.list.length; i++) {
            console.log(`stack[${i}]: ${this.list[i]}`);
        }
    }
}

var stack = new Stack();
  console.log(stack.push(88));
  console.log(stack.top());

  console.log(stack.pop());
  console.log(stack.top());



