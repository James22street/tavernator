/* thirst you need to make your party and check if you have the miniun requiremts for start.box
I decide make the dungeon like one living being, the team like one two. And give some advantage 
of hit first. The system is really simple. */
var warrior = {
     cant: 1,
     life: 100,
     damage_male: 10,
     damage_dist: 2
}
var mage = {
    cant:1,
    life: 50,
    damage_male: 1,
    damage_dist:13,
    
}
var rogue = {
    cant:1,
    life:70,
    damage_male: 5,
    damage_dist:7,
    discover_trap: 0.7,
}

var team_damage_male= warrior[2]*warrior[0]+mage[2]*mage[0]+rogue[2]*rogue[0], /* sum of the damage plus the cuantity of adventurers we send*/
var team_damage_dist= warrior[3]*warrior[0]+mage[3]*mage[0]+rogue[3]*rogue[0],
var team_life = warrior[1]*warrior[0]+mage[1]*mage[0]+rogue[1]*rogue[0], 


var dungeon_easy = {
    dificulty: 10, /* this number is the times yo loop the damage to your team*/
    life:15,
    damage_male_orc: 10,
    damage_dist_orc: 0,
    damage_traps: 20, /* this will go agaist the ability of your rogue*/
   }
var dungeon_life= dungeon_easy[0]*dungeon_easy[1]
var dungeon_damage_male= dungeon_easy[0]*dungeon_easy[2],
var dungeon_damage_dist= dungeon_easy[0]*dungeon_easy[3],
var dungeon_damage_trap= dungeon_easy[0]*dungeon_easy[4],
/* check minimiun requirementes for the dungeon, yo need to have warrior rogue and mage*/

if (rogue[0]>=1 || warrior[0]>=1||mage[0]>=1){
   
 var check_of_survival_team= (damage_dist_team+damage_male_team)-dungeon_life,
    if (check_of_survival_team<0) {
        console.log("you kill the bastard!")
    }else if (check_of_survival_team>0){
       var dead_check= dungeon_damage_dist+dungeon_damage_male+(dungeon_damage_trap-(dungeon_damage_trap*rogue[4]))-team_life
    }else if (dead_check<0){
        console.log("Your team is dead")
    }else{
        console.log("your team barely survive")
    }
    
}