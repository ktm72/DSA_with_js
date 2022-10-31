class Node{
    constructor(value){
        this.root = value;
        this.right = null;
        this.left = null;
    }

}
class BST{
    constructor(){
        this.root = null;
    }
    insert(value){
        const newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
            return this;
        }
        let temp = this.root;
        while(true){
            if (newNode.value === temp.value) return undefined;
            if(newNode.value < temp.value ){
                if(temp.left === null){
                    temp.left = newNode;
                    return this;
                }
                temp = temp.left;
            } else {
                if(temp.right === null) return undefined;
                if(temp.right ===null) {
                    temp.right = newNode;
                    return this;
                }
                temp = temp.right;
            }
        }
    }
}

let myTree = new BST();
console.log()