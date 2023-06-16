package com.example.product.repository;

import com.example.product.model.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface IProductRepository extends JpaRepository<Product,Integer> {
    @Query(value = "select * from product where name like concat('%', :name, '%') " +
            "and product_type_id like concat('%', :id, '%')", nativeQuery = true)
    Page<Product> findAllProducts(@Param("name") String name, @Param("id") String bookTypeId, Pageable pageable);
}
