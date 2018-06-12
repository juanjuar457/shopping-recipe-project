export class Ingredient {
constructor(public name: string, public  amount: number) {}
}


// KIP>>> instead of manually assigning these properties in ts,
// ts has a shortcut for this!!!


// use above syntax for this shortcut instead of having to do this:

// export class Ingredient {
//   public name: string;
//   public amount: number;

// constructor(name: string, amount: number) {
//   this.name = name;
//   this.amount = amount;
//   }
// }

// ts has a shorthand for this!!!!! lines 1 - 3!!
// you're adding an accessor in front of both props
