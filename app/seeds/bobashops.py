from app.models import db, BobaShop

def seed_bobashops():
    bobaGuys = BobaShop(
        user_id=1, name="Boba Guys", image="https://images.squarespace-cdn.com/content/v1/50ce46ece4b01020c34fd52b/1444963324683-TRFEHW1IWZ566HLE1HTD/image-asset.jpeg?format=1500w", address="3491 19th St.", city="San Francisco", state="CA", zipcode="94110", phone="(415) 967-2622", hours="11:00 AM - 8:00 PM")
    sunright = BobaShop(
        user_id=3, name="Sunright", image="https://toast-local-nyc3-production.nyc3.cdn.digitaloceanspaces.com/restaurants/33ec1d6b-421d-4ee5-a3c9-86e5edde33b7/sunright-tea-studio-banner-8079948-1408.webp", address="795 E El Camino Real", city="Sunnyvale", state="CA", zipcode="94087", phone="(510) 999-7777", hours="12:00 PM - 9:00 PM")
    tastea = BobaShop(
        user_id=2, name="Tastea", image="https://s3-media0.fl.yelpcdn.com/bphoto/ckDxpIP1NOX8g8rEhAaDEA/o.jpg", address="3247 South White Rd.", city="San Jose", state="CA", zipcode="95148", phone="(408) 503-6364", hours="11:00 AM - 11:00 PM")
    happyLemon = BobaShop(
        user_id=1, name="Happy Lemon", image="https://images.squarespace-cdn.com/content/v1/5aae10155ffd2005d9bbb09d/1607732594860-YFWKU381IJESNPKCGYHO/IMG_1756_1.jpg?format=1500w", address="20488 Stevens Creek Blvd Ste 2040", city="Cupertino", state="CA", zipcode="95014", phone="(408) 216-0232", hours="12:00 PM - 9:00 PM")
    bobaBliss = BobaShop(
        user_id=2, name="Boba Bliss", image="https://visittrivalley.com/wp-content/uploads/2019/06/Boba-Bliss-2.jpg", address="8945 San Ramon Rd", city="Dublin", state="CA", zipcode="94568", phone="(925) 230-8775", hours="11:30 AM - 9:30 PM")
    tpTea = BobaShop(
        user_id=3, name="Tp Tea", image="https://s3-media0.fl.yelpcdn.com/bphoto/u623VOPt8FLn87KxMBmJXw/o.jpg", address="10787 S Blaney Ave", city="Cupertino", state="CA", zipcode="95014", phone="(408) 982-3902", hours="11:30 AM - 9:30 PM")
    boberTea = BobaShop(
        user_id=1, name="Bober Tea", image="https://s3-media0.fl.yelpcdn.com/bphoto/XpASDvspU3py0cTaD4F0CQ/o.jpg", address="1153 Locust St", city="Walnut Creek", state="CA", zipcode="94596", phone="11:00 AM - 8:00 PM", hours="11:00 AM - 8:00 PM")
    roseTeaLounge = BobaShop(
        user_id=2, name="Rose Tea Lounge", image="https://s3-media0.fl.yelpcdn.com/bphoto/RIXY8sc_M0kKVCBNXGVLGQ/o.jpg", address="9160 E Stockton Blvd Ste 120", city="Elk Grove", state="CA", zipcode="95624", phone="(916) 667-3748", hours="12:00 PM - 9:00 PM")
    tisane = BobaShop(
        user_id=1, name="Tisane", image="https://s3-media0.fl.yelpcdn.com/bphoto/UR4_dxF_WmOpGVmz0Z7iEw/o.jpg", address="2980 E Capitol Expy Ste 50", city="San Jose", state="CA", zipcode="95148", phone="(408) 833-9790", hours="12:00 PM - 12:00 AM")
    teaspoon = BobaShop(
        user_id=2, name="Teaspoon", image="https://www.restaurantnews.com/wp-content/uploads/2022/04/Teaspoon-on-Track-to-be-the-Fastest-Growing-Boba-Tea-Cafe-in-the-Nation.jpg", address="25034 Hesperian Blvd", city="Hayward", state="CA", zipcode="94545", phone="(510) 274-5908", hours="11:00 AM - 10:00 PM")
    pekoe = BobaShop(
        user_id=3, name="Pekoe", image="https://s3-media0.fl.yelpcdn.com/bphoto/9NM3I_qbVHQYy4aIRBflWw/o.jpg", address="996 Lundy Ave", city="San Jose", state="CA", zipcode="95133", phone="(408) 684-4109", hours="10:00 AM - 12:00 AM")
    iTea = BobaShop(
        user_id=2, name="iTea", image="https://s3-media0.fl.yelpcdn.com/bphoto/8ky1KKFei_MwVmXh5ibvjQ/o.jpg", address="177 Pelton Ctr Way", city="San Leandro", state="CA", zipcode="94577", phone="(510) 878-7485", hours="11:30 AM - 9:00 PM")
    sharetea = BobaShop(
        user_id=2, name="Sharetea", image="https://d1ralsognjng37.cloudfront.net/1e4b0f4f-0ee3-41de-8b4e-f99820a55878.jpeg", address="135 4th St", city="San Francisco", state="CA", zipcode="94103", phone="(415) 227-0888", hours="11:00 AM - 9:00 PM")
    n7 = BobaShop(
        user_id=3, name="N7", image="https://s3-media0.fl.yelpcdn.com/bphoto/3rvbcum4ddtBuIk6yIWdSg/o.jpg", address="3005 Silver Creek Rd Ste 184", city="San Jose", state="CA", zipcode="95121", phone="(669) 234-4964", hours="12:00 PM - 10:00 PM")

    db.session.add(bobaGuys)
    db.session.add(tastea)
    db.session.add(sunright)
    db.session.add(happyLemon)
    db.session.add(bobaBliss)
    db.session.add(tpTea)
    db.session.add(boberTea)
    db.session.add(roseTeaLounge)
    db.session.add(pekoe)
    db.session.add(tisane)
    db.session.add(teaspoon)
    db.session.add(iTea)
    db.session.add(sharetea)

    db.session.commit()


def undo_bobashops():
    db.session.execute('TRUNCATE boba_shops RESTART IDENTITY CASCADE;')
    db.session.commit()
