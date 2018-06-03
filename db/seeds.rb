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
    name: Faker::Hipster.sentence(3)
    description: Faker::Hipster.paragraph
    user_id: rand(@users)
  )
end

10.times do
  Tag.create(
    name: Faker::Hipster.word
  )
end