# A Beginner's Tutorial on for Loops in Python

## Definition

A for loop in Python is a control structure used to iterate over a sequence (like a list, tuple, dictionary, or string). The beauty of Python's for loop lies in its ability to iterate directly over items of a sequence in a clear and concise manner.

## Syntax

for item in sequence:
    # perform actions

## Usage

1.Single Argument Usage：Generates numbers from 0 to n-1.
2.Double Argument Usage：Specifies the start and end of the sequence.
3.Triple Argument Usage：Adds the ability to specify the step for incrementation.

## Example

range(5) produces 0, 1, 2, 3, 4.
range(10, 15) results in 10, 11, 12, 13, 14.
range(1, 20, 2) yields 1, 3, 5, ..., 19.

## Practical Application

1. Strings: Iterate over each character.

```python
for char in "Hello":
    print(char)
```

2. Lists: Traverse through list items.

```python
for num in [1, 2, 3]:
    print(num)
```

3. Dictionaries: Access keys and values.

```python
for key, value in {'a': 1, 'b': 2}.items():
    print(key, value)
