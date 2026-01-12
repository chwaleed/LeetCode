// 1266. Mininum Time Visiting All Points

function minTimeToVisitAllPoints(points: number[][]): number {
    let time = 0;
    for(let i = 0; i < points.length - 1; i++){
        let value1 = Math.abs(points[i+1][0] - points[i][0]);
        let value2 = Math.abs(points[i+1][1] - points[i][1])
        time += value1 > value2 ? value1 : value2;
    }
    return time;
};
