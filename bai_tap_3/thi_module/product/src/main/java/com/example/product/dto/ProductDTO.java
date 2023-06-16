package com.example.product.dto;

import javax.validation.constraints.Digits;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Positive;
import java.util.Date;

public class ProductDTO {
    private Integer id;
    @Pattern(regexp = "PROD-[0-9]{4}$", message = "Mã sản phẩm có định dạng PROD-XXXX (X là số)")
    private String code;
    private String name;
    private String moTa;
    private Integer price;
    @Positive(message = "Số lượng sản phẩm phải là số nguyên dương")
    @Digits(fraction = 0, message = "Số lượng sản phẩm phải là số nguyên", integer = 10)
    private Integer quantity;
    private String date;
    private ProductTypeDTO productTypeDTO;

    public ProductDTO() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getMoTa() {
        return moTa;
    }

    public void setMoTa(String moTa) {
        this.moTa = moTa;
    }

    public Integer getPrice() {
        return price;
    }

    public void setPrice(Integer price) {
        this.price = price;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public ProductTypeDTO getProductTypeDTO() {
        return productTypeDTO;
    }

    public void setProductTypeDTO(ProductTypeDTO productTypeDTO) {
        this.productTypeDTO = productTypeDTO;
    }
}
