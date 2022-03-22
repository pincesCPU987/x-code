
```+--------------------------------+
| \   /     +----         | +--+ |
|  \ /      |             | |  | |
|   X   --- |     +--+ +--+ +--+ |
|  / \      |     |  | |  | |    |
| /   \     +---- +--+ +--+ +--- |
+--------------------------------+```

Quick Docs:
  To use an if statement, syntax is:

    if <value> <eq | not eq | gt | not gt | lt | not lt | gteq | not gteq | lteq | not lteq> <value> :
    <code>
    endif

  where eq is 'equal to', gt is 'greater than', lt is 'less than', gteq is 'greater than or equal to, lteq is 'less than or equal to', and not is 'not'.
  if starts the check, and endif ends it.


  To assign a variable, syntax is:

    set <variable name> to <value>

  where set starts the assignment, and to declares the value.


  To loop through a range of numbers, syntax is:

    loop from <int> to <int> by <int> :
    <code>
    endloop

  where loop starts the loop, from declares the start value, to declares the end value, by declares the step, and endloop ends the loop.



  Note:If a function and/or reserved word does not exist in X-Code, you can use the JS alternate.
