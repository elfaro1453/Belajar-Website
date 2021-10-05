# Memberi Style atau CSS untuk Komponen AddTodo

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