package com.example.product.service;

import com.example.product.dto.ProductDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;


public interface IProductService {
    Page<ProductDTO> findAll (String name, String bookTypeId, Pageable pageable);
    void save(ProductDTO productDTO);
}
