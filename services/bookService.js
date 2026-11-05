import * as bookModel from '../models/bookModel.js';
import validationError from '../utils/ValidationError.js';

export const getAllBooks = async () => { 
     const books = await bookModel.fetchAllBooks();
     return books;
}
const doesBookExist = async (book) =>{
     let existing;
     if(Object.hasOwn(book, "id")){
          existing = await bookModel.findBookById(book.id);
     }else{
          existing = await bookModel.findBookByNameAndAuthor(book);
     }
     

     if(existing.length > 0){
          return true;
     }
     return false;

}


export const createBook = async (book) => {  
     if(!book.name || !book.author){
          throw new validationError(404, "name and author is required!");
     }

     const existing = await doesBookExist(book);

     if (existing){
          throw new validationError(409,'Book already exist!');
     }

     const booksId = await bookModel.insert(book);
     return booksId;
}



export const updateBook = async (book) => {

     if(!book.name || !book.author){
          throw new validationError(404, "name and author is required!");
     }


     const existing = await doesBookExist(book);

     if (!existing){
          throw new validationError(404,'Book does not exist!');
     }


    const updatedBook = await bookModel.update(book);
    return updatedBook;
}

export const deleteBook = async (id) => {
     const existing = await doesBookExist({id});

     if (!existing){
          throw new validationError(404, 'Book does not exist!');
     }
     
     const deletedBook = await bookModel.remove(id);  
     return deletedBook;
}
