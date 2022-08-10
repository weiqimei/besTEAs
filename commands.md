1. api route
2. thunk and reducer in store, add to index.js reducer combiner
3. home component
4. implement component in App.js src file



backend (root)
- pipenv shell
- flask run


frontend (react-app)
- npm start




reset database
- flask db init (this will create the migrations folder)
- flask db migrate (this will create the versions file; migrate tables)
- flask db upgrade (creates tables in db)
- flask seed all (seeds data)


reset database on heroku

heroku login

heroku run -a besteas flask seed undo 
heroku run -a besteas flask db downgrade 
heroku run -a besteas flask db upgrade 
heroku run -a besteas flask seed all
