function Node(d) {
  return {
    data: d,
    next: null,
    addToTail: function(newNodeData) {
      var newNode = Node(newNodeData);
      var current = this;
      while (current.next != null) {
        current = current.next;
      }
      current.next = newNode;
    }
  };
}

var n1 = Node("n");
var n2 = Node("o");
var n3 = Node("o");

n1.next = n2;
n2.next = n3;

n1.addToTail("n");

console.log(n1.next.next.next.data);