package com.example.product.service.impl;

import com.example.product.dto.ProductDTO;
import com.example.product.dto.ProductTypeDTO;
import com.example.product.model.Product;
import com.example.product.repository.IProductRepository;
import com.example.product.repository.IProductTypeRepository;
import com.example.product.service.IProductService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;


import java.util.ArrayList;
import java.util.List;

@Service
public class ProductService implements IProductService {
    @Autowired
    private IProductRepository productRepository;
    @Autowired
    private IProductTypeRepository productTypeRepository;
    @Override
    public Page<ProductDTO> findAll(String name, String productTypeId , Pageable pageable) {
        Page<Product> productPage = productRepository.findAllProducts(name,productTypeId,pageable);
        List<ProductDTO> productDTOList = new ArrayList<>();
        ProductDTO productDTO;
        for (Product product: productPage) {
            productDTO = new ProductDTO();
            productDTO.setProductTypeDTO(new ProductTypeDTO());
            BeanUtils.copyProperties(product.getProductType(), productDTO.getProductTypeDTO());
            BeanUtils.copyProperties(product, productDTO);
            productDTOList.add(productDTO);
        }
        return new PageImpl<>(productDTOList, pageable, productPage.getTotalElements());
    }

    @Override
    public void save(ProductDTO productDTO) {
        Product product = new Product();
        product.setProductType(productTypeRepository.findTypeOfProductById(productDTO.getProductTypeDTO().getId()));
        BeanUtils.copyProperties(productDTO, product);
        productRepository.addProduct(product.getCode(),
                product.getImportedDate(),
                product.getName(),
                product.getQuantity(),
                product.getProductType().getId());
    }
}
