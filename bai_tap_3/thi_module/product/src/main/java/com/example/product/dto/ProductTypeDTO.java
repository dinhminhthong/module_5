package com.example.product.dto;

import java.util.Set;

public class ProductTypeDTO {
    private Integer id;
    public String type;
    public Set<ProductDTO> productDTOSet;

    public ProductTypeDTO() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Set<ProductDTO> getProductDTOSet() {
        return productDTOSet;
    }

    public void setProductDTOSet(Set<ProductDTO> productDTOSet) {
        this.productDTOSet = productDTOSet;
    }
}
