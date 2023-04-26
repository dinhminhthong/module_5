package com.example.book_be.service;

import com.example.book_be.model.Book;

import java.util.List;

public interface IBookService {
    List<Book> findAll();
    Book findById (int id);
    void delete (int id);
    void save (Book book);
    void update (Book book);
}
