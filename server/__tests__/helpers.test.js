const { getPasswordHash, formatByHeader } = require("../helpers");
const { errorMessages } = require("../constants");

// This might be pointless since it uses the implementation as the correct answer for the test case
it("tests password hash", () => {
    expect(getPasswordHash("test")).toBe(
        "n4bQgYhMfWWaL+qgxVrQFaO/TxsrC4Is0V1sFbDwCgg="
    );
});

describe("formatByHeader", () => {
    it("should log a noFields error", () => {
        console.error = jest.fn();
        formatByHeader({ object: [{ id: 1 }] });
        expect(console.error).toHaveBeenCalledWith(errorMessages.noFields);
    });

    it("should return multiple key value pairs", () => {
        const rows = [{ key1: "value1", key2: "value2" }];

        expect(formatByHeader({ object: rows })).toStrictEqual({
            object: { 0: rows[0] },
        });
    });
});
