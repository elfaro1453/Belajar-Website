# Membuat Komponen AddTodo

Komponen AddTodo terdiri dari formulir yang berisi input type text dan input type submit.

Buat file `AddTodo.js` di dalam folder `components`.

Masukkan kode berikut :

```javascript
import React from 'react'

function AddTodo() {
  return (
    <form>
      <input type="text" name="todo" placeholder="Add Todo.."/>
      <input type="submit" value="submit"/>
    </form>
  )
}
export default AddTodo
```
