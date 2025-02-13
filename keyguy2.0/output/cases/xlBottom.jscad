function xlboard_extrude_5_outline_fn(){
    return new CSG.Path2D([[59,-108.9283199],[59,-40.5]]).appendArc([61,-38.5],{"radius":2,"clockwise":true,"large":false}).appendPoint([191,-38.5]).appendArc([193,-40.5],{"radius":2,"clockwise":true,"large":false}).appendPoint([193,-92.9839512]).appendArc([193.2496833,-93.9516244],{"radius":2,"clockwise":false,"large":false}).appendPoint([199.3038148,-104.9022716]).appendArc([199.4662381,-106.4542614],{"radius":2,"clockwise":true,"large":false}).appendPoint([189.1479188,-140.230923]).appendArc([186.7622951,-141.5898977],{"radius":2,"clockwise":true,"large":false}).appendPoint([60.5271162,-110.8716111]).appendArc([59,-108.9283199],{"radius":2,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 5] });
}




                function xlBottom_case_fn() {
                    

                // creating part 0 of case xlBottom
                let xlBottom__part_0 = xlboard_extrude_5_outline_fn();

                // make sure that rotations are relative
                let xlBottom__part_0_bounds = xlBottom__part_0.getBounds();
                let xlBottom__part_0_x = xlBottom__part_0_bounds[0].x + (xlBottom__part_0_bounds[1].x - xlBottom__part_0_bounds[0].x) / 2
                let xlBottom__part_0_y = xlBottom__part_0_bounds[0].y + (xlBottom__part_0_bounds[1].y - xlBottom__part_0_bounds[0].y) / 2
                xlBottom__part_0 = translate([-xlBottom__part_0_x, -xlBottom__part_0_y, 0], xlBottom__part_0);
                xlBottom__part_0 = rotate([0,0,0], xlBottom__part_0);
                xlBottom__part_0 = translate([xlBottom__part_0_x, xlBottom__part_0_y, 0], xlBottom__part_0);

                xlBottom__part_0 = translate([0,0,0], xlBottom__part_0);
                let result = xlBottom__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return xlBottom_case_fn();
            }

        