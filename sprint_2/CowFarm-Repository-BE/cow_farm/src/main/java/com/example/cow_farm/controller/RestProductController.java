package com.example.cow_farm.controller;
import com.example.cow_farm.model.product.Product;
import com.example.cow_farm.serivce.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin("*")
public class RestProductController {
    @Autowired
    private IProductService productService;


    @GetMapping("api/product/list") //sổ list sản phẩm
    public ResponseEntity<List<Product>> findAll() {
        List<Product> products = productService.findAll();
        if (products.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<>(products, HttpStatus.OK);
        }
    }

    @GetMapping("api/product") // tìm sản phẩm theo tên
    public ResponseEntity<List<Product>> findAll(@RequestParam(defaultValue = "", required = false) String nameSearch) {
        List<Product> products = productService.findAllByName(nameSearch);
        if (products.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<>(products, HttpStatus.OK);
        }
    }

    @GetMapping("/api/product-detail/{productId}") // tìm sản phẩm chi tiết
    public ResponseEntity<Product> findProductById(@PathVariable Long productId) {
        Product product = productService.findById(productId);
        if (product == null) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(product, HttpStatus.OK);
        }
    }
    @GetMapping("/api/product-inventory-level/{value}/{productId}")
    public ResponseEntity<Product> findProductById(@PathVariable int value, @PathVariable Long productId) {
        this.productService.setInventoryLevelByProductId(value, productId);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}