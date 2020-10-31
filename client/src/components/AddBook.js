import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_AUTHORS } from '../queries/queries';
import { useForm } from 'react-hook-form';

function AddBook({ onAuthorSelected }){
  const { addBook, handleSubmit, errors } = useForm();
  const onSubmit = bookData => console.log(bookData);

  const { loading, error, data } = useQuery(GET_AUTHORS);
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  console.log(data.authors);
  
  return (
    <form id="add-book" onSubmit={handleSubmit(onSubmit)}>
      <div className="field">
        <label>Book Name</label>
        <input 
          name="bookName" 
          defaultValue="Book Name" 
          ref={addBook} />
      </div>
      <div className="field">
        <label>Genre</label>
        <input
          name="genre"
          defaultValue="Genre"
          ref={addBook}
        />
      </div>
      <div className="field">
        <label>Author:</label>
        <select name="author" ref={addBook} onChange={onAuthorSelected}>
          <option>Select Author</option>
            {data.authors.map(author => <option>{author.name}</option>)}
        </select>
      </div>
      <input type="submit" />
      {errors}
    </form>
  );
}

export default AddBook;