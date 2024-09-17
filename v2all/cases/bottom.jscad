function board_extrude_1_outline_fn(){
    return new CSG.Path2D([[90,-107.9282443],[90,-41.5]]).appendArc([92,-39.5],{"radius":2,"clockwise":true,"large":false}).appendPoint([218,-39.5]).appendArc([220,-41.5],{"radius":2,"clockwise":true,"large":false}).appendPoint([220,-91.935298]).appendArc([220.2953429,-92.9813115],{"radius":2,"clockwise":false,"large":false}).appendPoint([227.9449617,-105.4476678]).appendArc([228.137959,-107.1252729],{"radius":2,"clockwise":true,"large":false}).appendPoint([217.6405009,-138.6655119]).appendArc([215.2700535,-139.9772337],{"radius":2,"clockwise":true,"large":false}).appendPoint([91.527207,-109.8715576]).appendArc([90,-107.9282443],{"radius":2,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1] });
}




                function bottom_case_fn() {
                    

                // creating part 0 of case bottom
                let bottom__part_0 = board_extrude_1_outline_fn();

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

        