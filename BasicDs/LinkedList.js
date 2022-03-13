class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.current = null;
    }
    add(n){
        let node = new Node(n);
        if(!this.head){
            this.head = node;
            this.current = node;
        }else{
            this.current.next = node;
            this.current = node;
        }
    }
    print(){
        let node = this.head;
        while(node){
            console.log(node.data);
            node = node.next;
        }
    }
    reverse(){
        let node = this.head;
        let prevNode = this.head;
        while(node){
            if(node == this.head){
                let tmp = node.next;
                node.next = null;
                prevNode = node;
                node = tmp
            }else{
                let tmp = node.next;
                node.next = prevNode;
                prevNode = node;
                node = tmp
                
            }
            
        }
        this.head = prevNode;
    }
}

let ll = new LinkedList();
ll.add(1);
ll.add(2);
ll.add(3);
ll.print();
ll.reverse();
console.log("Reversed")
ll.print();

console.log(Math.floor(11/10))