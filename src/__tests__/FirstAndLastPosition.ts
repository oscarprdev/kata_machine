import first_and_last_position from "@code/FirstAndLastPosition"

test('Peak element', () => {
    const foo1 = [5, 7, 7, 8, 8, 10];
    const target1 = 8;
    expect(first_and_last_position(foo1, target1)).toEqual([3, 4]);

    const foo2 = [5, 7, 7, 8, 8, 10];
    const target2 = 6;
    expect(first_and_last_position(foo2, target2)).toEqual([-1, -1]);

    const foo3 = [1, 2, 3, 4, 5, 6, 7];
    const target3 = 1;
    expect(first_and_last_position(foo3, target3)).toEqual([0, 0]);

    const foo4 = [1, 2, 3, 4, 5, 6, 7];
    const target4 = 7;
    expect(first_and_last_position(foo4, target4)).toEqual([6, 6]);

    const foo5 = [1, 2, 3, 4, 5, 6, 7];
    const target5 = 4;
    expect(first_and_last_position(foo5, target5)).toEqual([3, 3]);
});