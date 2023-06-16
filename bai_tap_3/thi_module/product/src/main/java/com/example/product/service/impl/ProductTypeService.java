package com.example.product.service.impl;

import com.example.product.dto.ProductTypeDTO;
import com.example.product.model.ProductType;
import com.example.product.repository.IProductTypeRepository;
import com.example.product.service.IProductTypeService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ProductTypeService implements IProductTypeService {
    @Autowired
    private IProductTypeRepository productTypeRepository;
    @Override
    public List<ProductTypeDTO> findAll() {
        List<ProductType> productTypeList = productTypeRepository.findAllProductTypes();
        List<ProductTypeDTO> bookTypeDTOList = new ArrayList<>();
        ProductTypeDTO productTypeDTO;
        for (ProductType productType: productTypeList) {
            productTypeDTO = new ProductTypeDTO();
            BeanUtils.copyProperties(productType, productTypeDTO);
            bookTypeDTOList.add(productTypeDTO);
        }
        return bookTypeDTOList;
    }
}
