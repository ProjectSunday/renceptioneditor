Array.prototype.upsig = function(predicate, values) {
	var index = this.findIndex(predicate)
	if (index == -1) throw "upsig error"
	Object.assign(this[index], values)
	return this
}

Array.prototype.fbi = function (id) {
	return this.find(x => x.id === id)
}
Array.prototype.fibi = function (id) {
	return this.findIndex(x => x.id === id)
}