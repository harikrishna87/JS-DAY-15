// 1 Question
let str = "Hello World!";
let str2 = str.replace("World!", "My dear Friend");

console.log(str2);

// 2 Question
let a = "Hungry ";
let b = a.repeat(10);
console.log(b);

for (let i = 0; i <= 10;i++) {
    setTimeout(() => {
        console.log(a.repeat(1))
    }, i * 1000);
};

// 3 Question
let sentence = "The quick brown fox jumps over the lazy dog. The fox is clever.";
console.log(sentence.length);
let words = sentence.lastIndexOf("fox");
console.log(words);

// 4 Question
let message = "Hello, world!";
console.log(message.startsWith("hi"));

// 5 Question
let fileName = "document.pdf";
console.log(fileName.endsWith(".pdf"));