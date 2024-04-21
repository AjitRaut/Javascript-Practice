//write a js program that computes the avg mark of following students.Then this average is used to determine the corresponding grade.

let a = 80,B = 77,c = 88,d = 95, e = 68;

let avg = (a + B + c + d + e) / 5;
console.log("Average of all student mark is:",avg);

if (a <= 60) {
  console.log("The grade of a is F");
} else if (a <= 70) {
  console.log("The grade of a is D");
} else if (a <= 80) {
  console.log("The grade of a is c");
} else if (a <= 90) {
  console.log("The grade of a is B");
} else if (a <= 100) {
  console.log("The grade of a is A");
} else {
  console.log("Not a valid nummBer for grade");
}

if (B <= 60) {
  console.log("The grade of B is F");
} else if (B <= 70) {
  console.log("The grade of B is D");
} else if (B <= 80) {
  console.log("The grade of B is c");
} else if (B <= 90) {
  console.log("The grade of B is B");
} else if (B <= 100) {
  console.log("The grade of B is A");
} else {
  console.log("Not a valid nummBer for grade");
}

if (c <= 60) {
  console.log("The grade of c is F");
} else if (c <= 70) {
  console.log("The grade of c is D");
} else if (c <= 80) {
  console.log("The grade of c is c");
} else if (c <= 90) {
  console.log("The grade of c is B");
} else if (c <= 100) {
  console.log("The grade of c is A");
} else {
  console.log("Not a valid nummBer for grade");
}

if (d <= 60) {
  console.log("The grade of d is F");
} else if (d <= 70) {
  console.log("The grade of d is D");
} else if (d <= 80) {
  console.log("The grade of d is c");
} else if (d <= 90) {
  console.log("The grade of d is B");
} else if (d <= 100) {
  console.log("The grade of d is A");
} else {
  console.log("Not a valid nummBer for grade");
}

if (e <= 60) {
  console.log("The grade of e is F");
} else if (e <= 70) {
  console.log("The grade of e is D");
} else if (e <= 80) {
  console.log("The grade of e is c");
} else if (e <= 90) {
  console.log("The grade of e is B");
} else if (e <= 100) {
  console.log("The grade of e is A");
} else {
  console.log("Not a valid nummBer for grade");
}

// Distinction fore
if (a >= avg) {
  console.log("A is Distinction");
} else {
  console.log("A is not Distinction");
}
if (B >= avg) {
  console.log("B is Distinction");
} else {
  console.log("B is not Distinction");
}
if (c >= avg) {
  console.log("c is Distinction");
} else {
  console.log("c is not Distinction");
}
if (d >= avg) {
  console.log("d is Distinction");
} else {
  console.log("d is not Distinction");
}
if (e >= avg) {
  console.log("e is Distinction");
} else {
  console.log("e is not Distinction");
}
