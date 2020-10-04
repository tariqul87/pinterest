### Pinterest

Pinterest application to develop technical skill and use case analysis

### `Install dependencies`

Go to project folder and add following commands

```
python3 -m venv .venv
source .venv/bin/activate

pip install -r api/requirements.txt

python api/manage.py migrate
```

### `Start App server and app`

npm start

### fixture data

fixture data is added at `api/pinterest/fixtures/` as `user.json` and `tag.json`. Load them, or create them by API endpoints `/api/users/` and `/api/tags/`

### create front end user

```
localStorage.setItem('user', JSON.stringify({"id": <created_user_id>, "name": "name"}))
```
