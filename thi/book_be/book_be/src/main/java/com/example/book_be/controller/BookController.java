package com.example.book_be.controller;

import com.example.book_be.model.Book;
import com.example.book_be.service.IBookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.RequestEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin ("*")
@RequestMapping ("/book")
public class BookController {
    @Autowired
    private IBookService bookService;
    @GetMapping ("")
    public RequestEntity<List<Book>> getAll(){


        return null;
    }
}
