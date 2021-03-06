from flask_wtf import FlaskForm
from wtforms import StringField, DateField, IntegerField

class BobaShopForm(FlaskForm):
  # user_id = IntegerField('user_id')
  name = StringField('name')
  address = StringField('address')
  city = StringField('city')
  state = StringField('state') 
  zipcode = IntegerField('zipcode')
  phone = StringField('phone')
  hours = StringField('hours')
  image = StringField('image')
