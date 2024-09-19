function standoff_extrude_12_outline_fn(){
    return CAG.circle({"center":[115,-74.55],"radius":2.5})
.union(
    CAG.circle({"center":[178,-91],"radius":2.5})
).union(
    CAG.circle({"center":[180,-44.5],"radius":2.5})
).union(
    CAG.circle({"center":[80,-57.55],"radius":2.5})
).union(
    CAG.circle({"center":[115,-116.25],"radius":2.5})
).union(
    CAG.circle({"center":[63,-105],"radius":2.5})
).union(
    CAG.circle({"center":[183.5576676,-135.4134602],"radius":2.5})
).extrude({ offset: [0, 0, 12] });
}




                function standoffs_case_fn() {
                    

                // creating part 0 of case standoffs
                let standoffs__part_0 = standoff_extrude_12_outline_fn();

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
            
            
        
            function main() {
                return standoffs_case_fn();
            }

        