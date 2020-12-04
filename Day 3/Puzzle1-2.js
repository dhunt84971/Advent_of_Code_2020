var data = [
".......#................#......",
"...#.#.....#.##.....#..#.......",
"..#..#.#......#.#.#............",
"....#...#...##.....#..#.....#..",
"....#.......#.##......#...#..#.",
"...............#.#.#.....#..#..",
"...##...#...#..##.###...##.....",
"##..#.#...##.....#.#..........#",
".#....#..#..#......#....#....#.",
"...........................#...",
"..........#.......#..#.....#.#.",
"..#.......###..#.#.......#.#...",
"....#..#....#....#..........#..",
"..##..#.......#.#...#..........",
".....#.......#.....#....#......",
"..........##..#................",
"....##.#..###...#..##.....#.#..",
"..#..#.#.#...#......#...#.....#",
"....#.#....#...####.##.........",
"..#.........##...##.#..#..#....",
".#......#...#..#..##.#.........",
".#....#.......#..##..##..#.#.#.",
"...........#....#......#.......",
"..#....#....#...............#..",
"..#.....#....###.##.....#.#..#.",
"#..........#.#......#.#....#...",
"....###...#.#.....#....#.####.#",
"........#......#...#...#..##..#",
"...##..............##.#.......#",
"#..........#...........#.#....#",
"#...#....#..####..#............",
"###....#........#..............",
"...#.##....................#.##",
"...#..#.....#.....##...#....#..",
".......###.#...#.........#.....",
".#..#.....#.#..#.....#.........",
"#................#.............",
"...#......#.#.....##.#.#....#..",
"...#..#.#..#.....#...#....#....",
".......#......#........#.....#.",
".#.##..##.....#.#......#.#.#...",
"#...............#.....#....#...",
".....#...........#..##.........",
".....#..#........##..#..#.....#",
"..###.#.#.......#.#...........#",
"##....##....#.#....##...#.##.##",
"..................##.#.#.....#.",
".#...........###...#...........",
".#.#....#......#....###.#......",
".......#.##...#...#..#.#.......",
"..#.....#.#....#..#............",
".....#..#..#....#..#.........#.",
"..##.#......#.....#...#.#..#.#.",
".........#......#....##.......#",
"#........#..#.#......#...#.#..#",
"...#....#.#..#....##.......###.",
"..#...#......#.##..........#...",
"........#..#..#...#.......#....",
".##.#..#...#..#........#.#.####",
"#..#..#..........#....##...#...",
"....#...#........##........#...",
".#......#.......#..#..#........",
"#...#.#......#....#............",
"#........#..##.#...##..........",
"...#..##.....#......##.#..#.#..",
".#.#.....#.....#.####.#..##....",
"..........###....#.##...#......",
".......#.......#..#.#.#.##.#..#",
"..#.#....#......#.#...#.......#",
".#...#....#......#...#.........",
".#....#..#....#.##.#....#..##..",
"...#..#.#..................#...",
".##..#.............##.........#",
"...#.#.#................#.....#",
"...###..###..................#.",
"........##.##..#.#...#.....#...",
".##...##...#...#....#...#......",
"#..#....#..#..#.#....#..####...",
".#...............##....##.#....",
"#..#................#...#..#...",
".#....#.....#..#.#........#....",
"...............##.#..##..##....",
".#......#........#....#.#...#.#",
".#.....#...##.#........#.##.#.#",
"..###............#..#.#....#...",
"..#.....#.........#....#..#.#..",
".##.....#.#..........#.#....##.",
"...#...#....#..#......#.#.#..#.",
"#.....#...#....##...#.......##.",
".......#.#.........##..........",
"............##.#.##...#.......#",
".....#........##...#........#..",
".#........#.#.#.#....#.........",
"#....#..#....#.#..#...#.#......",
"....##...........#...#...##.#.#",
"......#...##.###.....#.........",
"............#..##....##......#.",
"......##....#...#.#....#......#",
"#..#..#..#.#.#.........#...##.#",
"...#.........#...#.........##.#",
"#.#.....#.......#.##..#..#.....",
"##................#......#....#",
"....#..#.......#....##.....#...",
".....#..#...#...#......#.#....#",
"..#....#.....#.........#.....#.",
"..#..#..........#.....#........",
".......#..##.#......#.#........",
".............##.....#....#.....",
"...#....#..#.#.#...............",
"........#....##..#...#........#",
"..##...............#.....#....#",
"........##.#.##.#......#..#....",
"..#.##.......#..........##..#..",
".#..............#.#.##.........",
".#.......#....#....#.#.#.......",
".#.##.......#....#......###.#..",
".......#...#............##.....",
"........#.#..........##..#.....",
"...###..#......#.....##..#..#..",
"...........##......#....#......",
"..............#....#..#..#.#..#",
"....#...#......#.##...#........",
".#.............#..#......###.#.",
"#...#..#.#..............##..#.#",
"....................#.........#",
"..##..#......#.###.....#...#.#.",
".#....#.#........#...#........#",
"..#....#.....#..............#..",
"##..........#..#..#...#........",
"...........#..##...#.......#...",
"........##.............#.......",
"#....#........#..#.#.###..#....",
"...........##..........##......",
"#......#.....##.#.##......##...",
"..#......#.........#.......#..#",
"......#.#....##..##.#...#.#...#",
"......#..................##....",
"...#....#.#...#.#.......##.....",
"#.#...##...##........#...##....",
"..#.......#.#.#...#............",
".......#......#..#...#.........",
"#...#..#...........##..........",
"......#....#.........#.#....#..",
"#......#........#...#..##....#.",
".....#.......##..#.#......#..#.",
"...........#......#...#......#.",
"#.#.##.....#....#.....##......#",
".....##..#.#.#.###........#.#..",
"...#...#.#......#......#.......",
"......###....#..##...#.#.##....",
"#.....#.....#..................",
"...#...#......#...............#",
"..#............##..#.....#.....",
".#....#...#...#...#...#..#.....",
".##......#.........#.###.#.....",
"#.#.##.......##...#........##.#",
".##.#.#......#.....#...#.....#.",
"....####.##.......#..##..##.#..",
"#.#.......#..##....###..#...#..",
"..#..#....#...#.#.#.#...#......",
"##.........#.##................",
"........#.....................#",
"..#...........#..#..##.#..#.#..",
"#...#...................#.###..",
"##..#............#.........#..#",
"...............##...#...##....#",
"#.#.....#..#.......#......#....",
".#...#......#............#.....",
"#.......#...#..#....#.......#..",
"...#....#.##.#....#....#.#.....",
"...#..#..............#..#.#..#.",
".........#.....#.#...#..#....#.",
"..#..#..#...##.....##.#.....#..",
".#.#..........#........#.......",
"...............#........#.#.#..",
".#......#.....#..............#.",
"........#.#..............#.#...",
".......#.#....#..#.#.#..#.#.##.",
"...##..#...#.#..#...........#..",
"#...###.#.....#..#........#....",
".#...##...##...##.#.....###....",
".........#......#.#..##.#.#....",
"#....#.#..#...#.#.#....#..#..#.",
".#.#...#......###.....#........",
"#.....#.#.......#..#.#...#.....",
".................#.#....#..##..",
"#...........#....###..#......#.",
"##.#..#....#.#.#.#.............",
"#.....#..#...#........#........",
"..#..#......#..#.##.#..........",
"...#....#..#..........#.#.##.##",
"#........#...#.......#..##.#...",
".#.#..#....#.#....#......#.....",
"##.......##.#........#...#..##.",
"##.##.....#.......#####.#....#.",
"..#..###.#.#..#....###..#.##..#",
"#.........#.............#.#...#",
"..#...##.#..................#..",
".....#.#....#.#..#.#........#.#",
"......#.......#.#..##.#.#..#...",
"..#......#.#..##......#..#....#",
"..##..#..#.##.#..#....#...##...",
"###....#...##....##.........#..",
"#........##.........#......#..#",
"...#.........#......#.##.......",
".....#.#.#....#......#.........",
"..#...........#....#......#.#..",
"##........#...##.....######....",
"....#..#..##.......#..#..#.....",
"..#....#..##....#......##....#.",
"...##....#........##......#....",
".#.#...###...#......#..........",
"#....#..#.##.........#...#.....",
"......#..#.........#.##.....#..",
"...#............##....#......#.",
"...#.....##.....#........#.#..#",
"......#.#..#......#.....#..##..",
"#.#.........##..........#......",
"..###.....#..#....##..........#",
".............##..#....#..##....",
"....#.#....##..#......#...#....",
"....###.....#..#.......#.......",
"............#..#...............",
"......#........#..#......#.....",
".#........#.......#.##.......#.",
"..#.........#..#.#.....##....#.",
"...#.......#.......#.......##.#",
"#......##.#.....#......##.#..#.",
"#..........#.................#.",
"....#..##...........#.....#.#..",
"#.###...#............#.#....#.#",
"....#......#.#..###....##..#...",
"....#...#..........##..........",
"..#.#............#...#...###...",
"......#...#......#..#.#........",
".#.......#..#...........##...#.",
"##...#...##....##.#..#..#.#....",
".......#........#............##",
".#......#...#.#................",
"#.#........#.#....#..#.##......",
".......#.#...#....##.......##..",
"........#.#.#.........##..##...",
"..##...............#.#.###.#...",
"......#.#....#..#......##.....#",
"###.........#.....#.#.....##...",
".#.#....#.....#.#.##..#.......#",
"..#..#.#......#...##..##.#..#..",
"...#........#..#....#..........",
"#...#.#...#..##....##..........",
".........#........#.##....#..#.",
"..#...#.#.......##..........##.",
"###...........##.#......#.#..#.",
"...#....#...#..#..#......#.....",
".....##.......###.#....###..##.",
"...#...#..........#.#......#...",
"....#.....##...##..#.#........#",
".....#...#..#.....##...##....#.",
"................##.#.##....##.#",
".#..#..#....#.....#....#..#...#",
".....###.....#.................",
"#...#..##..#.........#.........",
".....#..#................#.....",
".#..#...#......#..#............",
"...#...#.#....#....##...#...##.",
"..........#....#.#..#.#.....#..",
"....#...###.##...#..#..#......#",
"#...#.......#..........#..#....",
".#............#..##.......#...#",
"....#..#...#............#..#.#.",
".#....#.......#..#.#......#....",
"...#...#............#...#.....#",
"....#.#.#..##.#.....#...#.#....",
"......#.#.#......#..#...#.....#",
"......##.....#.............#...",
"..#...#..#.#....#..............",
".#.#..#....#.#..##....###.##...",
"..#...........#....#.###.#....#",
".....#.........#.#.............",
"...#.#.....#......###......##..",
"...#...#.....#.................",
"...#..#...##.....##.........#..",
"..#...#..#..##..#...#........#.",
"##..#.#.##.#....#...........#..",
".......#....##....#...##..#..#.",
"#.......##.#...##...##..#.....#",
"....#.#...............#......#.",
"....#.#...#.....#....#......#..",
".#.........#.#....###........#.",
".#.#.....#.....#.#.#....#.#....",
"............#...........#.#..##",
"#...#......#..#......#.#.......",
"...#.#.#.....#..#...#..##......",
"...#.#..#...#....#.........#.#.",
"........#..#......##.....#...#.",
"...#..#..............#..#......",
".........#.......#...#......#..",
".#......#.....#.....#......#...",
"......#.......#....#...#.#.....",
".#.....#.##..#........#...#....",
"#.....##..##....#.#.......#..#.",
".#..#...#..#.......#...........",
"..#..#...#.....##....#.....#...",
"#.#..............#....#..#.....",
".........##...#......#.##...##.",
".###...#.#...#.....#.........#.",
".....#..........##...#..#....##",
".#..#......#....##.#...#.......",
".............###.#.#..#.#.#...#",
".......#...##..#..#.....###....",
"##.......#...........#....#.#..",
"##......#...#.#................",
".#.####..##.#...............#..",
"..#...#.#.#..#...#........#...#",
".##..##.##.....#.......#..#.#..",
"...................#......#.#..",
"#.##..#..........#.............",
"##..#......#....#.#............",
".#........#.....##...#.........",
".##....#..#..##..........#...#.",
"#..........##........#..#..#.#.",
"####.###.#.....#....#..#.#....#",
"..#...#...#.#.......#....#...#.",
"......##.###..##.#.###......#.#"];



