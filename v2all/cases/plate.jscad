function xlboard_cutout_extrude_1_5_outline_fn(){
    return new CSG.Path2D([[89,-108.9283199],[89,-40.5]]).appendArc([91,-38.5],{"radius":2,"clockwise":true,"large":false}).appendPoint([221,-38.5]).appendArc([223,-40.5],{"radius":2,"clockwise":true,"large":false}).appendPoint([223,-92.9839512]).appendArc([223.2496833,-93.9516244],{"radius":2,"clockwise":false,"large":false}).appendPoint([229.3038148,-104.9022716]).appendArc([229.4662381,-106.4542614],{"radius":2,"clockwise":true,"large":false}).appendPoint([219.1479188,-140.230923]).appendArc([216.7622951,-141.5898977],{"radius":2,"clockwise":true,"large":false}).appendPoint([90.5271162,-110.8716111]).appendArc([89,-108.9283199],{"radius":2,"clockwise":true,"large":false}).close().innerToCAG()
.subtract(
    new CSG.Path2D([[181.25,-57.25],[198.75,-57.25]]).appendPoint([198.75,-40.75]).appendPoint([181.25,-40.75]).appendPoint([181.25,-57.25]).close().innerToCAG()
.union(
    new CSG.Path2D([[181.25,-74.25],[198.75,-74.25]]).appendPoint([198.75,-57.75]).appendPoint([181.25,-57.75]).appendPoint([181.25,-74.25]).close().innerToCAG()
).union(
    new CSG.Path2D([[181.25,-91.25],[198.75,-91.25]]).appendPoint([198.75,-74.75]).appendPoint([181.25,-74.75]).appendPoint([181.25,-91.25]).close().innerToCAG()
).union(
    new CSG.Path2D([[163.25,-57.25],[180.75,-57.25]]).appendPoint([180.75,-40.75]).appendPoint([163.25,-40.75]).appendPoint([163.25,-57.25]).close().innerToCAG()
).union(
    new CSG.Path2D([[163.25,-74.25],[180.75,-74.25]]).appendPoint([180.75,-57.75]).appendPoint([163.25,-57.75]).appendPoint([163.25,-74.25]).close().innerToCAG()
).union(
    new CSG.Path2D([[163.25,-91.25],[180.75,-91.25]]).appendPoint([180.75,-74.75]).appendPoint([163.25,-74.75]).appendPoint([163.25,-91.25]).close().innerToCAG()
).union(
    new CSG.Path2D([[145.25,-57.25],[162.75,-57.25]]).appendPoint([162.75,-40.75]).appendPoint([145.25,-40.75]).appendPoint([145.25,-57.25]).close().innerToCAG()
).union(
    new CSG.Path2D([[145.25,-74.25],[162.75,-74.25]]).appendPoint([162.75,-57.75]).appendPoint([145.25,-57.75]).appendPoint([145.25,-74.25]).close().innerToCAG()
).union(
    new CSG.Path2D([[145.25,-91.25],[162.75,-91.25]]).appendPoint([162.75,-74.75]).appendPoint([145.25,-74.75]).appendPoint([145.25,-91.25]).close().innerToCAG()
).union(
    new CSG.Path2D([[127.25,-57.25],[144.75,-57.25]]).appendPoint([144.75,-40.75]).appendPoint([127.25,-40.75]).appendPoint([127.25,-57.25]).close().innerToCAG()
).union(
    new CSG.Path2D([[127.25,-74.25],[144.75,-74.25]]).appendPoint([144.75,-57.75]).appendPoint([127.25,-57.75]).appendPoint([127.25,-74.25]).close().innerToCAG()
).union(
    new CSG.Path2D([[127.25,-91.25],[144.75,-91.25]]).appendPoint([144.75,-74.75]).appendPoint([127.25,-74.75]).appendPoint([127.25,-91.25]).close().innerToCAG()
).union(
    new CSG.Path2D([[109.25,-57.25],[126.75,-57.25]]).appendPoint([126.75,-40.75]).appendPoint([109.25,-40.75]).appendPoint([109.25,-57.25]).close().innerToCAG()
).union(
    new CSG.Path2D([[109.25,-74.25],[126.75,-74.25]]).appendPoint([126.75,-57.75]).appendPoint([109.25,-57.75]).appendPoint([109.25,-74.25]).close().innerToCAG()
).union(
    new CSG.Path2D([[109.25,-91.25],[126.75,-91.25]]).appendPoint([126.75,-74.75]).appendPoint([109.25,-74.75]).appendPoint([109.25,-91.25]).close().innerToCAG()
).union(
    new CSG.Path2D([[91.25,-57.25],[108.75,-57.25]]).appendPoint([108.75,-40.75]).appendPoint([91.25,-40.75]).appendPoint([91.25,-57.25]).close().innerToCAG()
).union(
    new CSG.Path2D([[91.25,-74.25],[108.75,-74.25]]).appendPoint([108.75,-57.75]).appendPoint([91.25,-57.75]).appendPoint([91.25,-74.25]).close().innerToCAG()
).union(
    new CSG.Path2D([[91.25,-91.25],[108.75,-91.25]]).appendPoint([108.75,-74.75]).appendPoint([91.25,-74.75]).appendPoint([91.25,-91.25]).close().innerToCAG()
).union(
    new CSG.Path2D([[91.25,-108.25],[108.75,-108.25]]).appendPoint([108.75,-91.75]).appendPoint([91.25,-91.75]).appendPoint([91.25,-108.25]).close().innerToCAG()
).union(
    new CSG.Path2D([[190.4704225,-129.4047902],[206.9150433,-135.3901427]]).appendPoint([212.5583757,-119.8852144]).appendPoint([196.1137549,-113.8998619]).appendPoint([190.4704225,-129.4047902]).close().innerToCAG()
).union(
    new CSG.Path2D([[204.7419985,-116.508197],[221.1866193,-122.4935495]]).appendPoint([226.8299517,-106.9886212]).appendPoint([210.3853309,-101.0032687]).appendPoint([204.7419985,-116.508197]).close().innerToCAG()
).union(
    new CSG.Path2D([[187.8275313,-110.3518344],[204.2721521,-116.3371869]]).appendPoint([209.9154845,-100.8322586]).appendPoint([193.4708637,-94.8469061]).appendPoint([187.8275313,-110.3518344]).close().innerToCAG()
)).extrude({ offset: [0, 0, 1.5] });
}




                function plate_case_fn() {
                    

                // creating part 0 of case plate
                let plate__part_0 = xlboard_cutout_extrude_1_5_outline_fn();

                // make sure that rotations are relative
                let plate__part_0_bounds = plate__part_0.getBounds();
                let plate__part_0_x = plate__part_0_bounds[0].x + (plate__part_0_bounds[1].x - plate__part_0_bounds[0].x) / 2
                let plate__part_0_y = plate__part_0_bounds[0].y + (plate__part_0_bounds[1].y - plate__part_0_bounds[0].y) / 2
                plate__part_0 = translate([-plate__part_0_x, -plate__part_0_y, 0], plate__part_0);
                plate__part_0 = rotate([0,0,0], plate__part_0);
                plate__part_0 = translate([plate__part_0_x, plate__part_0_y, 0], plate__part_0);

                plate__part_0 = translate([0,0,0], plate__part_0);
                let result = plate__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return plate_case_fn();
            }

        