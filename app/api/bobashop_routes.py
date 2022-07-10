from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import db, BobaShop
from app.forms import BobaShopForm
from .auth_routes import validation_errors_to_error_messages

bobashop_routes = Blueprint('bobaShops', __name__)



# ——————————————————————————————————————————————————————————————————————————————————
# *                                   CREATE                                       *
# ——————————————————————————————————————————————————————————————————————————————————
@bobashop_routes.route('', methods=['POST'])
@login_required
def create_bobaShop():
    form = BobaShopForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    print('FORMMMMMMMM---------------')
    print(request.json, "THIS IS THE REQUEST JSON")
    print(form.data, "THIS IS THE USER ID")
    if form.validate_on_submit():
        # bobaShop = BobaShop(
        #     name=form.name.data,
        #     address=form.address.data,
        #     city=form.city.data,
        #     state=form.state.data,
        #     zipcode=form.zipcode.data,
        #     phone=form.phone.data,
        #     hours=form.hours.data,
        #     # image=form.image.data,
        # )
        print('HELLO---------------------------------------')
        data = form.data
        bobaShop = BobaShop(
            user_id=data['user_id'],
            name=data['name'],
            address=data['address'],
            city=data['city'],
            state=data['state'],
            zipcode=data['zipcode'],
            phone=data['phone'],
            hours=data['hours'],
            image=data['image']
        )
        db.session.add(bobaShop)
        db.session.commit()
        return bobaShop.to_dict()
    return {"errors": validation_errors_to_error_messages(form.errors)}, 401


# ——————————————————————————————————————————————————————————————————————————————————
# *                                   READ
# ——————————————————————————————————————————————————————————————————————————————————
@bobashop_routes.route('/')
@login_required
def bobashop():
    bobaShops = BobaShop.query.all()
    # print(bobaShops, "this is bobashop")
    return {'bobaShops': [bobashop.to_dict() for bobashop in bobaShops]}


@bobashop_routes.route('/<int:id>')
@login_required
def bobashop_id(id):
    bobaShop = BobaShop.query.get(id)
    # print(bobaShop.id, "this is bobashop id----------")
    return bobaShop.to_dict()






# ——————————————————————————————————————————————————————————————————————————————————
# *                                   DELETE
# ——————————————————————————————————————————————————————————————————————————————————
@bobashop_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_bobaShop(id):
    bobaShop = BobaShop.query.get(id)
    # need to check if user is owner of bobaShop !!!!!!!!!!!!!!!!!!!
    db.session.delete(bobaShop)
    db.session.commit()
    return bobaShop.to_dict()
