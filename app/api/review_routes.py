from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import db, Review
from app.forms import ReviewForm
from .auth_routes import validation_errors_to_error_messages

review_routes = Blueprint('review', __name__) # review or reviews??


# ——————————————————————————————————————————————————————————————————————————————————
# *                                   READ
# ——————————————————————————————————————————————————————————————————————————————————
# might need to fix this
@review_routes.route('/<int:id>')
@login_required
def get_reviews(id):
    reviews = Review.query.filter(Review.boba_shop_id == id) #bobaShopId or bobaShop_id??
    return {'reviews': [review.to_dict() for review in reviews]}
