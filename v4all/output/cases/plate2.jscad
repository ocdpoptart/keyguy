function xlboard2_cutout_extrude_3_outline_fn(){
    return new CSG.Path2D([[421,-108.9283199],[421,-40.5]]).appendArc([419,-38.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([310.25,-38.5]).appendPoint([310.25,-83.4]).appendPoint([287,-83.4]).appendPoint([287,-92.9839512]).appendArc([286.7503167,-93.9516244],{"radius":2,"clockwise":true,"large":false}).appendPoint([280.6961852,-104.9022716]).appendArc([280.5337619,-106.4542614],{"radius":2,"clockwise":false,"large":false}).appendPoint([290.8520812,-140.230923]).appendArc([293.2377049,-141.5898977],{"radius":2,"clockwise":false,"large":false}).appendPoint([419.4728838,-110.8716111]).appendArc([421,-108.9283199],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
.subtract(
    new CSG.Path2D([[304.3018936,-133.6169916],[317.4575902,-128.8287096]]).appendPoint([312.6693082,-115.673013]).appendPoint([299.5136116,-120.461295]).appendPoint([304.3018936,-133.6169916]).close().innerToCAG()
.union(
    new CSG.Path2D([[290.0303176,-120.7203984],[303.1860142,-115.9321164]]).appendPoint([298.3977322,-102.7764198]).appendPoint([285.2420356,-107.5647018]).appendPoint([290.0303176,-120.7203984]).close().innerToCAG()
).union(
    new CSG.Path2D([[306.9447848,-114.5640358],[320.1004814,-109.7757538]]).appendPoint([315.3121994,-96.6200572]).appendPoint([302.1565028,-101.4083392]).appendPoint([306.9447848,-114.5640358]).close().innerToCAG()
).union(
    new CSG.Path2D([[313,-56],[327,-56]]).appendPoint([327,-42]).appendPoint([313,-42]).appendPoint([313,-56]).close().innerToCAG()
).union(
    new CSG.Path2D([[313,-73],[327,-73]]).appendPoint([327,-59]).appendPoint([313,-59]).appendPoint([313,-73]).close().innerToCAG()
).union(
    new CSG.Path2D([[313,-90],[327,-90]]).appendPoint([327,-76]).appendPoint([313,-76]).appendPoint([313,-90]).close().innerToCAG()
).union(
    new CSG.Path2D([[331,-56],[345,-56]]).appendPoint([345,-42]).appendPoint([331,-42]).appendPoint([331,-56]).close().innerToCAG()
).union(
    new CSG.Path2D([[331,-73],[345,-73]]).appendPoint([345,-59]).appendPoint([331,-59]).appendPoint([331,-73]).close().innerToCAG()
).union(
    new CSG.Path2D([[331,-90],[345,-90]]).appendPoint([345,-76]).appendPoint([331,-76]).appendPoint([331,-90]).close().innerToCAG()
).union(
    new CSG.Path2D([[349,-56],[363,-56]]).appendPoint([363,-42]).appendPoint([349,-42]).appendPoint([349,-56]).close().innerToCAG()
).union(
    new CSG.Path2D([[349,-73],[363,-73]]).appendPoint([363,-59]).appendPoint([349,-59]).appendPoint([349,-73]).close().innerToCAG()
).union(
    new CSG.Path2D([[349,-90],[363,-90]]).appendPoint([363,-76]).appendPoint([349,-76]).appendPoint([349,-90]).close().innerToCAG()
).union(
    new CSG.Path2D([[367,-56],[381,-56]]).appendPoint([381,-42]).appendPoint([367,-42]).appendPoint([367,-56]).close().innerToCAG()
).union(
    new CSG.Path2D([[367,-73],[381,-73]]).appendPoint([381,-59]).appendPoint([367,-59]).appendPoint([367,-73]).close().innerToCAG()
).union(
    new CSG.Path2D([[367,-90],[381,-90]]).appendPoint([381,-76]).appendPoint([367,-76]).appendPoint([367,-90]).close().innerToCAG()
).union(
    new CSG.Path2D([[385,-56],[399,-56]]).appendPoint([399,-42]).appendPoint([385,-42]).appendPoint([385,-56]).close().innerToCAG()
).union(
    new CSG.Path2D([[385,-73],[399,-73]]).appendPoint([399,-59]).appendPoint([385,-59]).appendPoint([385,-73]).close().innerToCAG()
).union(
    new CSG.Path2D([[385,-90],[399,-90]]).appendPoint([399,-76]).appendPoint([385,-76]).appendPoint([385,-90]).close().innerToCAG()
).union(
    new CSG.Path2D([[403,-56],[417,-56]]).appendPoint([417,-42]).appendPoint([403,-42]).appendPoint([403,-56]).close().innerToCAG()
).union(
    new CSG.Path2D([[403,-73],[417,-73]]).appendPoint([417,-59]).appendPoint([403,-59]).appendPoint([403,-73]).close().innerToCAG()
).union(
    new CSG.Path2D([[403,-90],[417,-90]]).appendPoint([417,-76]).appendPoint([403,-76]).appendPoint([403,-90]).close().innerToCAG()
).union(
    new CSG.Path2D([[403,-107],[417,-107]]).appendPoint([417,-93]).appendPoint([403,-93]).appendPoint([403,-107]).close().innerToCAG()
)).extrude({ offset: [0, 0, 3] });
}




                function plate2_case_fn() {
                    

                // creating part 0 of case plate2
                let plate2__part_0 = xlboard2_cutout_extrude_3_outline_fn();

                // make sure that rotations are relative
                let plate2__part_0_bounds = plate2__part_0.getBounds();
                let plate2__part_0_x = plate2__part_0_bounds[0].x + (plate2__part_0_bounds[1].x - plate2__part_0_bounds[0].x) / 2
                let plate2__part_0_y = plate2__part_0_bounds[0].y + (plate2__part_0_bounds[1].y - plate2__part_0_bounds[0].y) / 2
                plate2__part_0 = translate([-plate2__part_0_x, -plate2__part_0_y, 0], plate2__part_0);
                plate2__part_0 = rotate([0,0,0], plate2__part_0);
                plate2__part_0 = translate([plate2__part_0_x, plate2__part_0_y, 0], plate2__part_0);

                plate2__part_0 = translate([0,0,0], plate2__part_0);
                let result = plate2__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return plate2_case_fn();
            }

        