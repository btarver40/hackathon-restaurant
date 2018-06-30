counter = 1
10.times do
  name = Faker::Name.name
  email = "test#{counter}@test.com"
  password = "password"
  password_confirmation = "password"
  role = ['admin', 'guest'].sample
  User.create(name: name, email: email, password: password, password_confirmation: password_confirmation, role: role)
  puts "Created user: #{name}, #{email}, #{role}"
  counter += 1
end

30.times do
  name = Faker::Food.dish
  description = Faker::FamilyGuy.quote + ' ' + Faker::FamilyGuy.quote
  price = rand(30) + 6.95
  quantity = rand(50) + 5
  Item.create(name: name, description: description, price: price, quantity: quantity)
  puts "Created item: #{name}, #{description}, $#{price}, quantity: #{quantity}"
end

