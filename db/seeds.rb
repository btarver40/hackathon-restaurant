10.times do
  name = Faker::Food.dish
  description = Faker::FamilyGuy.quote + ' ' + Faker::FamilyGuy.quote
  price = 10 + rand(30)
  quantity = 5 + rand(100)
  Item.create(name: name, description: description, price: price, quantity: quantity)
  puts "Created food item: #{name}, description: #{description}, price: $#{price}, quantity: #{quantity}"
end

counter = 1
10.times do
  name = Faker::Name.name
  email = "test#{counter}@test.com"
  password = "password"
  password_confirmation = "password"
  role = ['admin', 'guest'].sample
  User.create(name: name, email: email, password: password, password_confirmation: password_confirmation, role: role)
  puts "Created user: #{name}, email: #{email}, role: #{role}"
  counter += 1
end