function replaceAt(text, index, replacement) {
    return text.substr(0, index) + replacement + text.substr(index + 1);
}

function slopeTrees (data, xStep, yStep){
    var treesHit = 0;
    var xCount = 0;
    var yCount = 0;
    var dataHitTrees = [];
    var x = 0;
    var y = 0;
    var done = false;

    dataHitTrees.push(data[0]);
    while (!done){
        while (x < data[0].length && !done){
            if (xCount % xStep == 0 && xCount != 0)
            {
                y += 1;
                yCount += 1;
                while(yCount % yStep != 0 && yCount != 0 && y < data.length){
                    dataHitTrees.push(data[y]);
                    y += 1;
                    yCount += 1;   
                }
                if (y < data.length){
                    if (yCount != 0)
                    {
                        if (data[y].charAt(x) == "#")
                        {
                            dataHitTrees.push(replaceAt(data[y], x, "O"));
                            treesHit ++;
                        }
                        else{
                            dataHitTrees.push(replaceAt(data[y], x, "X"));
                        }
                    }
                }
                else{
                    done = true;
                }
            }
            x++;
            xCount++;
        }
        x = 0;
    }
    console.log(dataHitTrees);
    return treesHit;
}

let slope1 = slopeTrees(data, 1,1);
let slope2 = slopeTrees(data, 3,1);
let slope3 = slopeTrees(data, 5,1);
let slope4 = slopeTrees(data, 7,1);
let slope5 = slopeTrees(data, 1,2);

console.log(slope1, slope2, slope3, slope4, slope5);
console.log("Answer = " + (slope1 * slope2 * slope3 * slope4 * slope5));

