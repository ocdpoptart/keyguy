function standoff_extrude_4_outline_fn(){
    return CAG.circle({"center":[145,-74.55],"radius":2.5})
.union(
    CAG.circle({"center":[208,-91],"radius":2.5})
).union(
    CAG.circle({"center":[210,-44.5],"radius":2.5})
).union(
    CAG.circle({"center":[110,-57.55],"radius":2.5})
).union(
    CAG.circle({"center":[145,-116.25],"radius":2.5})
).union(
    CAG.circle({"center":[93,-105],"radius":2.5})
).union(
    CAG.circle({"center":[213.5576676,-135.4134602],"radius":2.5})
).extrude({ offset: [0, 0, 4] });
}


function mounting_extrude_4_outline_fn(){
    return CAG.circle({"center":[145,-74.55],"radius":1.5})
.union(
    CAG.circle({"center":[208,-91],"radius":1.5})
).union(
    CAG.circle({"center":[210,-44.5],"radius":1.5})
).union(
    CAG.circle({"center":[110,-57.55],"radius":1.5})
).union(
    CAG.circle({"center":[145,-116.25],"radius":1.5})
).union(
    CAG.circle({"center":[93,-105],"radius":1.5})
).union(
    CAG.circle({"center":[213.5576676,-135.4134602],"radius":1.5})
).extrude({ offset: [0, 0, 4] });
}


function xlboard_extrude_1_outline_fn(){
    return new CSG.Path2D([[89,-108.9283199],[89,-40.5]]).appendArc([91,-38.5],{"radius":2,"clockwise":true,"large":false}).appendPoint([221,-38.5]).appendArc([223,-40.5],{"radius":2,"clockwise":true,"large":false}).appendPoint([223,-92.9839512]).appendArc([223.2496833,-93.9516244],{"radius":2,"clockwise":false,"large":false}).appendPoint([229.3038148,-104.9022716]).appendArc([229.4662381,-106.4542614],{"radius":2,"clockwise":true,"large":false}).appendPoint([219.1479188,-140.230923]).appendArc([216.7622951,-141.5898977],{"radius":2,"clockwise":true,"large":false}).appendPoint([90.5271162,-110.8716111]).appendArc([89,-108.9283199],{"radius":2,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1] });
}


function xlboard_extrude_4_outline_fn(){
    return new CSG.Path2D([[89,-108.9283199],[89,-40.5]]).appendArc([91,-38.5],{"radius":2,"clockwise":true,"large":false}).appendPoint([221,-38.5]).appendArc([223,-40.5],{"radius":2,"clockwise":true,"large":false}).appendPoint([223,-92.9839512]).appendArc([223.2496833,-93.9516244],{"radius":2,"clockwise":false,"large":false}).appendPoint([229.3038148,-104.9022716]).appendArc([229.4662381,-106.4542614],{"radius":2,"clockwise":true,"large":false}).appendPoint([219.1479188,-140.230923]).appendArc([216.7622951,-141.5898977],{"radius":2,"clockwise":true,"large":false}).appendPoint([90.5271162,-110.8716111]).appendArc([89,-108.9283199],{"radius":2,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 4] });
}


