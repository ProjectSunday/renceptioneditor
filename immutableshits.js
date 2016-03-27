immutablejs shits

theFormerMap = theFormerMap.delete("2")

test.filter(function(el) {
    return el.a != 1;
});



Array.prototype.clone = function() {
	return this.slice(0);
};


Array.from({length: 5}, (v, k) => k);    
// [0, 1, 2, 3, 4]