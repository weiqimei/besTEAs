from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import BobaShop

bobashop_routes = Blueprint('bobaShops', __name__)


@bobashop_routes.route('/')
@login_required
def bobashop():
    bobashop = BobaShop.query.all()
    return {'bobaShops': [bobashop.to_dict() for bobashop in bobaShops]}
