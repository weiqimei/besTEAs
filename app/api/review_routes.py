from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import db, Review
from app.forms import ReviewForm
from .auth_routes import validation_errors_to_error_messages
from datetime import datetime

review_routes = Blueprint('review', __name__) # review or reviews??


# ——————————————————————————————————————————————————————————————————————————————————
# *                                   CREATE                                       
# ——————————————————————————————————————————————————————————————————————————————————
@review_routes.route('/<int:bobaShopId>/new', methods=['POST']) # might not need the / ???
@login_required
def create_review(bobaShopId):
    form = ReviewForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    data = form.data

    print(data, "---THIS IS THE REQUEST DATA----")

    if form.validate_on_submit():
        print('---------FORM DATA VALIDATED---------------------------------------')
        review = Review(
            # user_id=data['user_id'],
            user_id=current_user.to_dict()['id'],
            boba_shop_id=bobaShopId,
            content=data['content'],
            picture=data['picture'],
            date=datetime.utcnow() # datetime.datetime.now().date()
        )
        db.session.add(review)
        db.session.commit()
        return review.to_dict()
    return {"errors": validation_errors_to_error_messages(form.errors)}, 401

# @review_routes.route('/<int:bobaShopId>', methods=['POST'])
# @login_required
# def create_review(bobaShopId):
#     form = ReviewForm()
#     form['csrf_token'].data = request.cookies['csrf_token']
#     data = form.data
#     if form.validate_on_submit():
#         review = Review(
#             user_id=data['user_id'],
#             boba_shop_id=bobaShopId,
#             content=data['content'],
#             picture=data['picture'],
#             date=data['date'] # datetime.datetime.now().date()
#         )
#         db.session.add(review)
#         db.session.commit()
#         return review.to_dict()
#     return {"errors": validation_errors_to_error_messages(form.errors)}, 401


# ——————————————————————————————————————————————————————————————————————————————————
# *                                   READ
# ——————————————————————————————————————————————————————————————————————————————————
# might need to fix this
@review_routes.route('/<int:id>')
@login_required
def get_reviews(id):
    reviews = Review.query.filter(Review.boba_shop_id == id) 
    return {'reviews': [review.to_dict() for review in reviews]}
