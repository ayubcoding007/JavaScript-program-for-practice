const userData = [
    {
        "id": 1,
        "firstName": "Sheikh",
        "lastName": "Ayub",
        "age": 21,
        "city":"Hyderabad" 
    },
    {   
        "id": 2,
        "firstName": "Nazim",
        "lastName": "khan",
        "age": 27,
        "city":"Muradabad" 
    },
    {
        "id": 3,
        "firstName": "Imteyaz",
        "lastName": "Ahmed",
        "age": 19,
        "city":"Lucknow" 
    },
    {   
        "id": 4,
        "firstName": "Sheikh",
        "lastName": "Rashid",
        "age": 17,
        "city":"Ahemdabad" 
    },
    {
        "id": 5,
        "firstName": "Syed",
        "lastName": "Zafer",
        "age": 23,
        "city":"Lucknow" 
    },
    {   
        "id": 6,
        "firstName": "Sana",
        "lastName": "Perveen",
        "age": 21,
        "city":"Partawal" 
    },
    {
        "id": 7,
        "firstName": "Syeda",
        "lastName": "Fathima",
        "age": 19,
        "city":"Sultanpur" 
    },
    {   
        "id": 8,
        "firstName": "Sahil",
        "lastName": "Hushen",
        "age": 22,
        "city":"Khalilabad" 
    },{
        "id": 9,
        "firstName": "Aarif",
        "lastName": "Khan",
        "age": 16,
        "city":"Akbarpur" 
    },
    {   
        "id": 10,
        "firstName": "Tufel",
        "lastName": "Khan",
        "age": 20,
        "city":"Khalilabad" 
    },
    {
        "id": 11,
        "firstName": "Aarif",
        "lastName": "Siddiqui",
        "age": 22,
        "city":"Khusinagar" 
    },
    {   
        "id": 12,
        "firstName": "Sakib",
        "lastName": "Khan",
        "age": 24,
        "city":"Gazipur" 
    },{
        "id": 13,
        "firstName": "Sheikh",
        "lastName": "Mahboob",
        "age": 13,
        "city":"Maharajganj" 

    },
    {   
        "id": 14,
        "firstName": "Farhan",
        "lastName": "Sheikh",
        "age": 12,
        "city":"Gorakhpur" 
    },
    {
        "id": 15,
        "firstName": "Aatif",
        "lastName": "Ali",
        "age": 21,
        "city":"Hyderabad" 
    },
    {   
        "id": 16,
        "firstName": "Khalil",
        "lastName": "Pathan",
        "age": 20,
        "city":"Muradabad" 
    },
    {
        "id": 17,
        "firstName": "Sheikh",
        "lastName": "Naim",
        "age": 21,
        "city":"Mujaffarpur" 

    },
    {   
        "id": 18,
        "firstName": "Sumaniya",
        "lastName": "Sheikh",
        "age": 19,
        "city":"Lucknow" 
    },
    {
        "id": 19,
        "firstName": "Sheerin",
        "lastName": "Fathima",
        "age": 21,
        "city":"Hyderabad" 
    },
    {   
        "id": 20,
        "firstName": "Reyaz",
        "lastName": "Sheikh",
        "age": 21,
        "city":"Maharajganj" 
    },
        
]



const josonData = new Promise((resolve, reject)=>{
    
    if(userData){
        resolve(userData)
    }else{
        reject("data not found")
    }
});


josonData.then((data)=>{
    console.log(data)
}).catch((eroor)=>{
    console.log(eroor)
})