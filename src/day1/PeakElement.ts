export default function peak_element(nums: number[]): number {
    let lo = 0
    let hi = nums.length - 1

    do {
        let m = Math.floor(lo + (hi - lo) / 2)

        if (nums[m] > nums[m + 1] && nums[m] > nums[m + 1]) {
            return m
        } else if (nums[m] > nums[m + 1]) {
            hi = m
        } else {
            lo = m + 1
        }
    } while (hi > lo)

    return -1
}