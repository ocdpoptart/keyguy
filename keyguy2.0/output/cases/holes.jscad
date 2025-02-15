function mounting_extrude_8_outline_fn(){
    return CAG.circle({"center":[115,-74.55],"radius":1.5})
.union(
    CAG.circle({"center":[178,-91],"radius":1.5})
).union(
    CAG.circle({"center":[180,-44.5],"radius":1.5})
).union(
    CAG.circle({"center":[80,-57.55],"radius":1.5})
).union(
    CAG.circle({"center":[115,-116.25],"radius":1.5})
).union(
    CAG.circle({"center":[63,-105],"radius":1.5})
).union(
    CAG.circle({"center":[183.5576676,-135.4134602],"radius":1.5})
).extrude({ offset: [0, 0, 8] });
}




                function holes_case_fn() {
                    

                // creating part 0 of case holes
                let holes__part_0 = mounting_extrude_8_outline_fn();

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
            
            
        
            function main() {
                return holes_case_fn();
            }

        