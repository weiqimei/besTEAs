from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, DateField
# from wtforms.validators import DataRequired


class ReviewForm(FlaskForm):
  user_id = IntegerField('user_id')
  bobaShop_id = IntegerField('bobaShop_id')
  content = StringField('content')
  picture = StringField('picture')
  date = DateField('date')
