import { Map, List } from "immutable";

let userMap = {
    name: "Aliya",
    id: 224,
    email: "mahaboobaliya02@gmail.com"
}

const immutableUser = Map(userMap)

//get(key) Retrieves a value from a Map or List.
console.log(immutableUser.get('email'))


//set(key, value) Returns a new Immutable Map/List with the updated value.
const updatedUser = immutableUser.set('email', 'newmail@gmail.com');
console.log(updatedUser.get('email'))
//Note: userMap itself doesn’t change — you get a new version.


//update(key, updaterFn) Lets you modify a value based on its previous one.
const incrementedId = immutableUser.update('id', id => id + 1);
//Immutable collections (Map, List, etc.) don’t log cleanly in console — they show internal nodes.
//Use .toJS() to see readable, plain data:
console.log(incrementedId.toJS())

//unshift(value) Adds an item to the front of an Immutable List and returns a new List.
const names = ["ramsha", "nisha", "alina" ];

const immutableNames = List(names);

const newList = immutableNames.unshift("tushara")
console.log(newList.toJS())


//push(value) Adds an item to the end of a List, returns a new List.
const moreNames = newList.push("farhan")
console.log(moreNames.toJS())

//slice(start, end) Creates a new List with selected elements (like JS slice()).
const firstTwo = moreNames.slice(0, 2);
console.log(firstTwo.toJS())

//clear() Removes all elements, returning an empty Map/List.
const clearedList = moreNames.clear();
console.log(clearedList.toJS())

//| Operation Type       | Example                             | Mutates Original? | Returns New? |
// Immutable.js methods | `.set()`, `.push()`, `.update()`    | ❌ No              | ✅ Yes        |
// Normal JS methods    | `array.push()`, `object.prop = val` | ✅ Yes             | ❌ No         |
