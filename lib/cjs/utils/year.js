"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const time_sec = require("./second.js");
exports.agoYears = void 0;
function agoYears(timestamp) {
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
			var time_year = time_sec.agoSeconds(timestamp) / 311040000
			return Math.round(time_year) ;
		}
	}
}
exports.agoYears = agoYears;