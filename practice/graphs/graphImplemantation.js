// Graph implemantation

class Graph{
    constructor(noOfVertices){
        // defining vertex array
        // and adjacent list
        this.noOfVertices = noOfVertices;
        this.adjList = new Map();
    }

    // add vertex to the graph
    addVertex(v){
        // initialize the adjacent list with an empty array
        this.adjList.set(v, []);
    }

    // add edge to the graph
    addEdge(v, w){
        // get the list for vertex v
        // and put w denoting edge between v and w
        this.adjList.get(w).push(v);
    }

    // prints the vertex and adjacency list
    printGraph(){
        // get all the vertices
        var getKeys = this.adjList.keys();
        // iterate over the vertices
        for(var i of getKeys){
            // 
            var getValues = this.adjList.get(i);
            var conc = "";

            // iterate over the adjacency list
            // concatenate the value into a string
            for(var j of getValues){
                cons += j + " ";
            }

            // print the vertex and its adjacency list
            console.log(i + " -> " + conc);
        }
    }
}

// using the above implemented graph class
var g = new Graph(6);
var vertices = ["A", "B", "C", "D", "E", "F"]

// adding vertices
for(var i = 0; i < vertices.length; i++){
    g.addVertex(vertices[i]);
}

// adding edges
g.addEdge("A", "B");
g.addEdge("A", "B");
g.addEdge("A", "D");
g.addEdge("B", "D");
g.addEdge("C", "F")
g.addEdge("D", "E");
g.addEdge("E", "F");
console.log(g);