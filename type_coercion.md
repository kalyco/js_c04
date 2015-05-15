Coercing a data type to take on another form.

If you use a data type that JavaScript did not expect, it tries to make
sense of the operation rather than report an error.

JavaScript can convert data types behind the scenes to complete an operation.
This is know as type coercion.

Example- A string '1' could be converted to a number 1 through: '1' > 0
As a result, the above expression would evaluate to true.

JavaScript is said to use "weak typing" because the data type for a value can change.
Some other languages require that you specify what data type each variable will be.
they are said to use "strong typing".

Type coercion can lead to unexpected values in your code (and can also cause errors).
Therefore, when checking if two values are equal, it is considered better to use strict equals operators === and !== rather than == and != as these strict operators check that the value and data types match.
