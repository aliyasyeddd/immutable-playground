//step2-Import Map from immutable.
import { Map } from "immutable";

//Step1 Create a plain JS object with keys: name, id, email.
let obj = {
    name: "Aliya",
    id: 224,
    email: "mahaboobaliya02@gmail.com"
}



//step 3 Convert the object into an Immutable Map.
const immutableUser = Map(obj)
//Convert Immutable → plain JS before saving to localStorage
const plainUser = immutableUser.toJS()
console.log(plainUser)

// Save to localStorage
localStorage.setItem('user', JSON.stringify(plainUser));

// Retrieve and inspect
const retrieved = JSON.parse(localStorage.getItem('user'));
console.log('Retrieved from localStorage:', retrieved);

//step 4 Try accessing a field using .get("name").
console.log("Name (Immutable):", immutableUser.get("name"));



//step 4 Log results and note the difference from regular JS objects.
console.log("Name (Plain JS):", obj.name);


// both the Immutable Map and your plain JS object store the same data — just accessed differently:
// JS object → user.name
// Immutable Map → immutableUser.get("name")

// Step 5: Log the full Immutable Map
//console.log("Immutable Map:", immutableUser);

//To see a human-readable view, use .toString()
console.log("Immutable Map:", immutableUser.toString());

const updatedUser = immutableUser.set("email", "newemail@example.com");

console.log("Original email:", immutableUser.get("email"));
console.log("Updated email:", updatedUser.get("email"));