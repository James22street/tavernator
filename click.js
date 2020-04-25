var clicks = 0;
var total_table = clicks;
var table_distro= total_table;
var slave_table = null;
var peasant_table = null;
var noble_table = null;
var feudal_table = null;



    function sum() {
        clicks += 1;
        document.getElementById("clicks").innerHTML = clicks;

    };


    /* slave function*/
    function add() {
      
            slave_table += 1;
            document.getElementById("slave_table").innerHTML = slave_table;
           
       return total_distro -= 1, slave_table;
    };
    function rest(){
            if (slave_table > 0) {
                slave_table -= 1;
            document.getElementById("slave_table").innerHTML = slave_table;
                
            } else {
             
            }
        return total_distro += 1,slave_table;
    }


    /* peasant function*/
    function add_p() {
      
        peasant_table += 1;
        document.getElementById("peasant_table").innerHTML = peasant_table;
       
       return total_distro -= 1, peasant_table;
};
    function rest_p(){
        if (peasant_table > 0) {
            peasant_table -= 1;
            document.getElementById("peasant_table").innerHTML = peasant_table;
            
        } else {
         
        }
    return total_distro += 1, peasant_table;
}

     /* slave function*/
     function add_n() {
      
        noble_table += 1;
        document.getElementById("noble_table").innerHTML = noble_table;
       
       return total_distro -= 1, noble_table;
};
    function rest_n(){
        if (noble_table > 0) {
            noble_table -= 1;
            document.getElementById("noble_table").innerHTML = noble_table;
            
        } else {
         
        }
    return total_distro += 1, noble_table;
}

/* slave function*/
    function add_f() {
          if (feudal_table < 5) {
            feudal_table += 1;
           document.getElementById("feudal_table").innerHTML = feudal_table;  

          } else {
                                 
          }
           
   
   return total_distro -= 1, feudal_table;
};
    function rest_f(){
          if (feudal_table > 0 ) {
              feudal_table -= 1;
              document.getElementById("feudal_table").innerHTML = feudal_table;
        
       } else {
     
     }
return total_distro += 1, feudal_table;
}




    


    

    
    
