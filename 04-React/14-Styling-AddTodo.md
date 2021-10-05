# Memberi Style atau CSS untuk Komponen AddTodo

Kita bisa memberi identitas pada elemen HTML di JSX menggunakan `id` dan `className`. Setelah komponen diberi identitas, barulah kita bisa memberi style CSS untuk komponen tersebut.

Buka file `AddTodo.jsx`, tambahkan className pada form dan id pada input di dalamnya.

```javascript
import './styles/AddTodo.css'

function AddTodo() {
  return (
    <form className="form">
      <input type="text" name="todo" placeholder="Add Todo.." id="todo"/>
      <input type="submit" value="submit" id="submit"/>
    </form>
  )
}
export default AddTodo
```

Simpan file `AddTodo.jsx`. Anda akan menemukan error dikarenakan file `AddTodo.css` tidak ditemukan, oleh karenanya kita perlu membuat file tersebut seperti cara di bawah ini.

## Buat AddTodo.css

Buat file bernama `AddTodo.css` di dalam folder `styles`.

Masukkan kode berikut ini.

```css
.form {
  width: 100%;
  display: flex;
  flex-direction: row;
  border: 1px solid black;
}

#todo {
  width: 80%;
}
#submit {
  width: 20%;
  padding: 2px;
  background-color: darksalmon;
  color: white;
}
```

Simpan file `AddTodo.css`, maka error pada `AddTodo.jsx` tidak ada lagi.
