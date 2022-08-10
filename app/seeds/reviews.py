from app.models import db, Review


# Adds a demo user, you can add other users here if you want
def seed_reviews():
    demo_review = Review(
        user_id=1, boba_shop_id=1, content='This is one of my favorite boba spots! They are the original creators of the strawberry matcha latte, so no other boba shop makes it better than Boba Guys, in my opinion.', picture='https://images.squarespace-cdn.com/content/v1/50ce46ece4b01020c34fd52b/1441947579015-AVWT7D7X2OYQONV2787K/image-asset.jpeg', date='2020-01-01 00:00:00')
    marnie_review = Review(
        user_id=2, boba_shop_id=3, content='The peach me sweetea is so refreshing! All of their fruit drinks are top notch, but I am not a fan of their milk teas. I love how they have fruit chunks and pulp in the fruit teas.', picture='https://s3-media0.fl.yelpcdn.com/bphoto/mTbNwvtuaU8ddK4QmMSUug/l.jpg', date='2020-01-01 00:00:00')
    bobbie_review = Review(
        user_id=3, boba_shop_id=2, content='Sunright never disappoints! My top 3 drinks would be the oreo brulee, creme pudding milk tea, and matcha brulee. For the milk teas, I would recommend getting half sugar, but for the fruit teas I would recommend getting full sugar.', picture='https://s3-media0.fl.yelpcdn.com/bphoto/Z4o88CIGscGAPUbGiLm3UA/l.jpg', date='2020-01-01 00:00:00')
    review1 = Review(
        user_id=1, boba_shop_id=4, content='Their salted cheese drinks are really good! Most Happy Lemon locations have snacks too; I love to get their egg puffs. Their matcha drinks are really good too, especially the mango matcha milk tea.', picture='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj29ntiGUh_3iYUDX6n2vHxYvZePoPHY0tPeOuwLlf6Dy-9Pv0VBDKyW-e2QUFmuoSgz0&usqp=CAU', date='2020-01-01 00:00:00')
    review2 = Review(
        user_id=2, boba_shop_id=1, content='Their strawberry matcha latte is sooooo good!! Drinks are definitely on the pricier side, so I usually go with their signature drinks. The wait time has always been at least 30 minutes for me, so I like to order online ahead of time.', picture='https://talkboba.com/wp-content/uploads/2020/04/bobaguys-talk-boba-1024x1024.jpg', date='2020-01-01 00:00:00')
    review3 = Review(
        user_id=3, boba_shop_id=5, content='Unique drinks and great customer service! Definitely one of my favorite boba places in the Bay Area. Some of my friends argue that they make the strawberry matcha latter better than Boba Guys!', picture='https://media-cdn.tripadvisor.com/media/photo-s/1c/ac/64/6f/tiramisu-latte-and-chocolate.jpg', date='2020-01-01 00:00:00')
    review4 = Review(
        user_id=1, boba_shop_id=6, content='Hands down my favorite boba shop! TP TEA is the US branch of Chun Shui Tang - the boba shop in Taiwan that invented boba! I have tried almost every drink on their menu, and my top choice has to be the strawberry milk tea. TP Tea never disappoints :)', picture='https://s3-media0.fl.yelpcdn.com/bphoto/AsiDRPlvHjXmjIG0Ol9FdA/o.jpg', date='2020-01-01 00:00:00')
    review5 = Review(
        user_id=2, boba_shop_id=7, content='Love the aesthetics in this boba shop! Stir fried boba is their specialty, but honestly I can barely tell what is different about it from regular brown sugar boba. Definitely worth going for the aesthetic pictures!', picture='https://lh3.googleusercontent.com/p/AF1QipOyfNyIWTkYUIcmqit8O9Hj9IaxKGQ9SkN3A7UC=w768-h768-n-o-v1', date='2020-01-01 00:00:00')
    review6 = Review(
        user_id=3, boba_shop_id=8, content='The matcha marble is so good!! Comparable to OMOMO in SoCal, but better! The aesthetic of this boba shop is very nice on the inside. The have a wide variety of drinks on their menu, and all the drinks are super pretty. ', picture='https://s3-media0.fl.yelpcdn.com/bphoto/PJ_nJwcJ3poPD6rZbAPYzw/348s.jpg', date='2020-01-01 00:00:00')
    review7 = Review(
        user_id=1, boba_shop_id=10, content='Drinks are very unique, but not the best. Even though I get the least sugar option, the drinks taste like the full sweetness. Besides the drinks, I love the decor and music they play. Nightclub vibes in this boba shop!', picture='https://s3-media0.fl.yelpcdn.com/bphoto/XhZ_kxWXVOXY-3kTtxYYfg/348s.jpg', date='2020-01-01 00:00:00')
    review8 = Review(
        user_id=2, boba_shop_id=11, content='Very refreshing drinks! They use good quality ingredients, but my drinks are often very bland. I would recommend getting full sweetness and less ice, but most of the time it\'s a hit or miss.', picture='https://www.restaurantnews.com/wp-content/uploads/2022/04/Teaspoon-on-Track-to-be-the-Fastest-Growing-Boba-Tea-Cafe-in-the-Nation.jpg', date='2020-01-01 00:00:00')
    review9 = Review(
        user_id=3, boba_shop_id=9, content='Pekoe has a very unique menu and is such a vibe at night! Their drinks are similar to Tisane\'s and so is the vibe inside. They let you sample their drinks too! In terms of the boba pearls, they had no flavor and were not chewy.', picture='https://s3-media0.fl.yelpcdn.com/bphoto/kXSYMSihZiFHY-pxQExVxg/348s.jpg', date='2020-01-01 00:00:00')
    review10 = Review(
        user_id=1, boba_shop_id=12, content='Mediocre drinks. I\'ve been to quite a few i-Tea locations throughout the Bay Area and I haven\'t been satisfied with any of them since there are better ones in the area. Price wise, their drinks are on the more affordable end.', picture='https://s3-media0.fl.yelpcdn.com/bphoto/pPvJexI2pBxO3m323pPgqQ/348s.jpg', date='2020-01-01 00:00:00')
    review11 = Review(
        user_id=2, boba_shop_id=13, content='This used to by my go-to boba spot in high school. Their fruit teas are usually better than their milk teas, in my opinion. I love their hawaiian fruit tea, but this time I just got the jasmine milk teas. The drinks here are definitely bang for your buck!', picture='https://chowyumla.files.wordpress.com/2019/12/71835947_2591890617558417_1768588457849913344_n.jpg?w=640', date='2020-01-01 00:00:00')
    review12 = Review(
        user_id=3, boba_shop_id=14, content='My first time trying liquid nitrogen boba. SO creamy and smooth!', picture='https://fastly.4sqi.net/img/general/600x600/12291826_0Yw2AS3iMORYLxPS8yk4IfdEGh-zK8qPpwziT7cJwb8.jpg', date='2020-01-01 00:00:00')


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
    db.session.add(review12)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_reviews():
    db.session.execute('TRUNCATE reviews RESTART IDENTITY CASCADE;')
    db.session.commit()
