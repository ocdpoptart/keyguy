function xlboard_cutout_extrude_1_outline_fn(){
    return new CSG.Path2D([[59,-108.9283199],[59,-40.5]]).appendArc([61,-38.5],{"radius":2,"clockwise":true,"large":false}).appendPoint([191,-38.5]).appendArc([193,-40.5],{"radius":2,"clockwise":true,"large":false}).appendPoint([193,-92.9839512]).appendArc([193.2496833,-93.9516244],{"radius":2,"clockwise":false,"large":false}).appendPoint([199.3038148,-104.9022716]).appendArc([199.4662381,-106.4542614],{"radius":2,"clockwise":true,"large":false}).appendPoint([189.1479188,-140.230923]).appendArc([186.7622951,-141.5898977],{"radius":2,"clockwise":true,"large":false}).appendPoint([60.5271162,-110.8716111]).appendArc([59,-108.9283199],{"radius":2,"clockwise":true,"large":false}).close().innerToCAG()
.subtract(
    new CSG.Path2D([[151.25,-57.25],[168.75,-57.25]]).appendPoint([168.75,-40.75]).appendPoint([151.25,-40.75]).appendPoint([151.25,-57.25]).close().innerToCAG()
.union(
    new CSG.Path2D([[151.25,-74.25],[168.75,-74.25]]).appendPoint([168.75,-57.75]).appendPoint([151.25,-57.75]).appendPoint([151.25,-74.25]).close().innerToCAG()
).union(
    new CSG.Path2D([[151.25,-91.25],[168.75,-91.25]]).appendPoint([168.75,-74.75]).appendPoint([151.25,-74.75]).appendPoint([151.25,-91.25]).close().innerToCAG()
).union(
    new CSG.Path2D([[133.25,-57.25],[150.75,-57.25]]).appendPoint([150.75,-40.75]).appendPoint([133.25,-40.75]).appendPoint([133.25,-57.25]).close().innerToCAG()
).union(
    new CSG.Path2D([[133.25,-74.25],[150.75,-74.25]]).appendPoint([150.75,-57.75]).appendPoint([133.25,-57.75]).appendPoint([133.25,-74.25]).close().innerToCAG()
).union(
    new CSG.Path2D([[133.25,-91.25],[150.75,-91.25]]).appendPoint([150.75,-74.75]).appendPoint([133.25,-74.75]).appendPoint([133.25,-91.25]).close().innerToCAG()
).union(
    new CSG.Path2D([[115.25,-57.25],[132.75,-57.25]]).appendPoint([132.75,-40.75]).appendPoint([115.25,-40.75]).appendPoint([115.25,-57.25]).close().innerToCAG()
).union(
    new CSG.Path2D([[115.25,-74.25],[132.75,-74.25]]).appendPoint([132.75,-57.75]).appendPoint([115.25,-57.75]).appendPoint([115.25,-74.25]).close().innerToCAG()
).union(
    new CSG.Path2D([[115.25,-91.25],[132.75,-91.25]]).appendPoint([132.75,-74.75]).appendPoint([115.25,-74.75]).appendPoint([115.25,-91.25]).close().innerToCAG()
).union(
    new CSG.Path2D([[97.25,-57.25],[114.75,-57.25]]).appendPoint([114.75,-40.75]).appendPoint([97.25,-40.75]).appendPoint([97.25,-57.25]).close().innerToCAG()
).union(
    new CSG.Path2D([[97.25,-74.25],[114.75,-74.25]]).appendPoint([114.75,-57.75]).appendPoint([97.25,-57.75]).appendPoint([97.25,-74.25]).close().innerToCAG()
).union(
    new CSG.Path2D([[97.25,-91.25],[114.75,-91.25]]).appendPoint([114.75,-74.75]).appendPoint([97.25,-74.75]).appendPoint([97.25,-91.25]).close().innerToCAG()
).union(
    new CSG.Path2D([[79.25,-57.25],[96.75,-57.25]]).appendPoint([96.75,-40.75]).appendPoint([79.25,-40.75]).appendPoint([79.25,-57.25]).close().innerToCAG()
).union(
    new CSG.Path2D([[79.25,-74.25],[96.75,-74.25]]).appendPoint([96.75,-57.75]).appendPoint([79.25,-57.75]).appendPoint([79.25,-74.25]).close().innerToCAG()
).union(
    new CSG.Path2D([[79.25,-91.25],[96.75,-91.25]]).appendPoint([96.75,-74.75]).appendPoint([79.25,-74.75]).appendPoint([79.25,-91.25]).close().innerToCAG()
).union(
    new CSG.Path2D([[61.25,-57.25],[78.75,-57.25]]).appendPoint([78.75,-40.75]).appendPoint([61.25,-40.75]).appendPoint([61.25,-57.25]).close().innerToCAG()
).union(
    new CSG.Path2D([[61.25,-74.25],[78.75,-74.25]]).appendPoint([78.75,-57.75]).appendPoint([61.25,-57.75]).appendPoint([61.25,-74.25]).close().innerToCAG()
).union(
    new CSG.Path2D([[61.25,-91.25],[78.75,-91.25]]).appendPoint([78.75,-74.75]).appendPoint([61.25,-74.75]).appendPoint([61.25,-91.25]).close().innerToCAG()
).union(
    new CSG.Path2D([[61.25,-108.25],[78.75,-108.25]]).appendPoint([78.75,-91.75]).appendPoint([61.25,-91.75]).appendPoint([61.25,-108.25]).close().innerToCAG()
).union(
    new CSG.Path2D([[160.4704225,-129.4047902],[176.9150433,-135.3901427]]).appendPoint([182.5583757,-119.8852144]).appendPoint([166.1137549,-113.8998619]).appendPoint([160.4704225,-129.4047902]).close().innerToCAG()
).union(
    new CSG.Path2D([[174.7419985,-116.508197],[191.1866193,-122.4935495]]).appendPoint([196.8299517,-106.9886212]).appendPoint([180.3853309,-101.0032687]).appendPoint([174.7419985,-116.508197]).close().innerToCAG()
).union(
    new CSG.Path2D([[157.8275313,-110.3518344],[174.2721521,-116.3371869]]).appendPoint([179.9154845,-100.8322586]).appendPoint([163.4708637,-94.8469061]).appendPoint([157.8275313,-110.3518344]).close().innerToCAG()
)).extrude({ offset: [0, 0, 1] });
}




                function plate_case_fn() {
                    

                // creating part 0 of case plate
                let plate__part_0 = xlboard_cutout_extrude_1_outline_fn();

                // make sure that rotations are relative
                let plate__part_0_bounds = plate__part_0.getBounds();
                let plate__part_0_x = plate__part_0_bounds[0].x + (plate__part_0_bounds[1].x - plate__part_0_bounds[0].x) / 2
                let plate__part_0_y = plate__part_0_bounds[0].y + (plate__part_0_bounds[1].y - plate__part_0_bounds[0].y) / 2
                plate__part_0 = translate([-plate__part_0_x, -plate__part_0_y, 0], plate__part_0);
                plate__part_0 = rotate([0,0,0], plate__part_0);
                plate__part_0 = translate([plate__part_0_x, plate__part_0_y, 0], plate__part_0);

                plate__part_0 = translate([0,0,0], plate__part_0);
                let result = plate__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return plate_case_fn();
            }

        