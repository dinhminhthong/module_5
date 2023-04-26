package com.example.book_be.repository;

import com.example.book_be.model.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface IBookRepository extends JpaRepository<Book,Integer> {

}
