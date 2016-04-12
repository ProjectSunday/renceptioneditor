Array.prototype.fbi = function (id) {
	return this.find(x => x.id === id)
}
Array.prototype.fibi = function (id) {
	return this.findIndex(x => x.id === id)
}

Array.prototype.fbv = function (id) {
	return this.find(x => x === id)
}
Array.prototype.fibv = function (id) {
	return this.findIndex(x => x === id)
}