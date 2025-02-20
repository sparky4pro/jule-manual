# Slices

Slices are pure implementation of heap allocated arrays and equivalent to Jule's slices. Useable via `jule::Slice` type.

To allocate an slice, the `jule::Slice<Item>::make` method is useful and standard way to do this.

For example:
```cpp
int main(int argc, char *argv[]) {
    auto s = jule::Slice<jule::Int>::make({1, 2, 3, 4, 5});

    s.push(6);
    s.push(7);
    s = jule::append(s, jule::Slice<jule::Int>::make({8, 9, 10}));

    std::cout << s.cap() << std::endl;
    std::cout << s.len() << std::endl;

    for (auto &item : s) {
        std::cout << item << std::endl;
    }
 
    return 0;
}
```

At the example above, the `s` allocated with initializer list. Then pushed `6` and `7` values. And then pushed `8`, `9`, and `10` values into `s` with `jule::append` function which is equivalent to Jule's built-in `append` function.

## Allocation Slices with Buffering

You can allocate slices with the `jule::Slice<Item>::alloc` method which is equivalent to the Jule's built-in `make([]Item, len, cap)` function.

For example:
```cpp
jule::Int len = 10;
jule::Int cap = 10;
auto s = jule::Slice<jule::Int>::alloc(len, cap);
std::cout << s.cap() << std::endl;
std::cout << s.len() << std::endl;
```

::: warning
The `alloc` method will not initialize the memory.
:::