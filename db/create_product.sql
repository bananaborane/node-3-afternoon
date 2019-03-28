insert into products (
    name,
    description,
    price,
    image_url
) values (
    $1,
    $2,
    $3,
    $4
)

-- $1,2,3,4 has to be in order, passed in from ('db').create_product($1, $2, $3, $4)