
const { goldbachPartitions } = require("../6kyu-Goldbach's-conjecture");

test('constraints', () => {
    expect(goldbachPartitions(101)).toEqual([]);
});

test("small integers", () => {
    expect(goldbachPartitions(4)).toEqual(["2+2"]);
    expect(goldbachPartitions(100)).toEqual(["3+97", "11+89", "17+83", "29+71", "41+59", "47+53"]);
});

test("large integers", () => {
    expect(goldbachPartitions(594)).toEqual(["7+587", "17+577", "23+571", "31+563", "37+557", "47+547", "53+541", "71+523", "73+521", "103+491", "107+487", "127+467", "131+463", "137+457", "151+443", "163+431", "173+421", "193+401", "197+397", "211+383", "227+367", "241+353", "257+337", "263+331", "277+317", "281+313", "283+311"]);
});