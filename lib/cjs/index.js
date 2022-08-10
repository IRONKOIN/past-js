"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
const agoSeconds_1 = require("./utils/second.js");
Object.defineProperty(exports, "agoSeconds", { enumerable: true, get: function () { return agoSeconds_1.agoSeconds; } });
const agoMinutes_1 = require("./utils/minute.js");
Object.defineProperty(exports, "agoMinutes", { enumerable: true, get: function () { return agoMinutes_1.agoMinutes; } });
const agoHours_1 = require("./utils/hour.js");
Object.defineProperty(exports, "agoHours", { enumerable: true, get: function () { return agoHours_1.agoHours; } });
const agoDays_1 = require("./utils/day.js");
Object.defineProperty(exports, "agoDays", { enumerable: true, get: function () { return agoDays_1.agoDays; } });
const agoWeeks_1 = require("./utils/week.js");
Object.defineProperty(exports, "agoWeeks", { enumerable: true, get: function () { return agoWeeks_1.agoWeeks; } });
const agoMonths_1 = require("./utils/month.js");
Object.defineProperty(exports, "agoMonths", { enumerable: true, get: function () { return agoMonths_1.agoMonths; } });
const agoYears_1 = require("./utils/year.js");
Object.defineProperty(exports, "agoYears", { enumerable: true, get: function () { return agoYears_1.agoYears; } });
const agoDecades_1 = require("./utils/decade.js");
Object.defineProperty(exports, "agoDecades", { enumerable: true, get: function () { return agoDecades_1.agoDecades; } });
const agoCenturies_1 = require("./utils/century.js");
Object.defineProperty(exports, "agoCenturies", { enumerable: true, get: function () { return agoCenturies_1.agoCenturies; } });