from app.models import db, BobaShop

def seed_bobashops():
    bobaGuys = BobaShop(
        user_id=1, name="Boba Guys", image="https://images.squarespace-cdn.com/content/v1/50ce46ece4b01020c34fd52b/1444963324683-TRFEHW1IWZ566HLE1HTD/image-asset.jpeg?format=1500w", address="3491 19th St.", city="San Francisco", state="CA", zipcode="94110", phone="(415) 967-2622", hours="11:00 AM - 8:00 PM")
    tastea = BobaShop(
        user_id=2, name="Tastea", image="https://s3-media0.fl.yelpcdn.com/bphoto/ckDxpIP1NOX8g8rEhAaDEA/o.jpg", address="3247 South White Rd.", city="San Jose", state="CA", zipcode="95148", phone="(408) 503-6364", hours="11:00 AM - 11:00 PM")
    sunright = BobaShop(
        user_id=3, name="Sunright", image="https://toast-local-nyc3-production.nyc3.cdn.digitaloceanspaces.com/restaurants/33ec1d6b-421d-4ee5-a3c9-86e5edde33b7/sunright-tea-studio-banner-8079948-1408.webp", address="795 E El Camino Real", city="Sunnyvale", state="CA", zipcode="94087", phone="(510) 999-7777", hours="12:00 PM - 9:00 PM")

    db.session.add(bobaGuys)
    db.session.add(tastea)
    db.session.add(sunright)

    db.session.commit()


def undo_bobashops():
    db.session.execute('TRUNCATE boba_shops RESTART IDENTITY CASCADE;')
    db.session.commit()