function board_extrude_4_outline_fn(){
    return new CSG.Path2D([[90,-107.9282443],[90,-41.5]]).appendArc([92,-39.5],{"radius":2,"clockwise":true,"large":false}).appendPoint([218,-39.5]).appendArc([220,-41.5],{"radius":2,"clockwise":true,"large":false}).appendPoint([220,-91.935298]).appendArc([220.2953429,-92.9813115],{"radius":2,"clockwise":false,"large":false}).appendPoint([227.9449617,-105.4476678]).appendArc([228.137959,-107.1252729],{"radius":2,"clockwise":true,"large":false}).appendPoint([217.6405009,-138.6655119]).appendArc([215.2700535,-139.9772337],{"radius":2,"clockwise":true,"large":false}).appendPoint([91.527207,-109.8715576]).appendArc([90,-107.9282443],{"radius":2,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 4] });
}




                function standoffs_case_fn() {
                    

                // creating part 0 of case standoffs
                let standoffs__part_0 = standoff_extrude_4_outline_fn();

                // make sure that rotations are relative
                let standoffs__part_0_bounds = standoffs__part_0.getBounds();
                let standoffs__part_0_x = standoffs__part_0_bounds[0].x + (standoffs__part_0_bounds[1].x - standoffs__part_0_bounds[0].x) / 2
                let standoffs__part_0_y = standoffs__part_0_bounds[0].y + (standoffs__part_0_bounds[1].y - standoffs__part_0_bounds[0].y) / 2
                standoffs__part_0 = translate([-standoffs__part_0_x, -standoffs__part_0_y, 0], standoffs__part_0);
                standoffs__part_0 = rotate([0,0,0], standoffs__part_0);
                standoffs__part_0 = translate([standoffs__part_0_x, standoffs__part_0_y, 0], standoffs__part_0);

                standoffs__part_0 = translate([0,0,0], standoffs__part_0);
                let result = standoffs__part_0;
                
            
                    return result;
                }
            
            

                function holes_case_fn() {
                    

                // creating part 0 of case holes
                let holes__part_0 = mounting_extrude_4_outline_fn();

                // make sure that rotations are relative
                let holes__part_0_bounds = holes__part_0.getBounds();
                let holes__part_0_x = holes__part_0_bounds[0].x + (holes__part_0_bounds[1].x - holes__part_0_bounds[0].x) / 2
                let holes__part_0_y = holes__part_0_bounds[0].y + (holes__part_0_bounds[1].y - holes__part_0_bounds[0].y) / 2
                holes__part_0 = translate([-holes__part_0_x, -holes__part_0_y, 0], holes__part_0);
                holes__part_0 = rotate([0,0,0], holes__part_0);
                holes__part_0 = translate([holes__part_0_x, holes__part_0_y, 0], holes__part_0);

                holes__part_0 = translate([0,0,0], holes__part_0);
                let result = holes__part_0;
                
            
                    return result;
                }
            
            

                function xlBottom_case_fn() {
                    

                // creating part 0 of case xlBottom
                let xlBottom__part_0 = xlboard_extrude_1_outline_fn();

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
            
            

                function outerWall_case_fn() {
                    

                // creating part 0 of case outerWall
                let outerWall__part_0 = xlboard_extrude_4_outline_fn();

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
                let innerWall__part_0 = board_extrude_4_outline_fn();

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
            
            

                function case_case_fn() {
                    

                // creating part 0 of case case
                let case__part_0 = standoffs_case_fn();

                // make sure that rotations are relative
                let case__part_0_bounds = case__part_0.getBounds();
                let case__part_0_x = case__part_0_bounds[0].x + (case__part_0_bounds[1].x - case__part_0_bounds[0].x) / 2
                let case__part_0_y = case__part_0_bounds[0].y + (case__part_0_bounds[1].y - case__part_0_bounds[0].y) / 2
                case__part_0 = translate([-case__part_0_x, -case__part_0_y, 0], case__part_0);
                case__part_0 = rotate([0,0,0], case__part_0);
                case__part_0 = translate([case__part_0_x, case__part_0_y, 0], case__part_0);

                case__part_0 = translate([0,0,0], case__part_0);
                let result = case__part_0;
                
            

                // creating part 1 of case case
                let case__part_1 = holes_case_fn();

                // make sure that rotations are relative
                let case__part_1_bounds = case__part_1.getBounds();
                let case__part_1_x = case__part_1_bounds[0].x + (case__part_1_bounds[1].x - case__part_1_bounds[0].x) / 2
                let case__part_1_y = case__part_1_bounds[0].y + (case__part_1_bounds[1].y - case__part_1_bounds[0].y) / 2
                case__part_1 = translate([-case__part_1_x, -case__part_1_y, 0], case__part_1);
                case__part_1 = rotate([0,0,0], case__part_1);
                case__part_1 = translate([case__part_1_x, case__part_1_y, 0], case__part_1);

                case__part_1 = translate([0,0,0], case__part_1);
                result = result.subtract(case__part_1);
                
            

                // creating part 2 of case case
                let case__part_2 = xlBottom_case_fn();

                // make sure that rotations are relative
                let case__part_2_bounds = case__part_2.getBounds();
                let case__part_2_x = case__part_2_bounds[0].x + (case__part_2_bounds[1].x - case__part_2_bounds[0].x) / 2
                let case__part_2_y = case__part_2_bounds[0].y + (case__part_2_bounds[1].y - case__part_2_bounds[0].y) / 2
                case__part_2 = translate([-case__part_2_x, -case__part_2_y, 0], case__part_2);
                case__part_2 = rotate([0,0,0], case__part_2);
                case__part_2 = translate([case__part_2_x, case__part_2_y, 0], case__part_2);

                case__part_2 = translate([0,0,0], case__part_2);
                result = result.union(case__part_2);
                
            

                // creating part 3 of case case
                let case__part_3 = wall_case_fn();

                // make sure that rotations are relative
                let case__part_3_bounds = case__part_3.getBounds();
                let case__part_3_x = case__part_3_bounds[0].x + (case__part_3_bounds[1].x - case__part_3_bounds[0].x) / 2
                let case__part_3_y = case__part_3_bounds[0].y + (case__part_3_bounds[1].y - case__part_3_bounds[0].y) / 2
                case__part_3 = translate([-case__part_3_x, -case__part_3_y, 0], case__part_3);
                case__part_3 = rotate([0,0,0], case__part_3);
                case__part_3 = translate([case__part_3_x, case__part_3_y, 0], case__part_3);

                case__part_3 = translate([0,0,0], case__part_3);
                result = result.union(case__part_3);
                
            
                    return result;
                }
            
            
        
            function main() {
                return case_case_fn();
            }

        