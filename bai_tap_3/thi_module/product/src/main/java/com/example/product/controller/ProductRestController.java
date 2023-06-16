package com.example.product.controller;

import com.example.product.dto.ProductDTO;
import com.example.product.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.expression.ParseException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.text.SimpleDateFormat;
import java.util.Date;

@RestController
@RequestMapping("/products")
@CrossOrigin("*")
public class ProductRestController {
    @Autowired
    private IProductService productService;
    @GetMapping("")
    @ResponseStatus(HttpStatus.OK)
    public Page<ProductDTO> getAllBooks (@PageableDefault(size = 3) Pageable pageable,
                                         @RequestParam(required = false, defaultValue = "") String name,
                                         @RequestParam(required = false, defaultValue = "") String bookTypeId) {

        Page<ProductDTO> productPage = productService.findAll(name, bookTypeId, pageable);
        for (ProductDTO product : productPage.getContent()) {
            SimpleDateFormat initialDateFormat = new SimpleDateFormat("yyyy-MM-dd");
            SimpleDateFormat newDateFormat = new SimpleDateFormat("dd/MM/yyyy");
            String date1 = product.getDate();
            String importedDateInNewFormat = "";
            try {
                Date date = initialDateFormat.parse(date1);
                importedDateInNewFormat = newDateFormat.format(date);
            } catch (ParseException e) {
                e.printStackTrace();
            } catch (java.text.ParseException e) {
                throw new RuntimeException(e);
            }
            product.setDate(importedDateInNewFormat);
        }

        return productPage;
    }

}
