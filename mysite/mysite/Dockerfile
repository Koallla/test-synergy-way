# FROM python:3
# ENV PYTHONUNBUFFERED 1
# WORKDIR /app/api
# COPY requirements.txt ./
# RUN pip install -r requirements.txt
# COPY . ./
# EXPOSE 8000

# pull official base image
FROM python:3.9
# set work directory
WORKDIR /usr/src/app
# set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1
# install dependencies
RUN pip install --upgrade pip
COPY ./requirements.txt .
RUN pip install -r requirements.txt
COPY ./dockerentripoint.sh .
# copy project
COPY . .

ENTRYPOINT ["/usr/src/app/dockerentripoint.sh"]