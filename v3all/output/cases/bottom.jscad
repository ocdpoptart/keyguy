function board_extrude_1_5_outline_fn(){
    return new CSG.Path2D([[60,-107.9282443],[60,-41.5]]).appendArc([62,-39.5],{"radius":2,"clockwise":true,"large":false}).appendPoint([188,-39.5]).appendArc([190,-41.5],{"radius":2,"clockwise":true,"large":false}).appendPoint([190,-91.935298]).appendArc([190.2953429,-92.9813115],{"radius":2,"clockwise":false,"large":false}).appendPoint([197.9449617,-105.4476678]).appendArc([198.137959,-107.1252729],{"radius":2,"clockwise":true,"large":false}).appendPoint([187.6405009,-138.6655119]).appendArc([185.2700535,-139.9772337],{"radius":2,"clockwise":true,"large":false}).appendPoint([61.527207,-109.8715576]).appendArc([60,-107.9282443],{"radius":2,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1.5] });
}




                function bottom_case_fn() {
                    

                // creating part 0 of case bottom
                let bottom__part_0 = board_extrude_1_5_outline_fn();

                // make sure that rotations are relative
                let bottom__part_0_bounds = bottom__part_0.getBounds();
                let bottom__part_0_x = bottom__part_0_bounds[0].x + (bottom__part_0_bounds[1].x - bottom__part_0_bounds[0].x) / 2
                let bottom__part_0_y = bottom__part_0_bounds[0].y + (bottom__part_0_bounds[1].y - bottom__part_0_bounds[0].y) / 2
                bottom__part_0 = translate([-bottom__part_0_x, -bottom__part_0_y, 0], bottom__part_0);
                bottom__part_0 = rotate([0,0,0], bottom__part_0);
                bottom__part_0 = translate([bottom__part_0_x, bottom__part_0_y, 0], bottom__part_0);

                bottom__part_0 = translate([0,0,0], bottom__part_0);
                let result = bottom__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return bottom_case_fn();
            }

        