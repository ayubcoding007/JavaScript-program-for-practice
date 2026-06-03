/*
Symbol.iterator is a built-in well-known Symbol that defines the default iterator for an object. It allows an 
object to be used in for...of loops, the spread operator (...), and other iteration-based operations. Any 
object that implements Symbol.iterator becomes an iterable object.

Syntax
. object[Symbol.iterator]


What is an Iterator?
. An iterator is an object that provides a next() method.
{
  next() {
    return {
      value: ...,
      done: true/false
    };
  }
}
*/


