
```
+--------------------------------+
| \   /     +----         | +--+ |
|  \ /      |             | |  | |
|   X   --- |     +--+ +--+ +--+ |
|  / \      |     |  | |  | |    |
| /   \     +---- +--+ +--+ +--- |
+--------------------------------+
```

# Quick Docs:
## 'if' statements
  To use an if statement, syntax is:

    if <value> <eq | not eq | gt | not gt | lt | not lt | gteq | not gteq | lteq | not lteq> <value> run
    <code>
    endif

  where eq is 'equal to', gt is 'greater than', lt is 'less than', gteq is 'greater than or equal to, lteq is 'less than or equal to', and not is 'not'.

#### Examples

if 7 eq 8 run
console.log('7=8');


  To assign a variable, syntax is:

    set <variable name> to <value>

  where set starts the assignment, and to declares the value.


  To loop through a range of numbers, syntax is:

    loop from <int> to <int> by <int> run
    <code>
    endloop

  where loop starts the loop, from declares the start value, to declares the end value, by declares the step, and endloop ends the loop.

  Note: If a function and/or reserved word does not exist in X-Code, you can use the JS alternate.
