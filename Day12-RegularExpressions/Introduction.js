/* 
A regular expression or RegExp is a small programming language that helps to find pattern in data. A RegExp can be used to check if some pattern exists in a different data types. To use RegExp in JavaScript either we use RegExp constructor or we can declare a RegExp pattern using two forward slashes followed by a flag. We can create a pattern in two ways.

To declare a string we use a single quote, double quote a backtick to declare a regular expression we use two forward slashes and an optional flag. The flag could be g, i, m, s, u or y.

RegExp parameters
A regular expression takes two parameters. One required search pattern and an optional flag.

Pattern
A pattern could be a text or any form of pattern which some sort of similarity. For instance the word spam in an email could be a pattern we are interested to look for in an email or a phone number format number might be our interest to look for.

Flags
Flags are optional parameters in a regular expression which determine the type of searching. Let us see some of the flags:

g: a global flag which means looking for a pattern in whole text
i: case insensitive flag(it searches for both lowercase and uppercase)
m: multiline
*/

// Creating a pattern with RegExp Constructor
// Declaring regular expression without global flag and case insensitive flag.

// without flag
let pattern = "love";
let regEx = new RegExp(pattern);
console.log(regEx); // /love/

// Declaring regular expression with global flag and case insensitive flag.
let pattern2 = "love";
let flag = "gi";
let regEx2 = new RegExp(pattern2, flag);
console.log(regEx2); // /love/gi

// Declaring a regex pattern using RegExp object.
// Writing the pattern and the flag inside the RegExp constructor

let regEx3 = new RegExp("love", "gi");
console.log(regEx3); // /love/gi

/* 
Creating a pattern without RegExp Constructor
Declaring regular expression with global flag and case insensitive flag. */

let regEx4 = /love/gi;

console.log("--------------");

// RegExpp Object Methods
// test():Tests for a match in a string. It returns true or false.

const str = "I love JS";
const pattern3 = /love/;
console.log(pattern3);
const result = pattern3.test(str);
console.log(result); // false

/* 
match():Returns an array containing all of the matches, including capturing groups, or
null if no match is found. If we do not use a global flag, match() returns an array containing
the pattern, index, input and group. */

const str2 = "I love JavaScript";
const result2 = str2.match(/love/);
console.log(result2); // ["love", index: 2, input: "I love JavaScript", groups: undefined]

const result3 = str2.match(/love/g);
console.log(result3); // ['love']

// search(): Tests for a match in a string. It returns the index of the match, or -1 if the search fails.
const result4 = str2.search(/love/g);
console.log(result4); //2

// Replacing a substring
// replace(): Executes a search for a match in a string,
// and replaces the matched substring with a replacement substring.

const txt =
  "Python is the most beautiful language that a human begin has ever created. I recommend python for a first programming language";

const replace = txt.replace(/Python|python/, "JS");
console.log(replace);

const replace2 = txt.replace(/Python|python/g, "JS");
console.log(replace2);

const replace3 = txt.replace(/Python/gi, "JS");
console.log(replace3);

const txt2 = "%I a%m st%%a%%u%d%ent a%n%d %% I l%o%ve st%ud%ying JS";

matches = txt2.replace(/%/g, "");
console.log(matches); // I am staudent and  I love studying JS

/* 
[]: A set of characters
[a-c] means, a or b or c
[a-z] means, any letter a to z
[A-Z] means, any character A to Z
[0-3] means, 0 or 1 or 2 or 3
[0-9] means any number 0 to 9
[A-Za-z0-9] any character which is a to z, A to Z, 0 to 9
\: uses to escape special characters
\d mean: match where the string contains digits (numbers from 0-9)
\D mean: match where the string does not contain digits
. : any character except new line character(\n)
^: starts with
r'^substring' eg r'^love', a sentence which starts with a word love
r'[^abc] mean not a, not b, not c.
$: ends with
r'substring$' eg r'love$', sentence ends with a word love
*: zero or more times
r'[a]*' means a optional or it can occur many times.
+: one or more times
r'[a]+' means at least once or more times
?: zero or one times
r'[a]?' means zero times or once
\b: word bounder, matches with the beginning or ending of a word
{3}: Exactly 3 characters
{3,}: At least 3 characters
{3,8}: 3 to 8 characters
|: Either or
r'apple|banana' mean either of an apple or a banana
(): Capture and group
*/

/* 
Square Bracket
Let's use square bracket to include lower and upper case
 */

const sqPattern = "[Aa]pple"; // this square bracket means either A or a
const txt3 =
  "Apple and banana are fruits. An old cliche says an apple a day keeps the  doctor way has been replaced by a banana a day keeps the doctor far far away. ";
const matches1 = txt3.match(sqPattern);
console.log(matches1);

const matches2 = txt3.match(/[Aa]pple/g);
console.log(matches2); // ['Apple', 'apple']

// If we want to look for the banana, we write the pattern as follows:
const matches3 = txt3.match(/[Aa]pple|[Bb]anana/g);
console.log(matches3); //  ['Apple', 'banana', 'apple', 'banana']

// Escape character(\) in RegExp
const txt4 = "This regular expression example was made in Finland 01-2021";
const matches4 = txt4.match(/\d+/g);
console.log(matches4); // ['01', '2021']
const matches5 = txt4.match(/\d/g);
console.log(matches5); // ['0', '1', '2', '0', '2', '1']

// Period(.)
const txt5 = "Apple and banana are fruits";
const matches6 = txt5.match(/[a]./g); // // this square bracket means a and.means any character except new line
console.log(matches6);

const matches7 = txt5.match(/[a].+/g); // . any character, + any character one or more times
console.log(matches7); // ['and banana are fruits']

// Zero or more times(*)
// Zero or many times. The pattern may not occur or it can occur many times.

const txt6 =
  "I am not sure if there is a convention how to write the word e-mail.\
Some people write it email others may write it as Email or E-mail.";
const matches8 = txt6.match(/[Ee]-?mail/g); // ? means optional
console.log(matches8); // ['e-mail', 'email', 'Email', 'E-mail']

/* 
Quantifier in RegExp

We can specify the length of the substring we look for in a text, using a curly bracket.
Let us see, how ot use RegExp quantifiers.
Imagine, we are interested in substring that their length are 4 characters
*/

const txt7 = "This regular expression example was made in January 1, 2022.";
const matches9 = txt7.match(/\b[a-zA-Z]{4}\b/g); //  exactly four character words without numbers
console.log(matches9); // ['This', 'made']

const matches10 = txt7.match(/\d{4}/g); // a number and exactly four digits
console.log(matches10); // ["2022"];

// Cart ^ means start with

const matches11 = txt7.match(/^This/g); // starts with This
console.log(matches11); // ['This']

const matches12 = txt7.match(/[^A-Za-z,. ]+/g); // ^ in set character means negation, not A to Z, not a to z, no space, no comma no period
console.log(matches12); // ['1', '2022']

// Exact match
// It should have ^ starting and $ which is an end.

namee = "Sujan";
const matches13 = namee.match(/^[A-Z][a-z]{3,12}$/g); //
console.log(matches13); // ['Sujan']
