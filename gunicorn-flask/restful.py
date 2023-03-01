from flask import Flask, request, jsonify
from flask_restx import Resource, Api, reqparse
from model import db, Actor
from serializers import AlchemyEncoder, new_alchemy_encoder
import json

api = Api(title='Flask API Server', prefix='/api', default='Flask', default_label='google analytics API', version='1.1')
parser = reqparse.RequestParser()

class Index(Resource):
    def get(self):
        # ret = []
        # res = Actor.query.all()
        # for actor in res:
        #     ret.append(
        #         {
        #             'first_name': actor.first_name,
        #             'last_name': actor.last_name
        #         }
        #     )
        # print json.dumps(c, cls=AlchemyEncoder)
        # result = map(lambda c: json.dumps(c, cls=AlchemyEncoder), Actor.query.all())
        # return list(result), 200
        # return result, 200
        # return json.dumps(Actor.query.all(), cls=new_alchemy_encoder(), check_circular=False)
        actors = Actor.query.all()
        return jsonify(actors)

api.add_resource(Index, '/actor')

class QueryResource(Resource):
    def get(self):
        query_string = request.query_string
        param = request.args.get('param')
        return {
            'query_string':  query_string.decode('utf-8'),
            'param': param
        }

api.add_resource(QueryResource, '/get')

class PostResource(Resource):
    def post(self):
        json = request.get_json(force = True)
        return { 'json_request': json }

api.add_resource(PostResource, '/post')

class VariableRouting(Resource):
    def get(self, id):
        return { 'id': id }

api.add_resource(VariableRouting, '/var/<string:id>')

# @app.route("/users")
# def user_list():
#     users = db.session.execute(db.select(Actor).order_by(Actor.username)).scalars()
#     return render_template("user/list.html", users=users)

# @app.route("/users/create", methods=["GET", "POST"])
# def user_create():
#     if request.method == "POST":
#         user = Actor(
#             username=request.form["username"],
#             email=request.form["email"],
#         )
#         db.session.add(user)
#         db.session.commit()
#         return redirect(url_for("user_detail", id=user.id))

#     return render_template("user/create.html")

# @app.route("/user/<int:id>")
# def user_detail(id):
#     user = db.get_or_404(Actor, id)
#     return render_template("user/detail.html", user=user)

# @app.route("/user/<int:id>/delete", methods=["GET", "POST"])
# def user_delete(id):
#     user = db.get_or_404(Actor, id)

#     if request.method == "POST":
#         db.session.delete(user)
#         db.session.commit()
#         return redirect(url_for("user_list"))

#     return render_template("user/delete.html", user=user)
