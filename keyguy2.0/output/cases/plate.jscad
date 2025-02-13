function xlboard_cutout_extrude_3_outline_fn(){
    return new CSG.Path2D([[59,-108.9283199],[59,-40.5]]).appendArc([61,-38.5],{"radius":2,"clockwise":true,"large":false}).appendPoint([169.75,-38.5]).appendPoint([169.75,-83.4]).appendPoint([193,-83.4]).appendPoint([193,-92.9839512]).appendArc([193.2496833,-93.9516244],{"radius":2,"clockwise":false,"large":false}).appendPoint([199.3038148,-104.9022716]).appendArc([199.4662381,-106.4542614],{"radius":2,"clockwise":true,"large":false}).appendPoint([189.1479188,-140.230923]).appendArc([186.7622951,-141.5898977],{"radius":2,"clockwise":true,"large":false}).appendPoint([60.5271162,-110.8716111]).appendArc([59,-108.9283199],{"radius":2,"clockwise":true,"large":false}).close().innerToCAG()
.subtract(
    new CSG.Path2D([[162.5424098,-128.8287096],[175.6981064,-133.6169916]]).appendPoint([180.4863884,-120.461295]).appendPoint([167.3306918,-115.673013]).appendPoint([162.5424098,-128.8287096]).close().innerToCAG()
.union(
    new CSG.Path2D([[176.8139858,-115.9321164],[189.9696824,-120.7203984]]).appendPoint([194.7579644,-107.5647018]).appendPoint([181.6022678,-102.7764198]).appendPoint([176.8139858,-115.9321164]).close().innerToCAG()
).union(
    new CSG.Path2D([[159.8995186,-109.7757538],[173.0552152,-114.5640358]]).appendPoint([177.8434972,-101.4083392]).appendPoint([164.6878006,-96.6200572]).appendPoint([159.8995186,-109.7757538]).close().innerToCAG()
).union(
    new CSG.Path2D([[153,-56],[167,-56]]).appendPoint([167,-42]).appendPoint([153,-42]).appendPoint([153,-56]).close().innerToCAG()
).union(
    new CSG.Path2D([[153,-73],[167,-73]]).appendPoint([167,-59]).appendPoint([153,-59]).appendPoint([153,-73]).close().innerToCAG()
).union(
    new CSG.Path2D([[153,-90],[167,-90]]).appendPoint([167,-76]).appendPoint([153,-76]).appendPoint([153,-90]).close().innerToCAG()
).union(
    new CSG.Path2D([[135,-56],[149,-56]]).appendPoint([149,-42]).appendPoint([135,-42]).appendPoint([135,-56]).close().innerToCAG()
).union(
    new CSG.Path2D([[135,-73],[149,-73]]).appendPoint([149,-59]).appendPoint([135,-59]).appendPoint([135,-73]).close().innerToCAG()
).union(
    new CSG.Path2D([[135,-90],[149,-90]]).appendPoint([149,-76]).appendPoint([135,-76]).appendPoint([135,-90]).close().innerToCAG()
).union(
    new CSG.Path2D([[117,-56],[131,-56]]).appendPoint([131,-42]).appendPoint([117,-42]).appendPoint([117,-56]).close().innerToCAG()
).union(
    new CSG.Path2D([[117,-73],[131,-73]]).appendPoint([131,-59]).appendPoint([117,-59]).appendPoint([117,-73]).close().innerToCAG()
).union(
    new CSG.Path2D([[117,-90],[131,-90]]).appendPoint([131,-76]).appendPoint([117,-76]).appendPoint([117,-90]).close().innerToCAG()
).union(
    new CSG.Path2D([[99,-56],[113,-56]]).appendPoint([113,-42]).appendPoint([99,-42]).appendPoint([99,-56]).close().innerToCAG()
).union(
    new CSG.Path2D([[99,-73],[113,-73]]).appendPoint([113,-59]).appendPoint([99,-59]).appendPoint([99,-73]).close().innerToCAG()
).union(
    new CSG.Path2D([[99,-90],[113,-90]]).appendPoint([113,-76]).appendPoint([99,-76]).appendPoint([99,-90]).close().innerToCAG()
).union(
    new CSG.Path2D([[81,-56],[95,-56]]).appendPoint([95,-42]).appendPoint([81,-42]).appendPoint([81,-56]).close().innerToCAG()
).union(
    new CSG.Path2D([[81,-73],[95,-73]]).appendPoint([95,-59]).appendPoint([81,-59]).appendPoint([81,-73]).close().innerToCAG()
).union(
    new CSG.Path2D([[81,-90],[95,-90]]).appendPoint([95,-76]).appendPoint([81,-76]).appendPoint([81,-90]).close().innerToCAG()
).union(
    new CSG.Path2D([[63,-56],[77,-56]]).appendPoint([77,-42]).appendPoint([63,-42]).appendPoint([63,-56]).close().innerToCAG()
).union(
    new CSG.Path2D([[63,-73],[77,-73]]).appendPoint([77,-59]).appendPoint([63,-59]).appendPoint([63,-73]).close().innerToCAG()
).union(
    new CSG.Path2D([[63,-90],[77,-90]]).appendPoint([77,-76]).appendPoint([63,-76]).appendPoint([63,-90]).close().innerToCAG()
).union(
    new CSG.Path2D([[63,-107],[77,-107]]).appendPoint([77,-93]).appendPoint([63,-93]).appendPoint([63,-107]).close().innerToCAG()
)).extrude({ offset: [0, 0, 3] });
}




                function plate_case_fn() {
                    

                // creating part 0 of case plate
                let plate__part_0 = xlboard_cutout_extrude_3_outline_fn();

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

        