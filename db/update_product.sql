update products set description = $2 
where product_id = $1;

-- passed in from ('db').update_product(id, description)