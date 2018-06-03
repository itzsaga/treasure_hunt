5.times do
  User.create(
      email: Faker::Internet.email,
      password: Faker::Internet.password,
      name: Faker::Name.name
  )
end

@users = User.all.count

10.times do
  Product.create(
    name: Faker::Hipster.sentence(3),
    description: Faker::Hipster.paragraph,
    user_id: rand(1..@users)
  )
end

10.times do
  Tag.create(
    name: Faker::Hipster.word
  )
end

@products = Product.all.count
@tags = Tag.all.count

Product.all.each do |product|
  product.tags.push(Tag.find(rand(1..@tags)))
end

20.times do
  ProductUser.create(
    product_id: rand(1..@products),
    user_id: rand(1..@users)
  )
end