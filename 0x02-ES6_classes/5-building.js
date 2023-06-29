class Building {
  constructor(sqft) {
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}

// Example of a class extending Building
class House extends Building {
  constructor(sqft, bedrooms) {
    super(sqft);
    this._bedrooms = bedrooms;
  }

  get bedrooms() {
    return this._bedrooms;
  }

  evacuationWarningMessage() {
    return 'Evacuate the house immediately!';
  }
}

// Creating an instance of the House class
const myHouse = new House(1500, 3);

// Accessing the attributes and methods
console.log(myHouse.sqft); // Output: 1500
console.log(myHouse.bedrooms); // Output: 3
console.log(myHouse.evacuationWarningMessage()); // Output: "Evacuate the house immediately!"

