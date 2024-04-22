import book from './Schemas.js';

export const getAllBooksModel = async () => {
  try {
    const getBooks = await book.find();
    return getBooks;
  } catch (error) {
    console.log(error);
  }
};
export const getBookForIdModel = async ({ id }) => {
  try {
    const foundBook = await book.findById(id);
    return foundBook;
  } catch (error) {
    console.log(error);
  }
};
export const createBookModel = async ({ input }) => {
  const { title, description, pages, image_url, publication_date, extract } =
    input;
  const newBook = new book({
    title,
    description,
    pages,
    image_url,
    publication_date,
    extract,
  });
  try {
    const saveBook = await newBook.save();
    return saveBook;
  } catch (error) {
    console.log(error);
  }
};

export const updateBookModel = async ({ id, data }) => {
  try {
    const bookUptaded = await book.updateOne(
      { _id: id },
      { $set: { ...data } },
    );
    console.log(bookUptaded);
    return bookUptaded;
  } catch (error) {
    return false;
  }
};

export const deleteBookModel = async ({ id }) => {
  try {
    const bookTodelete = await book.deleteOne({ _id: id });
    if (bookTodelete.deletedCount === 0) return false;
    return bookTodelete;
  } catch (error) {
    return false;
  }
};
