import { List, Map } from "immutable"

const names = ["ramsha", "nisha", "alina" ];

// Step 2: Convert the array into an Immutable List
const immutableNames = List(names);

console.log(typeof immutableNames);
console.log(immutableNames.toString());
console.log('Is regular array?', Array.isArray(immutableNames)); // false
console.log('Is Immutable List?', immutableNames instanceof List); // true


let userBio = {
    name: "Aliya",
    id: 224,
    email: "mahaboobaliya02@gmail.com"
}

const immutableUser = Map(userBio)

//.toJS() → Converts Immutable data → Readable, plain JavaScript.
const plainUser = immutableUser.toJS();
const plainNames = immutableNames.toJS();

console.log('Immutable Map:', immutableUser.toString());
console.log('Plain JS Object:', plainUser);

console.log('Immutable List:', immutableNames);
console.log('Plain JS Array:', plainNames);

