const arrayTasks = {

	concat: function (arr1, arr2) {
    return arr1.concat(arr2);
	},

	insertAt: function (arr, itemToAdd, index) {
    arr.splice(index, 0, itemToAdd);
    return arr;
	},

	square: function (arr) {
    const newArray = arr.map(function(number){
      return number*number;
    })
    return newArray;
	},

	sum: function (arr) {
    const total = arr.reduce(function(runningTotal, currentNumber) {
	    return runningTotal + currentNumber;
	  }, 0)
	  return total;

	},

	removeAndClone: function (arr, valueToRemove) {
		const newArray = arr.filter(function(element){
			return element !== valueToRemove;
		})
		return newArray;
	},

	// findIndexesOf: function (arr, itemToFind) {
	// 	const newArray = arr.findIndex(function(element){
	// 		return itemToFind === element;
	// 	})
	// 	console.log(newArray);
	// 	return newArray;
	// },

	findIndexesOf: function (arr, itemToFind) {
		let newArray = [];
		arr.forEach(function(element, index){
			if(element === itemToFind){
				newArray.push(index);
			}
		})
		return newArray;
	}

	// sumOfAllEvenNumbersSquared: function (arr) {

	// }

	// ----------- EXTENSION ------------

	// findDuplicates: function (arr) {

	// },

}

module.exports = arrayTasks
