const orderLib = require("../src/process-order");

test("bonus organs when heart is being bought by customer", () => {
    expect(orderLib.getFreeOrgans("heart")).toStrictEqual([{'organ': 'heart', 'count': 1}]);
});

test("bonus organs when liver is being bought by customer", () => {
    expect(orderLib.getFreeOrgans("liver")).toStrictEqual([{'organ': 'lung', 'count': 1}]);
});

test("bonus organs when lung is being bought by customer", () => {
    expect(orderLib.getFreeOrgans("lung")).toStrictEqual([{'organ': 'liver', 'count': 1}, {'organ': 'heart', 'count': 1}]);
});



test("summary of a processed order in right format", () => {
    expect(orderLib.orderSummary({"liver": 2, "lung": 1})).toStrictEqual("heart 0 liver 2 lung 1");
});




describe('processOrder', () => {
    it('should process order according to the cash, price and bonus_ratio', () => {
        orderLib.getFreeOrgans = jest.fn().mockReturnValue([{'organ': 'heart', 'count': 1}]);
        const result = orderLib.processOrder('heart', 10, 2, 4);
        expect(result).toStrictEqual({ heart: 6 });
    });
  });
