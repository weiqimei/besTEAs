from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, DateField
# from wtforms.validators import DataRequired


class ReviewForm(FlaskForm):
  # user_id = IntegerField('user_id')
  # boba_shop_id = IntegerField('boba_shop_id')
  content = StringField('content')
  picture = StringField('picture')
  date = DateField('date')
