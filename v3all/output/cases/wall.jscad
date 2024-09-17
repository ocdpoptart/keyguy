function xlboard_extrude_8_outline_fn(){
    return new CSG.Path2D([[59,-108.9283199],[59,-40.5]]).appendArc([61,-38.5],{"radius":2,"clockwise":true,"large":false}).appendPoint([191,-38.5]).appendArc([193,-40.5],{"radius":2,"clockwise":true,"large":false}).appendPoint([193,-92.9839512]).appendArc([193.2496833,-93.9516244],{"radius":2,"clockwise":false,"large":false}).appendPoint([199.3038148,-104.9022716]).appendArc([199.4662381,-106.4542614],{"radius":2,"clockwise":true,"large":false}).appendPoint([189.1479188,-140.230923]).appendArc([186.7622951,-141.5898977],{"radius":2,"clockwise":true,"large":false}).appendPoint([60.5271162,-110.8716111]).appendArc([59,-108.9283199],{"radius":2,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 8] });
}


function board_extrude_8_outline_fn(){
    return new CSG.Path2D([[60,-107.9282443],[60,-41.5]]).appendArc([62,-39.5],{"radius":2,"clockwise":true,"large":false}).appendPoint([188,-39.5]).appendArc([190,-41.5],{"radius":2,"clockwise":true,"large":false}).appendPoint([190,-91.935298]).appendArc([190.2953429,-92.9813115],{"radius":2,"clockwise":false,"large":false}).appendPoint([197.9449617,-105.4476678]).appendArc([198.137959,-107.1252729],{"radius":2,"clockwise":true,"large":false}).appendPoint([187.6405009,-138.6655119]).appendArc([185.2700535,-139.9772337],{"radius":2,"clockwise":true,"large":false}).appendPoint([61.527207,-109.8715576]).appendArc([60,-107.9282443],{"radius":2,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 8] });
}




                function outerWall_case_fn() {
                    

                // creating part 0 of case outerWall
                let outerWall__part_0 = xlboard_extrude_8_outline_fn();

                // make sure that rotations are relative
                let outerWall__part_0_bounds = outerWall__part_0.getBounds();
                let outerWall__part_0_x = outerWall__part_0_bounds[0].x + (outerWall__part_0_bounds[1].x - outerWall__part_0_bounds[0].x) / 2
                let outerWall__part_0_y = outerWall__part_0_bounds[0].y + (outerWall__part_0_bounds[1].y - outerWall__part_0_bounds[0].y) / 2
                outerWall__part_0 = translate([-outerWall__part_0_x, -outerWall__part_0_y, 0], outerWall__part_0);
                outerWall__part_0 = rotate([0,0,0], outerWall__part_0);
                outerWall__part_0 = translate([outerWall__part_0_x, outerWall__part_0_y, 0], outerWall__part_0);

                outerWall__part_0 = translate([0,0,0], outerWall__part_0);
                let result = outerWall__part_0;
                
            
                    return result;
                }
            
            

                function innerWall_case_fn() {
                    

                // creating part 0 of case innerWall
                let innerWall__part_0 = board_extrude_8_outline_fn();

                // make sure that rotations are relative
                let innerWall__part_0_bounds = innerWall__part_0.getBounds();
                let innerWall__part_0_x = innerWall__part_0_bounds[0].x + (innerWall__part_0_bounds[1].x - innerWall__part_0_bounds[0].x) / 2
                let innerWall__part_0_y = innerWall__part_0_bounds[0].y + (innerWall__part_0_bounds[1].y - innerWall__part_0_bounds[0].y) / 2
                innerWall__part_0 = translate([-innerWall__part_0_x, -innerWall__part_0_y, 0], innerWall__part_0);
                innerWall__part_0 = rotate([0,0,0], innerWall__part_0);
                innerWall__part_0 = translate([innerWall__part_0_x, innerWall__part_0_y, 0], innerWall__part_0);

                innerWall__part_0 = translate([0,0,0], innerWall__part_0);
                let result = innerWall__part_0;
                
            
                    return result;
                }
            
            

                function wall_case_fn() {
                    

                // creating part 0 of case wall
                let wall__part_0 = outerWall_case_fn();

                // make sure that rotations are relative
                let wall__part_0_bounds = wall__part_0.getBounds();
                let wall__part_0_x = wall__part_0_bounds[0].x + (wall__part_0_bounds[1].x - wall__part_0_bounds[0].x) / 2
                let wall__part_0_y = wall__part_0_bounds[0].y + (wall__part_0_bounds[1].y - wall__part_0_bounds[0].y) / 2
                wall__part_0 = translate([-wall__part_0_x, -wall__part_0_y, 0], wall__part_0);
                wall__part_0 = rotate([0,0,0], wall__part_0);
                wall__part_0 = translate([wall__part_0_x, wall__part_0_y, 0], wall__part_0);

                wall__part_0 = translate([0,0,0], wall__part_0);
                let result = wall__part_0;
                
            

                // creating part 1 of case wall
                let wall__part_1 = innerWall_case_fn();

                // make sure that rotations are relative
                let wall__part_1_bounds = wall__part_1.getBounds();
                let wall__part_1_x = wall__part_1_bounds[0].x + (wall__part_1_bounds[1].x - wall__part_1_bounds[0].x) / 2
                let wall__part_1_y = wall__part_1_bounds[0].y + (wall__part_1_bounds[1].y - wall__part_1_bounds[0].y) / 2
                wall__part_1 = translate([-wall__part_1_x, -wall__part_1_y, 0], wall__part_1);
                wall__part_1 = rotate([0,0,0], wall__part_1);
                wall__part_1 = translate([wall__part_1_x, wall__part_1_y, 0], wall__part_1);

                wall__part_1 = translate([0,0,0], wall__part_1);
                result = result.subtract(wall__part_1);
                
            
                    return result;
                }
            
            
        
            function main() {
                return wall_case_fn();
            }

        