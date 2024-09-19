export default function first_and_last_position(nums: number[], target: number): number[] {
    let solution = [-1, -1]
    let i = 0

    for (; i < nums.length; i++) {
        if (nums[i] === target) {
            solution[0] = i
            i++
            break
        }
    }

    for (let j = i; j < nums.length; j++) {
        if (nums[j] === target) {
            solution[1] = j 
            break
        } 
    }

    if (solution[1] === -1 && solution[0] !== -1) return [solution[0], solution[0]]

    return solution
}