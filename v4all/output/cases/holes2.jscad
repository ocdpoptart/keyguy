function mounting2_extrude_12_outline_fn(){
    return CAG.circle({"center":[365,-74.55],"radius":1.5})
.union(
    CAG.circle({"center":[302,-91],"radius":1.5})
).union(
    CAG.circle({"center":[300,-44.5],"radius":1.5})
).union(
    CAG.circle({"center":[400,-57.55],"radius":1.5})
).union(
    CAG.circle({"center":[365,-116.25],"radius":1.5})
).union(
    CAG.circle({"center":[417,-105],"radius":1.5})
).union(
    CAG.circle({"center":[296.4423324,-135.4134602],"radius":1.5})
).extrude({ offset: [0, 0, 12] });
}




                function holes2_case_fn() {
                    

                // creating part 0 of case holes2
                let holes2__part_0 = mounting2_extrude_12_outline_fn();

                // make sure that rotations are relative
                let holes2__part_0_bounds = holes2__part_0.getBounds();
                let holes2__part_0_x = holes2__part_0_bounds[0].x + (holes2__part_0_bounds[1].x - holes2__part_0_bounds[0].x) / 2
                let holes2__part_0_y = holes2__part_0_bounds[0].y + (holes2__part_0_bounds[1].y - holes2__part_0_bounds[0].y) / 2
                holes2__part_0 = translate([-holes2__part_0_x, -holes2__part_0_y, 0], holes2__part_0);
                holes2__part_0 = rotate([0,0,0], holes2__part_0);
                holes2__part_0 = translate([holes2__part_0_x, holes2__part_0_y, 0], holes2__part_0);

                holes2__part_0 = translate([0,0,0], holes2__part_0);
                let result = holes2__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return holes2_case_fn();
            }

        