
var gold = 100000;


var population_rural_total_initial = 100 + ( Math.floor(Math.random() * (+max - +min)) + +min) ;
var population_rural_sum_upgrates  = population_rural_total_initial * upgrade_pupulation [1];

var slaves_class = population_rural_total * 0.50;
var peasants_class= population_rural_total * 0.40;
var noble_class= population_rural_total  * 0.09;
var feudal_class= population_rural_total * 0.01;

var slaves_spend_per_hour = 0.5; 
var peasant_spend_per_hour = 1;
var noble_spend_per_hour = 3;
var feudal_spend_per_hour = 10

var table_slave_cost = 10;
var table_slave_position = 10;
var table_slave_slot = 1;
var table_peasant_cost = 20;
var table_peasant_position = 10;
var table_peasant_slot = 1;
var table_noble_cost = 40;
var table_peasant_position = 10;
var table_noble_slot = 1;
var table_noble_position = 5
var table_feudal_cost = 100;
var table_feudal_position = 5;
var table_feudal_slot= 1;


var table_max_bar = 100;
var table_real_total = table_slave_bar+table_peasant_bar+table_feudal_bar;
if ( table_max_bar>table_real_total){
    console.log("buy more tables")
}else{
    console.log("You are full my friend!")
}

var table_slave_bar = 50;
var table_peasant_bar = 20;
var table_noble_bar  = 2;
var table_feudal_bar = 1;

var upgrade_population = { element: "Leprosario", population_increase: 0.1};
var upgrades_table = {  element:"candle", attraction:0.1, cost: 0.5
};

var slave_table_occupied = 20
var peasant_table_occupied = 30
var noble_table_occupied = 2
var feudal_table_occupied =1

if (table_real_total>0) {
      
    
    slaves_class * (table_slave_position/100+ upgrade_table[1])
    peasants_class * (table_peasant_position/100 + upgrade_table[1])
    noble_class * (table_noble_position/100 + upgrade_table[1])
    feudal_class * (table_feudal_position/100 + upgrade_table[1])
    return slave_table_occupied
    
} else {
    console.log ("You dont have tables to give Bastard!")
    
}

