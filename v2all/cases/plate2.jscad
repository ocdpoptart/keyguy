function xlboard_cutout2_extrude_1_5_outline_fn(){
    return new CSG.Path2D([[451,-108.9283199],[451,-40.5]]).appendArc([449,-38.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([319,-38.5]).appendArc([317,-40.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([317,-92.9839512]).appendArc([316.7503167,-93.9516244],{"radius":2,"clockwise":true,"large":false}).appendPoint([310.6961852,-104.9022716]).appendArc([310.5337619,-106.4542614],{"radius":2,"clockwise":false,"large":false}).appendPoint([320.8520812,-140.230923]).appendArc([323.2377049,-141.5898977],{"radius":2,"clockwise":false,"large":false}).appendPoint([449.4728838,-110.8716111]).appendArc([451,-108.9283199],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
.subtract(
    new CSG.Path2D([[341.25,-57.25],[358.75,-57.25]]).appendPoint([358.75,-40.75]).appendPoint([341.25,-40.75]).appendPoint([341.25,-57.25]).close().innerToCAG()
.union(
    new CSG.Path2D([[341.25,-74.25],[358.75,-74.25]]).appendPoint([358.75,-57.75]).appendPoint([341.25,-57.75]).appendPoint([341.25,-74.25]).close().innerToCAG()
).union(
    new CSG.Path2D([[341.25,-91.25],[358.75,-91.25]]).appendPoint([358.75,-74.75]).appendPoint([341.25,-74.75]).appendPoint([341.25,-91.25]).close().innerToCAG()
).union(
    new CSG.Path2D([[359.25,-57.25],[376.75,-57.25]]).appendPoint([376.75,-40.75]).appendPoint([359.25,-40.75]).appendPoint([359.25,-57.25]).close().innerToCAG()
).union(
    new CSG.Path2D([[359.25,-74.25],[376.75,-74.25]]).appendPoint([376.75,-57.75]).appendPoint([359.25,-57.75]).appendPoint([359.25,-74.25]).close().innerToCAG()
).union(
    new CSG.Path2D([[359.25,-91.25],[376.75,-91.25]]).appendPoint([376.75,-74.75]).appendPoint([359.25,-74.75]).appendPoint([359.25,-91.25]).close().innerToCAG()
).union(
    new CSG.Path2D([[377.25,-57.25],[394.75,-57.25]]).appendPoint([394.75,-40.75]).appendPoint([377.25,-40.75]).appendPoint([377.25,-57.25]).close().innerToCAG()
).union(
    new CSG.Path2D([[377.25,-74.25],[394.75,-74.25]]).appendPoint([394.75,-57.75]).appendPoint([377.25,-57.75]).appendPoint([377.25,-74.25]).close().innerToCAG()
).union(
    new CSG.Path2D([[377.25,-91.25],[394.75,-91.25]]).appendPoint([394.75,-74.75]).appendPoint([377.25,-74.75]).appendPoint([377.25,-91.25]).close().innerToCAG()
).union(
    new CSG.Path2D([[395.25,-57.25],[412.75,-57.25]]).appendPoint([412.75,-40.75]).appendPoint([395.25,-40.75]).appendPoint([395.25,-57.25]).close().innerToCAG()
).union(
    new CSG.Path2D([[395.25,-74.25],[412.75,-74.25]]).appendPoint([412.75,-57.75]).appendPoint([395.25,-57.75]).appendPoint([395.25,-74.25]).close().innerToCAG()
).union(
    new CSG.Path2D([[395.25,-91.25],[412.75,-91.25]]).appendPoint([412.75,-74.75]).appendPoint([395.25,-74.75]).appendPoint([395.25,-91.25]).close().innerToCAG()
).union(
    new CSG.Path2D([[413.25,-57.25],[430.75,-57.25]]).appendPoint([430.75,-40.75]).appendPoint([413.25,-40.75]).appendPoint([413.25,-57.25]).close().innerToCAG()
).union(
    new CSG.Path2D([[413.25,-74.25],[430.75,-74.25]]).appendPoint([430.75,-57.75]).appendPoint([413.25,-57.75]).appendPoint([413.25,-74.25]).close().innerToCAG()
).union(
    new CSG.Path2D([[413.25,-91.25],[430.75,-91.25]]).appendPoint([430.75,-74.75]).appendPoint([413.25,-74.75]).appendPoint([413.25,-91.25]).close().innerToCAG()
).union(
    new CSG.Path2D([[431.25,-57.25],[448.75,-57.25]]).appendPoint([448.75,-40.75]).appendPoint([431.25,-40.75]).appendPoint([431.25,-57.25]).close().innerToCAG()
).union(
    new CSG.Path2D([[431.25,-74.25],[448.75,-74.25]]).appendPoint([448.75,-57.75]).appendPoint([431.25,-57.75]).appendPoint([431.25,-74.25]).close().innerToCAG()
).union(
    new CSG.Path2D([[431.25,-91.25],[448.75,-91.25]]).appendPoint([448.75,-74.75]).appendPoint([431.25,-74.75]).appendPoint([431.25,-91.25]).close().innerToCAG()
).union(
    new CSG.Path2D([[431.25,-108.25],[448.75,-108.25]]).appendPoint([448.75,-91.75]).appendPoint([431.25,-91.75]).appendPoint([431.25,-108.25]).close().innerToCAG()
).union(
    new CSG.Path2D([[333.0849567,-135.3901427],[349.5295775,-129.4047902]]).appendPoint([343.8862451,-113.8998619]).appendPoint([327.4416243,-119.8852144]).appendPoint([333.0849567,-135.3901427]).close().innerToCAG()
).union(
    new CSG.Path2D([[318.8133807,-122.4935495],[335.2580015,-116.508197]]).appendPoint([329.6146691,-101.0032687]).appendPoint([313.1700483,-106.9886212]).appendPoint([318.8133807,-122.4935495]).close().innerToCAG()
).union(
    new CSG.Path2D([[335.7278479,-116.3371869],[352.1724687,-110.3518344]]).appendPoint([346.5291363,-94.8469061]).appendPoint([330.0845155,-100.8322586]).appendPoint([335.7278479,-116.3371869]).close().innerToCAG()
)).extrude({ offset: [0, 0, 1.5] });
}




                function plate2_case_fn() {
                    

                // creating part 0 of case plate2
                let plate2__part_0 = xlboard_cutout2_extrude_1_5_outline_fn();

                // make sure that rotations are relative
                let plate2__part_0_bounds = plate2__part_0.getBounds();
                let plate2__part_0_x = plate2__part_0_bounds[0].x + (plate2__part_0_bounds[1].x - plate2__part_0_bounds[0].x) / 2
                let plate2__part_0_y = plate2__part_0_bounds[0].y + (plate2__part_0_bounds[1].y - plate2__part_0_bounds[0].y) / 2
                plate2__part_0 = translate([-plate2__part_0_x, -plate2__part_0_y, 0], plate2__part_0);
                plate2__part_0 = rotate([0,0,0], plate2__part_0);
                plate2__part_0 = translate([plate2__part_0_x, plate2__part_0_y, 0], plate2__part_0);

                plate2__part_0 = translate([0,0,0], plate2__part_0);
                let result = plate2__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return plate2_case_fn();
            }

        