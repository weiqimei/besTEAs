from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import BobaShop

bobashop_routes = Blueprint('bobaShops', __name__)


@bobashop_routes.route('/')
@login_required
def bobashop():
    bobaShops = BobaShop.query.all()
    print(bobaShops, "this is bobashop")
    return {'bobaShops': [bobashop.to_dict() for bobashop in bobaShops]}


@bobashop_routes.route('/<int:id>')
@login_required
def bobashop_id(id):
    bobaShop = BobaShop.query.get(id)
    return bobaShop.to_dict()
