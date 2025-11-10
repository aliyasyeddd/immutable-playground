import { List } from "immutable"

const names = ["ramsha", "nisha", "alina" ];

// Step 2: Convert the array into an Immutable List
const immutableNames = List(names);

console.log(typeof immutableNames);
console.log(immutableNames.toString());
console.log('Is regular array?', Array.isArray(immutableNames)); // false
console.log('Is Immutable List?', immutableNames instanceof List); // true