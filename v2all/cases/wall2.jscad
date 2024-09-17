function xlboard2_extrude_4_outline_fn(){
    return new CSG.Path2D([[451,-108.9283199],[451,-40.5]]).appendArc([449,-38.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([319,-38.5]).appendArc([317,-40.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([317,-92.9839512]).appendArc([316.7503167,-93.9516244],{"radius":2,"clockwise":true,"large":false}).appendPoint([310.6961852,-104.9022716]).appendArc([310.5337619,-106.4542614],{"radius":2,"clockwise":false,"large":false}).appendPoint([320.8520812,-140.230923]).appendArc([323.2377049,-141.5898977],{"radius":2,"clockwise":false,"large":false}).appendPoint([449.4728838,-110.8716111]).appendArc([451,-108.9283199],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 4] });
}


function board2_extrude_4_outline_fn(){
    return new CSG.Path2D([[450,-107.9282443],[450,-41.5]]).appendArc([448,-39.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([322,-39.5]).appendArc([320,-41.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([320,-91.935298]).appendArc([319.7046571,-92.9813115],{"radius":2,"clockwise":true,"large":false}).appendPoint([312.0550383,-105.4476678]).appendArc([311.862041,-107.1252729],{"radius":2,"clockwise":false,"large":false}).appendPoint([322.3594991,-138.6655119]).appendArc([324.7299465,-139.9772337],{"radius":2,"clockwise":false,"large":false}).appendPoint([448.472793,-109.8715576]).appendArc([450,-107.9282443],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 4] });
}




                function outerWall2_case_fn() {
                    

                // creating part 0 of case outerWall2
                let outerWall2__part_0 = xlboard2_extrude_4_outline_fn();

                // make sure that rotations are relative
                let outerWall2__part_0_bounds = outerWall2__part_0.getBounds();
                let outerWall2__part_0_x = outerWall2__part_0_bounds[0].x + (outerWall2__part_0_bounds[1].x - outerWall2__part_0_bounds[0].x) / 2
                let outerWall2__part_0_y = outerWall2__part_0_bounds[0].y + (outerWall2__part_0_bounds[1].y - outerWall2__part_0_bounds[0].y) / 2
                outerWall2__part_0 = translate([-outerWall2__part_0_x, -outerWall2__part_0_y, 0], outerWall2__part_0);
                outerWall2__part_0 = rotate([0,0,0], outerWall2__part_0);
                outerWall2__part_0 = translate([outerWall2__part_0_x, outerWall2__part_0_y, 0], outerWall2__part_0);

                outerWall2__part_0 = translate([0,0,0], outerWall2__part_0);
                let result = outerWall2__part_0;
                
            
                    return result;
                }
            
            

                function innerWall2_case_fn() {
                    

                // creating part 0 of case innerWall2
                let innerWall2__part_0 = board2_extrude_4_outline_fn();

                // make sure that rotations are relative
                let innerWall2__part_0_bounds = innerWall2__part_0.getBounds();
                let innerWall2__part_0_x = innerWall2__part_0_bounds[0].x + (innerWall2__part_0_bounds[1].x - innerWall2__part_0_bounds[0].x) / 2
                let innerWall2__part_0_y = innerWall2__part_0_bounds[0].y + (innerWall2__part_0_bounds[1].y - innerWall2__part_0_bounds[0].y) / 2
                innerWall2__part_0 = translate([-innerWall2__part_0_x, -innerWall2__part_0_y, 0], innerWall2__part_0);
                innerWall2__part_0 = rotate([0,0,0], innerWall2__part_0);
                innerWall2__part_0 = translate([innerWall2__part_0_x, innerWall2__part_0_y, 0], innerWall2__part_0);

                innerWall2__part_0 = translate([0,0,0], innerWall2__part_0);
                let result = innerWall2__part_0;
                
            
                    return result;
                }
            
            

                function wall2_case_fn() {
                    

                // creating part 0 of case wall2
                let wall2__part_0 = outerWall2_case_fn();

                // make sure that rotations are relative
                let wall2__part_0_bounds = wall2__part_0.getBounds();
                let wall2__part_0_x = wall2__part_0_bounds[0].x + (wall2__part_0_bounds[1].x - wall2__part_0_bounds[0].x) / 2
                let wall2__part_0_y = wall2__part_0_bounds[0].y + (wall2__part_0_bounds[1].y - wall2__part_0_bounds[0].y) / 2
                wall2__part_0 = translate([-wall2__part_0_x, -wall2__part_0_y, 0], wall2__part_0);
                wall2__part_0 = rotate([0,0,0], wall2__part_0);
                wall2__part_0 = translate([wall2__part_0_x, wall2__part_0_y, 0], wall2__part_0);

                wall2__part_0 = translate([0,0,0], wall2__part_0);
                let result = wall2__part_0;
                
            

                // creating part 1 of case wall2
                let wall2__part_1 = innerWall2_case_fn();

                // make sure that rotations are relative
                let wall2__part_1_bounds = wall2__part_1.getBounds();
                let wall2__part_1_x = wall2__part_1_bounds[0].x + (wall2__part_1_bounds[1].x - wall2__part_1_bounds[0].x) / 2
                let wall2__part_1_y = wall2__part_1_bounds[0].y + (wall2__part_1_bounds[1].y - wall2__part_1_bounds[0].y) / 2
                wall2__part_1 = translate([-wall2__part_1_x, -wall2__part_1_y, 0], wall2__part_1);
                wall2__part_1 = rotate([0,0,0], wall2__part_1);
                wall2__part_1 = translate([wall2__part_1_x, wall2__part_1_y, 0], wall2__part_1);

                wall2__part_1 = translate([0,0,0], wall2__part_1);
                result = result.subtract(wall2__part_1);
                
            
                    return result;
                }
            
            
        
            function main() {
                return wall2_case_fn();
            }

        