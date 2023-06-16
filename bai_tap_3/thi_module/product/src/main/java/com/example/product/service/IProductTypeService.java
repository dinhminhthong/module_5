package com.example.product.service;

import com.example.product.dto.ProductTypeDTO;

import java.util.List;

public interface IProductTypeService {
    List<ProductTypeDTO>findAll();
}
