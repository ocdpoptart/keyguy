function xlboard2_extrude_5_outline_fn(){
    return new CSG.Path2D([[421,-108.9283199],[421,-40.5]]).appendArc([419,-38.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([289,-38.5]).appendArc([287,-40.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([287,-92.9839512]).appendArc([286.7503167,-93.9516244],{"radius":2,"clockwise":true,"large":false}).appendPoint([280.6961852,-104.9022716]).appendArc([280.5337619,-106.4542614],{"radius":2,"clockwise":false,"large":false}).appendPoint([290.8520812,-140.230923]).appendArc([293.2377049,-141.5898977],{"radius":2,"clockwise":false,"large":false}).appendPoint([419.4728838,-110.8716111]).appendArc([421,-108.9283199],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 5] });
}




                function xlBottom2_case_fn() {
                    

                // creating part 0 of case xlBottom2
                let xlBottom2__part_0 = xlboard2_extrude_5_outline_fn();

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

        