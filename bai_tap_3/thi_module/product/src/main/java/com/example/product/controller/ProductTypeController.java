package com.example.product.controller;

import com.example.product.dto.ProductTypeDTO;
import com.example.product.service.IProductService;
import com.example.product.service.IProductTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/productTypes")
@CrossOrigin("*")
public class ProductTypeController {
    @Autowired
    public IProductTypeService productTypeService;

    @GetMapping("")
    @ResponseStatus(HttpStatus.OK)
    public List<ProductTypeDTO> getAllBookTypes () {
        return productTypeService.findAll();
    }
}
