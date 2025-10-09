# Arrays

**Definition:** Ordered collection of elements stored in a contiguous block of memory. Index-based access.

---

## 🔹 Key Operations

| Operation | Example | Complexity |
|-----------|---------|------------|
| Access | arr[0] | O(1) |
| Insert at end | arr.push(5) | O(1) |
| Remove last | arr.pop() | O(1) |
| Insert/remove first | arr.unshift()/arr.shift() | O(n) |
| Slice | arr.slice(0,2) | O(k) |

---

## 🔹 Mental Model / Diagram

Index: 0 1 2 3
Array: [10, 20, 30, 40]

- Boxes = elements  
- Numbers on top = indices  

---

## 🔹 MERN Use Cases

- Rotate homepage banners  
- Paginate product lists  
- Store ordered data temporarily in state (React `useState` / Redux)

---

## 🔹 Practice Ideas

1. Reverse a string  
2. Find max sum subarray (Sliding window)  
3. Paginate an array of products  
4. Rotate banners using shift/unshift or push/shift
