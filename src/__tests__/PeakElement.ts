import peak_element from "@code/PeakElement"

test('Peak element', () => {
    const foo = [1, 2, 3, 1]

    expect(peak_element(foo)).toBe(2)

    const foo2 = [1, 2, 1, 3, 5, 6, 4]

    expect(peak_element(foo2)).toBe(5)
})
