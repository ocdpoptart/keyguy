function board2_extrude_4_outline_fn(){
    return new CSG.Path2D([[450,-107.9282443],[450,-41.5]]).appendArc([448,-39.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([322,-39.5]).appendArc([320,-41.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([320,-91.935298]).appendArc([319.7046571,-92.9813115],{"radius":2,"clockwise":true,"large":false}).appendPoint([312.0550383,-105.4476678]).appendArc([311.862041,-107.1252729],{"radius":2,"clockwise":false,"large":false}).appendPoint([322.3594991,-138.6655119]).appendArc([324.7299465,-139.9772337],{"radius":2,"clockwise":false,"large":false}).appendPoint([448.472793,-109.8715576]).appendArc([450,-107.9282443],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 4] });
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
            
            
        
            function main() {
                return innerWall2_case_fn();
            }

        