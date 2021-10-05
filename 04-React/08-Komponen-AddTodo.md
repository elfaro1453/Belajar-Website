# Membuat Komponen AddTodo

Komponen AddTodo terdiri dari formulir yang berisi input type text dan input type submit.

Buat file `AddTodo.jsx` di dalam folder `components`.

Masukkan kode berikut :

```javascript
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

Simpan file `AddTodo.jsx`

## Modifikasi App.js

Setelah membuat komponen AddTodo, kita perlu mengimport dan menggunakannya dalam `App.js`.

Buka `App.js`, modifikasi menjadi berikut ini :

```javascript
import React from 'react'
import AddTodo from "./components/AddTodo"
import Header from "./components/Header"

function App() {
  return (
    <React.Fragment>
      <Header />
      <AddTodo />
    </React.Fragment>
  );
}
export default App
```

Simpan file `App.js` kemudian lihat hasilnya di browser.
