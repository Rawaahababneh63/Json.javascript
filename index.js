localStorage.setItem('name','Rawaah');
localStorage.setItem('age',26);
localStorage.setItem('arr',['Rawaah','Reem','Roaa','Waed']);
localStorage.info={
name:'RawaahAb',
age:26,
Adress:'Jordan',
Hobby:'voiceover',

};
// output1
console.log(localStorage.getItem('name'));
console.log(localStorage.getItem('age'));
console.log(localStorage.arr);
console.log(localStorage.info);
// output2
console.log(typeof(localStorage.getItem('name')));
console.log(typeof(localStorage.getItem('age')));
console.log(typeof(localStorage.getItem('arr')));
console.log(typeof(localStorage.getItem('info')));
//  Prolem to solve it by Json stirngify input Json Parse out put
// نتائجها  تظهر في التخزين انه بخزنلي نفس شكل الارري بس المشكلة ظلت انها مازالت نص
localStorage.setItem('arr1',['Rawaah','Reem','Roaa','Waed']);
localStorage.arr1=JSON.stringify(['Rawaah','Reem','Roaa','Waed']);
console.log(localStorage.getItem('arr1'));
// arr==> object هون بعده بحكيلي انها نص
console.log(typeof(localStorage.getItem('arr1')));


localStorage.info1= JSON.stringify({
    name:'RawaahAb',
    age:26,
    Adress:'Jordan',
    Hobby:'voiceover',
    
    });
    console.log(typeof(localStorage.info1));
    // لحل هاي المشكلة بستخدم Jsonparse ===>Jsonparse(localstorage.اسم الاشي يلي بدي احوله)
   console.log(JSON.parse(localStorage.info1))
   alert(typeof(JSON.parse(localStorage.info1)))


