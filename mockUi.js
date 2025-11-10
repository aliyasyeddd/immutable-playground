import { List } from "immutable";


let recentSearches = List([]);


const input = 'aliya';
recentSearches = recentSearches.unshift(input); // adds to front
recentSearches = recentSearches.slice(0, 5);
console.log('Recent Searches:', recentSearches.toJS());
