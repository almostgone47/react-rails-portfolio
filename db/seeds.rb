# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
9.times do |i|
    Blog.create(
      title: "Blog #{i + 1}",
      body: "Here's a little song I wrote. You might to sing it note for note. Don't worry. Be happy. Don't worry. Beeeeee happy. Cause when you're worried your face will frown and that will bring everybody down, so don't worry. Beeeeee happy. Be happy now.",
    )
end