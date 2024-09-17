function standoff2_extrude_4_outline_fn(){
    return CAG.circle({"center":[395,-74.55],"radius":2.5})
.union(
    CAG.circle({"center":[332,-91],"radius":2.5})
).union(
    CAG.circle({"center":[330,-44.5],"radius":2.5})
).union(
    CAG.circle({"center":[430,-57.55],"radius":2.5})
).union(
    CAG.circle({"center":[395,-116.25],"radius":2.5})
).union(
    CAG.circle({"center":[447,-105],"radius":2.5})
).union(
    CAG.circle({"center":[326.4423324,-135.4134602],"radius":2.5})
).extrude({ offset: [0, 0, 4] });
}




                function standoffs2_case_fn() {
                    

                // creating part 0 of case standoffs2
                let standoffs2__part_0 = standoff2_extrude_4_outline_fn();

                // make sure that rotations are relative
                let standoffs2__part_0_bounds = standoffs2__part_0.getBounds();
                let standoffs2__part_0_x = standoffs2__part_0_bounds[0].x + (standoffs2__part_0_bounds[1].x - standoffs2__part_0_bounds[0].x) / 2
                let standoffs2__part_0_y = standoffs2__part_0_bounds[0].y + (standoffs2__part_0_bounds[1].y - standoffs2__part_0_bounds[0].y) / 2
                standoffs2__part_0 = translate([-standoffs2__part_0_x, -standoffs2__part_0_y, 0], standoffs2__part_0);
                standoffs2__part_0 = rotate([0,0,0], standoffs2__part_0);
                standoffs2__part_0 = translate([standoffs2__part_0_x, standoffs2__part_0_y, 0], standoffs2__part_0);

                standoffs2__part_0 = translate([0,0,0], standoffs2__part_0);
                let result = standoffs2__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return standoffs2_case_fn();
            }

        