/*
You have a table with all available goods in the store. The data is represented as a list of objects

Your mission here is to find the TOP most expensive goods. The amount we are looking for will be given as a first argument and the whole data as the second one

Input: Integer and array of objects. Each objects has two attributes "name" and "price"

Output: the same as the second Input argument.

Example:

biggerPrice(2, [
    {"name": "bread", "price": 100},
    {"name": "wine", "price": 138},
    {"name": "meat", "price": 15},
    {"name": "water", "price": 1}
]) == [
    {"name": "wine", "price": 138},
    {"name": "bread", "price": 100}
]

biggerPrice(1, [
    {"name": "pen", "price": 5},
    {"name": "whiteboard", "price": 170}
]) == [{"name": "whiteboard", "price": 170}]
*/

// TOP most expensive goods
function biggerPrice(limit, data) {
    return data.sort((a,b) => b.price - a.price).slice(0,limit);
}


    console.log(biggerPrice(2, [
        {"name": "bread", "price": 100},
        {"name": "wine", "price": 138},
        {"name": "meat", "price": 15},
        {"name": "water", "price": 1}
    ]));
    //  [
    //     {"name": "wine", "price": 138},
    //     {"name": "bread", "price": 100}
    // ])
    console.log(biggerPrice(1, [
        {"name": "pen", "price": 5},
        {"name": "whiteboard", "price": 170}
    ]));
    // [{"name": "whiteboard", "price": 170}])
