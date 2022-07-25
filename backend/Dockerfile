FROM python:3.9-alpine3.15
WORKDIR /code

ENV FLASK_ENV=development
ENV FLASK_RUN_PORT=666
ENV FLASK_RUN_HOST=localhost
ENV PIPENV_VENV_IN_PROJECT=1

COPY requirements.txt requirements.txt
RUN pip3 install -r requirements.txt

EXPOSE 5000
COPY . .
CMD ["python3", "src/app.py"]