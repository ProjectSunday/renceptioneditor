Array.prototype.upsig = function(predicate, values) {
	var index = this.findIndex(predicate)
	if (index == -1) throw "upsig error"
	Object.assign(this[index], values)
	return this
}