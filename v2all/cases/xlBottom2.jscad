function xlboard2_extrude_1_outline_fn(){
    return new CSG.Path2D([[451,-108.9283199],[451,-40.5]]).appendArc([449,-38.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([319,-38.5]).appendArc([317,-40.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([317,-92.9839512]).appendArc([316.7503167,-93.9516244],{"radius":2,"clockwise":true,"large":false}).appendPoint([310.6961852,-104.9022716]).appendArc([310.5337619,-106.4542614],{"radius":2,"clockwise":false,"large":false}).appendPoint([320.8520812,-140.230923]).appendArc([323.2377049,-141.5898977],{"radius":2,"clockwise":false,"large":false}).appendPoint([449.4728838,-110.8716111]).appendArc([451,-108.9283199],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1] });
}




                function xlBottom2_case_fn() {
                    

                // creating part 0 of case xlBottom2
                let xlBottom2__part_0 = xlboard2_extrude_1_outline_fn();

                // make sure that rotations are relative
                let xlBottom2__part_0_bounds = xlBottom2__part_0.getBounds();
                let xlBottom2__part_0_x = xlBottom2__part_0_bounds[0].x + (xlBottom2__part_0_bounds[1].x - xlBottom2__part_0_bounds[0].x) / 2
                let xlBottom2__part_0_y = xlBottom2__part_0_bounds[0].y + (xlBottom2__part_0_bounds[1].y - xlBottom2__part_0_bounds[0].y) / 2
                xlBottom2__part_0 = translate([-xlBottom2__part_0_x, -xlBottom2__part_0_y, 0], xlBottom2__part_0);
                xlBottom2__part_0 = rotate([0,0,0], xlBottom2__part_0);
                xlBottom2__part_0 = translate([xlBottom2__part_0_x, xlBottom2__part_0_y, 0], xlBottom2__part_0);

                xlBottom2__part_0 = translate([0,0,0], xlBottom2__part_0);
                let result = xlBottom2__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return xlBottom2_case_fn();
            }

        