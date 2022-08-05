from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import db, Review, User
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
        print('---------FORM DATA VALIDATED for create review---------------------------------------')
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

# ——————————————————————————————————————————————————————————————————————————————————
# *                                   READ
# ——————————————————————————————————————————————————————————————————————————————————
# might need to fix this
@review_routes.route('/<int:id>')
# @login_required
def get_reviews(id):
    reviews = Review.query.filter(Review.boba_shop_id == id) 
    user_ids = set([review.user_id for review in reviews])
    user_id_dict = {} # id: user object
    for id in user_ids:
        user = User.query.get(id)
        user_id_dict[id] = user.to_dict()
    res_reviews = [review.to_dict() for review in reviews]
    for review in res_reviews:
        user_id = review['user_id']
        review['user'] = user_id_dict[user_id]
    return {'reviews': res_reviews}

# ——————————————————————————————————————————————————————————————————————————————————
# *                                   UPDATE
# ——————————————————————————————————————————————————————————————————————————————————
@review_routes.route('/<int:reviewId>', methods=['PUT'])
@login_required


def update_review(reviewId):
    # print(bobaShopId, 'this is bobashop id from updated reviews--------------------------------------------------')
    
    review = Review.query.filter(Review.id == reviewId).first()

    print(reviewId, 'this is review id from backend update reviews--------------------------------------------------')
    print(review, 'this is review from backend update reviews--------------------------------------------------')

    form = ReviewForm()
    data = form.data

    form['csrf_token'].data = request.cookies['csrf_token']

    print('IN UPDATE REVIEW ROUTE--------')
    print(form.data, '------this is the form data from update reviews')
    if form.validate_on_submit():
        print('---------FORM DATA VALIDATED for update review---------------------------------------')
        # review.user_id = current_user.to_dict()['id']
        # # review.boba_shop_id = bobaShopId
        review.content = data['content']
        review.picture = data['picture']
        review.date = datetime.utcnow()

        # review = Review(
        #     # user_id=data['user_id'],
        #     # user_id=current_user.to_dict()['id'],
        #     # boba_shop_id=bobaShopId,
        #     content=data['content'],
        #     picture=data['picture'],
        #     date=datetime.utcnow() # datetime.datetime.now().date()
        # )

        db.session.commit()
        return review.to_dict()
    return {"errors": validation_errors_to_error_messages(form.errors)}, 401




# ——————————————————————————————————————————————————————————————————————————————————
# *                                   DELETE
# ——————————————————————————————————————————————————————————————————————————————————
@review_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_review(id):
    review = Review.query.get(id)
    db.session.delete(review)
    db.session.commit()
    return review.to_dict()
