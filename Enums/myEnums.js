var seatChoice;
(function (seatChoice) {
    seatChoice[seatChoice["AISLE"] = 12] = "AISLE";
    seatChoice[seatChoice["MIDDLE"] = 14] = "MIDDLE";
    seatChoice[seatChoice["WINDOW"] = 16] = "WINDOW";
    seatChoice[seatChoice["FOURTH"] = 18] = "FOURTH";
})(seatChoice || (seatChoice = {}));
var hiranSeat = seatChoice.WINDOW;
console.log(hiranSeat);
