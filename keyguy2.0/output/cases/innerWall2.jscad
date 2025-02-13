function board2_extrude_12_outline_fn(){
    return new CSG.Path2D([[420,-107.9282443],[420,-41.5]]).appendArc([418,-39.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([292,-39.5]).appendArc([290,-41.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([290,-91.935298]).appendArc([289.7046571,-92.9813115],{"radius":2,"clockwise":true,"large":false}).appendPoint([282.0550383,-105.4476678]).appendArc([281.862041,-107.1252729],{"radius":2,"clockwise":false,"large":false}).appendPoint([292.3594991,-138.6655119]).appendArc([294.7299465,-139.9772337],{"radius":2,"clockwise":false,"large":false}).appendPoint([418.472793,-109.8715576]).appendArc([420,-107.9282443],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 12] });
}




                function innerWall2_case_fn() {
                    

                // creating part 0 of case innerWall2
                let innerWall2__part_0 = board2_extrude_12_outline_fn();

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

        