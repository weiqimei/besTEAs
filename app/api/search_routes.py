from flask import Blueprint
from app.models import BobaShop

search_routes = Blueprint('search', __name__)

@search_routes.route('/', methods=['GET'])
def get_bobaShops():
  print('HITTING BACK END ------------------------------')

  bobaShops_list = []
  bobaShops = BobaShop.query.all()

  def get_bobaShop_ids(bobaShop):
    return bobaShop.id

  
  bobaShop_ids = list(map(get_bobaShop_ids, bobaShops))

  for i in range(0, len(bobaShops)):
    bobaShops_list.append({'name': bobaShops[i].name, 'bobaShopId': bobaShops[i].id})

  return {'bobaShops': bobaShops_list}
