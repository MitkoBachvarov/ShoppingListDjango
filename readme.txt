1. Requirements
	- django
	- python
	- pipenv -> execute pipenv shell
	-

2. You will need 
	- djangorestframework (installed via pipenv)
	- django-cors-headers (installed via pipenv)
	- serializers to convert models to JSON


3. To add:
	- After installing django-cors - add them to the middleware as:
		'corsheaders.middleware.CorsMiddleware'
	- After installing first 2 libraries - add them to INSTALLED_APPS
	- After add:
		CORS_ORIGIN_WHITELIST = [
		     'http://localhost:3000'
		]




FRONTEND:

1. Requirements
	- I used npx