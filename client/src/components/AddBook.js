import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_AUTHORS } from '../queries/queries';
import { useForm } from 'react-hook-form';

function AddBook({ onAuthorSelected }){
  const { addBook, handleSubmit } = useForm();
  function onSubmit(bookData) {
    console.log(bookData); // { username: 'test', email: 'test', password: 'test' }
  }

  const { loading, error, data } = useQuery(GET_AUTHORS);
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="field">
        <label>Book Name</label>
        <input name="bookName" ref={addBook} />
      </div>
      <div className="field">
          <label>Genre:</label>
          <input name="genre" ref={addBook}/>
      </div>
      <div className="field">
        <select name="Author" ref= {addBook} onChange={onAuthorSelected}>
          <option>Select Author</option>
            {data.authors.map(author => (
            <option key={author.id} value={author.name}>
              {author.name}
            </option>
          ))}
        </select>
      </div>
      <input type="submit" />
    </form>
  );
}

export default AddBook;