function Test(x, index = 0, quesCount = 0, previous = 0, flag = false) {
    if(index == x.length) return flag;
    else if(x[index] == '?') return Test(x, index + 1, quesCount + 1, previous, flag);
    else if(!isNaN(n = parseInt(x[index])))
        if(n + previous == 10)
            if(quesCount == 3) return Test(x, index + 1, 0, n, true);
            else return false;
        else return Test(x, index + 1, 0, n, flag);
    else return Test(x, index + 1, quesCount, previous, flag);
}

test("STRING 1", () => expect(Test("arrb6???4xxbl5???eee5")).toEqual(true));
test("STRING 2", () => expect(Test("acc?7??sss?3rr1??????5")).toEqual(true));
test("STRING 3", () => expect(Test("5??aaaaaaaaaaaaaaaaaaaa?5?5")).toEqual(false));
test("STRING 4", () => expect(Test("9???1???9???1???9")).toEqual(true));
test("STRING 5", () => expect(Test("aa6?9")).toEqual(false));