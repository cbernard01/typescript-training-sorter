import {NumberCollection} from "./classes/NumberCollection";
import {CharactersCollection} from "./classes/CharactersCollection";
import {LinkedListCollection} from "./classes/LinkedListCollection";

const numbersCollection = new NumberCollection([10, 3, -5, 0]);
numbersCollection.sort();
console.log(numbersCollection.data);

const characterCollection = new CharactersCollection("ASFDdsadiguopaljKZXCksdjgiaosDFJKL");
characterCollection.sort();
console.log(characterCollection.data);

const linkedListCollection = new LinkedListCollection();
linkedListCollection.add(10);
linkedListCollection.add(5);
linkedListCollection.add(-1);
linkedListCollection.add(12);
linkedListCollection.add(-1200);
linkedListCollection.add(4);

linkedListCollection.sort();
linkedListCollection.print();
