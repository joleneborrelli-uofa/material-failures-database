const { getPasswordHash, formatByRow } = require("../helpers");
const { errorMessages } = require("../constants");

// This might be pointless since it uses the implementation as the correct answer for the test case
it("Test password hash", () => {
    expect(getPasswordHash("test")).toBe(
        "n4bQgYhMfWWaL+qgxVrQFaO/TxsrC4Is0V1sFbDwCgg="
    );
});

it("Delete excluded columns in row", () => {
    const rows = [{ id: 1, object_id: 1, key: "value" }];

    expect(formatByRow(rows)).toStrictEqual(["value"]);
});

it("Return multiple key value pairs", () => {
    const rows = [{ key1: "value1", key2: "value2" }];

    expect(formatByRow(rows)).toStrictEqual([
        { key1: "value1", key2: "value2" },
    ]);
});

it("Throw no fields error", () => {
    expect(() => formatByRow([{ id: 1 }])).toThrowError(errorMessages.noFields);
});
