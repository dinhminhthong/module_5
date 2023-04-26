package com.example.book_be.service;

import com.example.book_be.model.Book;
import com.example.book_be.repository.IBookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookService implements IBookService {
    @Autowired
    private IBookRepository bookRepository;

    @Override
    public List<Book> findAll() {
        return bookRepository.findAll();
    }

    @Override
    public Book findById(int id) {
        return bookRepository.findById(id).get();
    }

    @Override
    public void delete(int id) {
        Book book=findById(id);
        book.setDelete(true);
        bookRepository.findAll();
    }

    @Override
    public void save(Book book) {
        Book book1 = new Book();
        bookRepository.save(book1);
    }

    @Override
    public void update(Book book) {

    }
}
