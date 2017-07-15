var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({

    host: "localhost",
    port: 8889,
    
    //user name
    user: "root",
    //password
    password: "root",
    //database name 
    database: "bamazon"
});

//handles errors and prevents bottle neck of runtime
//calls selectAll function
connection.connect(function(err){
    if(err) throw err;
    console.log("connected as id " + connection.threadId);
   
});
 selectAll();
//this function assures the query will run after the connection
function selectAll(){
connection.query("SELECT * FROM products", function(err, res){
    if(err) throw err;
    console.log("Here is a list of products")
    console.log("-----------------------------------")
    for (var i = 0; i < res.length; i++) {
       console.log(res[i].item_id +  " | Product:  " + res[i].product_name + "\n" +   "    Dept: " + res[i].department_name + "\t" + " Price: $" + res[i].price + "\t" +  " Qty: " + res[i].stock_quantity + "\n" );    
    }
    console.log("-----------------------------------")
});
}

purchase();

function purchase(){
    connection.query("SELECT * FROM products", function(err, results){
    if (err) throw err;
    inquirer.prompt([
        {
          name: "choice",
          type: "rawlist",
          choices: function() {
            var choiceArray = [];
            for (var i = 0; i < results.length; i++) {
              choiceArray.push(results[i].product_name);
            }
            return choiceArray;
          },
          message: "What Item would you like to purchase?"
        },
        {
            name: "howMany",
            type: "input",
            message: "How many would you like to buy?"

        }
    ]).then(function(answer){
        var chosenItem;
        for (var i = 0; i < results.length; i++) {
           if(results[i].product_name === answer.choice) { 
               chosenItem = results[i];
         
         //if statement   
         }
       //for loop 
       }
    if (chosenItem.stock_quantity > parseInt(answer.howMany)) {
        connection.query(
            "UPDATE products SET ? WHERE ?",
            [
                {
                    stock_quantity: answer.howMany 
                },
                {
                    item_id: chosenItem.item_id
                }
            ],
            function(error) {
                if (error) throw err;
                console.log("Your total is: $" + chosenItem.price * answer.howMany);
                console.log("purchase complete");
                selectAll();
            }
        );
    }
    else {
        console.log("not enough stock to complete purchase. Try again");
        selectAll();
    }

    //.then function
    });
    

    //connection query     
    });
//function end
}




















// function start() {
    
//     inquirer.prompt([
        
//             {
//             name:"item",
//             type:"input",
//             message:"What is the ID of the item you would like to purchase?"
//         },
//         {
//             name:"quantity",
//             type:"input",
//             message:"How many would you like to purchase?"
            
//             // *CHECK VALIDATION (NOT WORKING)*
//             // validate: function(value) {
//             //     if (isNaN(value) === false) {
//             //         return true;
//             //     }
//             //     return false;
//             //      }
//         }
//   ]).then(function(awnser){
    

//       console.log("thank you for your submission");
//   });  
  
// }




