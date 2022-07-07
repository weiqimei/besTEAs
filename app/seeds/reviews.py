from app.models import db, Review


# Adds a demo user, you can add other users here if you want
def seed_reviews():
    demo_review = Review(
        user_id=1, boba_shop_id=1, content='This is one of my favorite boba spots! I love the strawberry matcha latte.', picture='https://i.pinimg.com/736x/ec/eb/fe/ecebfe0950e2979e70e8c99dc9a49ffb.jpg', date='2020-01-01 00:00:00')
    marnie_review = Review(
        user_id=2, boba_shop_id=2, content='The peach me sweetea is so refreshing!', picture='https://s3-media0.fl.yelpcdn.com/bphoto/mTbNwvtuaU8ddK4QmMSUug/l.jpg', date='2020-01-01 00:00:00')
    bobbie_review = Review(
        user_id=3, boba_shop_id=3, content='The oreo brulee is so good!', picture='https://whatnowsandiego.com/ezoimgfmt/i0.wp.com/whtnwmg.sfo2.cdn.digitaloceanspaces.com/wp-content/uploads/sites/5/2022/02/sunrightshake-1024x829.jpg?ezimgfmt=rs:337x273/rscb1/ng:webp/ngcb1', date='2020-01-01 00:00:00')

    db.session.add(demo_review)
    db.session.add(marnie_review)
    db.session.add(bobbie_review)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_reviews():
    db.session.execute('TRUNCATE reviews RESTART IDENTITY CASCADE;')
    db.session.commit()
