FROM python:alpine

# upgrade pip
RUN pip install --upgrade pip

# get curl for healthchecks
RUN apk add curl

# permissions and nonroot user for tightened security
RUN adduser -D nonroot
RUN mkdir /home/app/ && chown -R nonroot:nonroot /home/app
RUN mkdir -p /var/log/gunicorn-flask && touch /var/log/gunicorn-flask/gunicorn-flask.err.log && touch /var/log/gunicorn-flask/gunicorn-flask.out.log
RUN chown -R nonroot:nonroot /var/log/gunicorn-flask
WORKDIR /home/app
USER nonroot

# copy all the files to the container
COPY --chown=nonroot:nonroot . .

# venv
ENV VIRTUAL_ENV=/home/app/venv

# python setup
RUN python -m venv $VIRTUAL_ENV
ENV PATH="$VIRTUAL_ENV/bin:$PATH"
RUN export FLASK_APP=app.py
RUN pip install -r requirements.txt

ENV GOOGLE_APPLICATION_CREDENTIALS=application-credential.json

# define the port number the container should expose
# EXPOSE 5001

CMD ["python", "app.py"]
