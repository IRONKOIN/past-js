"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.agoSeconds = void 0;
function agoSeconds(timestamp) {
	let length_timestamp = timestamp.toString().length;
	if (length_timestamp < 10){
		return "\r\n Enter UNIX TIMESTAMP of atleast 10 digits \r\n"
	} else if (length_timestamp > 13) {
		return "\r\n Entered UNIX TIMESTAMP can't be of more than 13 digits \r\n"
	} else {
		let timestamp_now = Date.now();
		if (timestamp > timestamp_now){
			return " \r\n This JS Library is not for users from future XD \r\n" ;
		} else {
			let trimString = function (string, length) { return string.length > length ? string.substring(0, length) : string; };
			let timestamp_sub = parseInt(trimString(timestamp_now.toString(), 10)) - parseInt(trimString(timestamp.toString(), 10))
			var time_sec = timestamp_sub
			return time_sec ;
		}
	}
}
exports.agoSeconds = agoSeconds;