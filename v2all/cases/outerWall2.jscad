function xlboard2_extrude_4_outline_fn(){
    return new CSG.Path2D([[451,-108.9283199],[451,-40.5]]).appendArc([449,-38.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([319,-38.5]).appendArc([317,-40.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([317,-92.9839512]).appendArc([316.7503167,-93.9516244],{"radius":2,"clockwise":true,"large":false}).appendPoint([310.6961852,-104.9022716]).appendArc([310.5337619,-106.4542614],{"radius":2,"clockwise":false,"large":false}).appendPoint([320.8520812,-140.230923]).appendArc([323.2377049,-141.5898977],{"radius":2,"clockwise":false,"large":false}).appendPoint([449.4728838,-110.8716111]).appendArc([451,-108.9283199],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
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
            
            
        
            function main() {
                return outerWall2_case_fn();
            }

        