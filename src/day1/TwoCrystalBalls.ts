export default function two_crystal_balls(breaks: boolean[]): number {
    let jump = Math.floor(Math.sqrt(breaks.length))
    let i = jump

    // jump every sqrt(arr.length)
    for (; i < breaks.length; i += jump) {
        if (breaks[i]) break        
    }

    // Find last jump position
    i -= jump

    // Loop from last jump position to jump position
    for(let j = 0; j < jump && i < breaks.length; ++j, ++i) {
        if (breaks[i]) return i
    }

    return -1
}
