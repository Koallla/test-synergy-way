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

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1
RUN pip install --upgrade pip
COPY ./requirements.txt .
RUN pip install -r requirements.txt
# copy entrypoint.sh
# COPY ./entrypoint.sh .
# copy project
COPY . .
# run entrypoint.sh
# ENTRYPOINT ["/usr/src/app/entrypoint.sh"]