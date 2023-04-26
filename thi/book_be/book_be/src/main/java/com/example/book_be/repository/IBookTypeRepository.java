package com.example.book_be.repository;

import com.example.book_be.model.BookType;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IBookTypeRepository extends JpaRepository <BookType,Integer> {
    BookType findById (int id);
}
