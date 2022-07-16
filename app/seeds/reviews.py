from app.models import db, Review


# Adds a demo user, you can add other users here if you want
def seed_reviews():
    demo_review = Review(
        user_id=1, boba_shop_id=1, content='This is one of my favorite boba spots!', picture='https://images.squarespace-cdn.com/content/v1/50ce46ece4b01020c34fd52b/1441947579015-AVWT7D7X2OYQONV2787K/image-asset.jpeg', date='2020-01-01 00:00:00')
    marnie_review = Review(
        user_id=2, boba_shop_id=3, content='The peach me sweetea is so refreshing!', picture='https://s3-media0.fl.yelpcdn.com/bphoto/mTbNwvtuaU8ddK4QmMSUug/l.jpg', date='2020-01-01 00:00:00')
    bobbie_review = Review(
        user_id=3, boba_shop_id=2, content='Sunright never disappoints!', picture='https://s3-media0.fl.yelpcdn.com/bphoto/Z4o88CIGscGAPUbGiLm3UA/l.jpg', date='2020-01-01 00:00:00')
    review1 = Review(
        user_id=1, boba_shop_id=4, content='Their salted cheese drinks are really good!', picture='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj29ntiGUh_3iYUDX6n2vHxYvZePoPHY0tPeOuwLlf6Dy-9Pv0VBDKyW-e2QUFmuoSgz0&usqp=CAU', date='2020-01-01 00:00:00')
    review2 = Review(
        user_id=2, boba_shop_id=1, content='Their strawberry matcha latte is sooooo good!!', picture='https://talkboba.com/wp-content/uploads/2020/04/bobaguys-talk-boba-1024x1024.jpg', date='2020-01-01 00:00:00')
    review3 = Review(
        user_id=3, boba_shop_id=5, content='unique drinks and great customer service!', picture='https://media-cdn.tripadvisor.com/media/photo-s/1c/ac/64/6f/tiramisu-latte-and-chocolate.jpg', date='2020-01-01 00:00:00')
    review4 = Review(
        user_id=1, boba_shop_id=6, content='Hands down my favorite boba shop! Strawberry milk tea for the win!!', picture='https://s3-media0.fl.yelpcdn.com/bphoto/AsiDRPlvHjXmjIG0Ol9FdA/o.jpg', date='2020-01-01 00:00:00')
    review5 = Review(
        user_id=2, boba_shop_id=7, content='Love the aesthetics in this boba shop! They also have donuts and stir fried boba!!', picture='https://lh3.googleusercontent.com/p/AF1QipOyfNyIWTkYUIcmqit8O9Hj9IaxKGQ9SkN3A7UC=w768-h768-n-o-v1', date='2020-01-01 00:00:00')
    review6 = Review(
        user_id=3, boba_shop_id=8, content='The matcha marble is so good!!', picture='https://s3-media0.fl.yelpcdn.com/bphoto/PJ_nJwcJ3poPD6rZbAPYzw/348s.jpg', date='2020-01-01 00:00:00')
    review7 = Review(
        user_id=1, boba_shop_id=9, content='Drinks are very unique. Nightclub vibes in this bobashop!', picture='https://s3-media0.fl.yelpcdn.com/bphoto/XhZ_kxWXVOXY-3kTtxYYfg/348s.jpg', date='2020-01-01 00:00:00')
    review8 = Review(
        user_id=2, boba_shop_id=10, content='Very refreshing drinks!', picture='https://www.restaurantnews.com/wp-content/uploads/2022/04/Teaspoon-on-Track-to-be-the-Fastest-Growing-Boba-Tea-Cafe-in-the-Nation.jpg', date='2020-01-01 00:00:00')
    review9 = Review(
        user_id=3, boba_shop_id=11, content='Pekoe has a very unique menu and is such a vibe at night!', picture='https://s3-media0.fl.yelpcdn.com/bphoto/kXSYMSihZiFHY-pxQExVxg/348s.jpg', date='2020-01-01 00:00:00')
    review10 = Review(
        user_id=1, boba_shop_id=12, content='Mediocre drinks. Their popcorn chicken is really good though!', picture='https://s3-media0.fl.yelpcdn.com/bphoto/pPvJexI2pBxO3m323pPgqQ/348s.jpg', date='2020-01-01 00:00:00')
    review11 = Review(
        user_id=2, boba_shop_id=13, content='Their fruit teas are usually better than their milk teas. I love their hawaiian fruit tea, but this time I just got the jasmine milk teas.', picture='https://chowyumla.files.wordpress.com/2019/12/71835947_2591890617558417_1768588457849913344_n.jpg?w=640', date='2020-01-01 00:00:00')
    # review12 = Review(
    #     user_id=3, boba_shop_id=14, content='My first time trying liquid nitrogen boba. SO creamy and smooth!', picture='https://fastly.4sqi.net/img/general/600x600/12291826_0Yw2AS3iMORYLxPS8yk4IfdEGh-zK8qPpwziT7cJwb8.jpg', date='2020-01-01 00:00:00')


    db.session.add(demo_review)
    db.session.add(marnie_review)
    db.session.add(bobbie_review)
    db.session.add(review1)
    db.session.add(review2)
    db.session.add(review3)
    db.session.add(review4)
    db.session.add(review5)
    db.session.add(review6)
    db.session.add(review7)
    db.session.add(review8)
    db.session.add(review9)
    db.session.add(review10)
    db.session.add(review11)
    # db.session.add(review12)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_reviews():
    db.session.execute('TRUNCATE reviews RESTART IDENTITY CASCADE;')
    db.session.commit()
