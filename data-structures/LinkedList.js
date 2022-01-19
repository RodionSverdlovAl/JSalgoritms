class LinkedList{
    constructor(){
        this.head = null
        this.tail = null
    }

    append(data){
        const node = {data, next: null}

        if(this.tail){
            this.tail.next = node
        }
        if(!this.head){
            this.head = node
        }

        this.tail = node
    }
}

const list = new LinkedList()
list.append('hi')
console.log(list);
